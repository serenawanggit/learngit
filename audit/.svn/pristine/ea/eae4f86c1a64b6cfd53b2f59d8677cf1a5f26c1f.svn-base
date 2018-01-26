package audit.util;

import java.beans.IntrospectionException;
import java.beans.PropertyDescriptor;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.lang.reflect.Type;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;

import audit.annotation.ExcelAnnotation;
import audit.model.gj.AS_GJ_GJXJTB;



public class ExcelOperate {

	//获取Excel文档的路径  
	public   HSSFWorkbook workbook = null;
	public ExcelOperate(String filepath){
		try {
			InputStream is = new FileInputStream(new File(filepath));
			workbook = new HSSFWorkbook(is);
			}catch (Exception e) {
				e.printStackTrace();
			}
		
	}
	
	/**
	 * 从excel获取数据
	 * @param objClass
	 * @param fieldMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	public  Collection<?> obtain(Class<?> objClass) throws Exception{
		@SuppressWarnings("rawtypes")
		Collection dist = new ArrayList();
		// 将所有标有Annotation的字段，也就是允许导入数据的字段,放入到一个map中 
		Map<String, Method> fieldSetMap = new HashMap<String, Method>();
		//得到object所有属性
		Field [] fields = objClass.getDeclaredFields();
		for(Field f :fields){
			//得到字段上的Annotation
			ExcelAnnotation ea = f.getAnnotation(ExcelAnnotation.class);
			if(ea != null){
				String fieldname = f.getName(); 		
				String setMethodName = "set"  
                        + fieldname.substring(0, 1).toUpperCase()   
                        + fieldname.substring(1);
				 Method setMethod = objClass.getMethod(setMethodName,   
                         new Class[] { f.getType() }); 
				 System.out.println(ea.exportname());
				 fieldSetMap.put(ea.exportname(), setMethod);  
			}
		}
		
		HSSFSheet sheet = workbook.getSheetAt(0);
		//得到第一行
		Iterator<Row> row = sheet.rowIterator();
		Row title = row.next();
		//得到第一行的所有列
		Iterator<Cell> cellTitle = title.cellIterator();
		//将标题的文字内容放入到一个 map 中
		Map<Integer,String> titleMap = new HashMap<Integer,String>();
		int i = 0;
		while(cellTitle.hasNext()){
			Cell cell = cellTitle.next();
			String value = cell.getStringCellValue();
			titleMap.put(i, value);
			i = i + 1;
		}
		while (row.hasNext()) { 
			Row rown = row.next(); 
			Object tObject = objClass.newInstance();
			int k = 0;
			for(int c=0;c<rown.getLastCellNum();c++){
				Cell cell = rown.getCell((short)c);
				String titleString = titleMap.get(k);
				if(titleString != null){
					 Pattern p = Pattern.compile("\\s*|\t|\r|\n");
					 Matcher m = p.matcher(titleString);
					 titleString = m.replaceAll("");
				}
				System.out.println(titleString);
				if(fieldSetMap.containsKey(titleString)){
					Method setMethod = fieldSetMap
							.get(titleString);
					Type[] ts = setMethod.getGenericParameterTypes();
					String xclass = ts[0].toString();
					if(xclass.equals("class java.lang.String")){
						if(cell == null){
							setMethod.invoke(tObject,"");
						}else{
							String cellstring = getValue(cell);
							if(cellstring == null || cellstring.equals("")){
								cellstring = "null";
							}
							String cellstr = cellstring.replaceAll("\\（", "(");
							cellstr = cellstr.replaceAll("\\）", ")");
							setMethod.invoke(tObject,cellstr);
						}
					}
					if(xclass.equals("class java.lang.Integer")){
						if(cell == null){
							setMethod.invoke(tObject,0);
						}else{
							String cellstring = getValue(cell);
							String cellstr = cellstring.replaceAll("\\（", "(");
							cellstr = cellstr.replaceAll("\\）", ")");
							setMethod.invoke(tObject,cellstr);
						}
					}
				}
				k = k + 1; 
			}	
			dist.add(tObject);
		}
		return dist;
	}
	
	/**
	 * 插入excel数据到table
	 * @param objclass
	 * @param list
	 * @return
	 * @throws InstantiationException
	 * @throws IllegalAccessException
	 */
	public static int insert(Class<?> objclass,List<?> list,int year) throws InstantiationException, IllegalAccessException{
		int value = 0;
		Field fields[] = objclass.getDeclaredFields();
		String sql = "insert into dbo." + objclass.getSimpleName() + "(";
		String sql2 = "";
		List<String> fieldnames = new ArrayList<String>();
		for(Field f : fields){
			if(!f.getName().equals("id")){
				fieldnames.add(f.getName());
			}
		}
		for(int f = 0 ; f < fieldnames.size(); f++){
			sql += fieldnames.get(f) + ",";
			sql2 += "?,";
		}
		sql += " year) values (";
		sql += sql2 + " ?)";
		System.out.println(sql);
		PreparedStatement pstmt;
		Connection conn = DBConnection.getConnection();
		try {
			pstmt = conn.prepareStatement(sql,
					Statement.RETURN_GENERATED_KEYS);
			for(int i = 0; i < list.size(); i++){
				System.out.println(list.get(i).toString());
				String[] kvs = list.get(i).toString().split("\\|");
				for(int k = 0; k < kvs.length-1; k++){
					pstmt.setString(k+1, kvs[k].trim());
				}
				pstmt.setInt(kvs.length, year);
				pstmt.executeUpdate();
			}
			value = 1;
		} catch (Exception e) {
			e.printStackTrace();
			value = 0;
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return value;
	}
	
	
	@SuppressWarnings("unchecked")
	public static List<?> huoqudata(Class<?> clazz,int year) {
		
		Field fields[] = clazz.getDeclaredFields();
		@SuppressWarnings("rawtypes")
		List list = new ArrayList();
		// 通过反射获得要查询的字段
		Connection conn = DBConnection.getConnection();
		Statement stmt = null;
		ResultSet rs = null;
		Object c1 = null;
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery("select * from  " + clazz.getSimpleName()
					+ " where year = " + year);
			while (rs.next()) {
				c1 = clazz.newInstance();
				initObject(c1, fields, rs);
				list.add(c1);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return list;
	}
	
	public static List<AS_GJ_GJXJTB> huoqudata2(Class<?> clazz,int year) {
		
		Field fields[] = clazz.getDeclaredFields();
		List<AS_GJ_GJXJTB> list2 = new ArrayList<AS_GJ_GJXJTB>();
		List list = new ArrayList();
		// 通过反射获得要查询的字段
		Connection conn = DBConnection.getConnection();
		Statement stmt = null;
		ResultSet rs = null;
		Object c1 = null;
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery("select * from  " + clazz.getSimpleName()
					+ " where year = " + year);
			while (rs.next()) {
				c1 = clazz.newInstance();
				initObject(c1, fields, rs);
				list.add(c1);
			}
			
			if (list.size()>0) {
//				Object[] obj = (Object[]) list.get(0);
//				AS_GJ_GJXJTB agg = new AS_GJ_GJXJTB();
				AS_GJ_GJXJTB agg = (AS_GJ_GJXJTB) list.get(0);
				
				/*
				agg.setId(Integer.parseInt(obj[0]+""));
				
				agg.setXXBSM7(obj[1]+"");
				agg.setXXJGMCZ7(obj[2]+"");
				agg.setXXJGYWMC7(obj[3]+"");
				agg.setXXJGDZ_MC10(obj[4]+"");
				agg.setXXJGZDCXLX_MC10(obj[5]+"");
				agg.setXXJGSDGLJYXZBM_MC10(obj[6]+"");
				agg.setXXJGDZ_DM11(obj[7]+"");
				agg.setXXJGZDCXLX_DM11(obj[8]+"");
				agg.setXXJGSDGLJYXZBM_DM11(obj[9]+"");
				
				agg.setXXJGBXLX_MC14(obj[10]+"");
				agg.setXXJGJBZ_MC14(obj[11]+"");
				agg.setXXJGXZLB_MC14(obj[12]+"");
				agg.setGDNZ_XX14(obj[13]+"");
				agg.setGDRXNL_XX14(obj[14]+"");
				
				agg.setXXJGBXLX_DM15(obj[15]+"");
				agg.setXXJGJBZ_DM15(obj[16]+"");
				agg.setXXJGXZLB_DM15(obj[17]+"");
				agg.setGDNZ_CZ15(obj[18]+"");
				agg.setGDRXNL_CZ15(obj[19]+"");
				
				agg.setYZBM17_1(obj[20]+"");
				agg.setXYJYWYM17_2(obj[21]+"");
				
				agg.setBGDH18_1(obj[22]+"");
				agg.setDWDZXX18_2(obj[23]+"");
				agg.setXYZQZ18_3(obj[24]+"");
				agg.setTBR18_4(obj[25]+"");
				
				agg.setCZDH19_1(obj[26]+"");
				agg.setTBRDZXX19_2(obj[27]+"");
				agg.setJD19_3(obj[28]+"");
				agg.setWD19_4(obj[29]+"");
				
				agg.setXXJGJBZ_MC22_1(obj[30]+"");
				agg.setXXJGSDGLJYXZBM_MC22_2(obj[31]+"");
				agg.setXXJGDZ_MC22_3(obj[32]+"");
				agg.setGDNZ_XX22_4(obj[33]+"");
				agg.setGDRXNL_XX22_5(obj[34]+"");
				
				agg.setXXJGJBZ_DM23_1(obj[35]+"");
				agg.setXXJGSDGLJYXZBM_DM23_2(obj[36]+"");
				agg.setXXJGDZ_DM23_3(obj[37]+"");
				
				agg.setGDNZ_CZ23_4(obj[38]+"");
				agg.setGDRXNL_CZ23_5(obj[39]+"");
				
				agg.setXXJGJBZ_MC24_1(obj[40]+"");
				agg.setXXJGSDGLJYXZBM_MC24_2(obj[41]+"");
				agg.setXXJGDZ_MC24_3(obj[42]+"");
				agg.setGDNZ_XX24_4(obj[43]+"");
				agg.setGDRXNL_XX24_5(obj[44]+"");
				
				agg.setXXJGJBZ_DM25_1(obj[45]+"");
				agg.setXXJGSDGLJYXZBM_DM25_2(obj[46]+"");
				agg.setXXJGDZ_DM25_3(obj[47]+"");
				agg.setGDNZ_CZ25_4(obj[48]+"");
				agg.setGDRXNL_CZ25_5(obj[49]+"");
				
				agg.setXXJGJBZ_MC26_1(obj[50]+"");
				agg.setXXJGSDGLJYXZBM_MC26_2(obj[51]+"");
				agg.setXXJGDZ_MC26_3(obj[52]+"");
				agg.setGDNZ_XX26_4(obj[53]+"");
				agg.setGDRXNL_XX26_5(obj[54]+"");
				
				agg.setXXJGJBZ_DM27_1(obj[55]+"");
				agg.setXXJGSDGLJYXZBM_DM27_2(obj[56]+"");
				agg.setXXJGDZ_DM27_3(obj[57]+"");
				agg.setGDNZ_CZ27_4(obj[58]+"");
				agg.setGDRXNL_CZ27_5(obj[59]+"");
				
				agg.setXXJGJBZ_MC28_1(obj[60]+"");
				agg.setXXJGSDGLJYXZBM_MC28_2(obj[61]+"");
				agg.setXXJGDZ_MC28_3(obj[62]+"");
				agg.setGDNZ_XX28_4(obj[63]+"");
				agg.setGDRXNL_XX28_5(obj[64]+"");
				
				agg.setXXJGJBZ_DM29_1(obj[65]+"");
				agg.setXXJGSDGLJYXZBM_DM29_2(obj[66]+"");
				agg.setXXJGDZ_DM29_3(obj[67]+"");
				agg.setGDNZ_CZ29_4(obj[68]+"");
				agg.setGDRXNL_CZ29_5(obj[69]+"");
				
				agg.setXXJGJBZ_MC30_1(obj[70]+"");
				agg.setXXJGSDGLJYXZBM_MC30_2(obj[71]+"");
				agg.setXXJGDZ_MC30_3(obj[72]+"");
				agg.setGDNZ_XX30_4(obj[73]+"");
				agg.setGDRXNL_XX30_5(obj[74]+"");
				
				agg.setXXJGJBZ_DM31_1(obj[75]+"");
				agg.setXXJGSDGLJYXZBM_DM31_2(obj[76]+"");
				agg.setXXJGDZ_DM31_3(obj[77]+"");
				agg.setGDNZ_CZ31_4(obj[78]+"");
				agg.setGDRXNL_CZ31_5(obj[79]+"");
				
				agg.setXXJGJBZ_MC32_1(obj[80]+"");
				agg.setXXJGSDGLJYXZBM_MC32_2(obj[81]+"");
				agg.setXXJGDZ_MC32_3(obj[82]+"");
				agg.setGDNZ_XX32_4(obj[83]+"");
				agg.setGDRXNL_XX32_5(obj[84]+"");
				
				agg.setXXJGJBZ_DM33_1(obj[85]+"");
				agg.setXXJGSDGLJYXZBM_DM33_2(obj[86]+"");
				agg.setXXJGDZ_DM33_3(obj[87]+"");
				agg.setGDNZ_CZ33_4(obj[88]+"");
				agg.setGDRXNL_CZ33_5(obj[89]+"");
				
				agg.setXXJGJBZ_MC34_1(obj[90]+"");
				agg.setXXJGSDGLJYXZBM_MC34_2(obj[91]+"");
				agg.setXXJGDZ_MC34_3(obj[92]+"");
				agg.setGDNZ_XX34_4(obj[93]+"");
				agg.setGDRXNL_XX34_5(obj[94]+"");
				
				agg.setXXJGJBZ_DM35_1(obj[95]+"");
				agg.setXXJGSDGLJYXZBM_DM35_2(obj[96]+"");
				agg.setXXJGDZ_DM35_3(obj[97]+"");
				agg.setGDNZ_CZ35_4(obj[98]+"");
				agg.setGDRXNL_CZ35_5(obj[99]+"");
				agg.setYear(Integer.parseInt(obj[100]+""));
				*/
				
				list2.add(agg);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return list2.size()>0?list2:null;
	}
	
	
	/**
	 * 根据结果集初始化对象
	 * 
	 * @throws SQLException
	 * @throws InvocationTargetException
	 * @throws IllegalAccessException
	 * @throws IllegalArgumentException
	 * @throws IntrospectionException
	 */

	private static void initObject(Object o, Field[] fields,
			ResultSet rs) throws SQLException, IntrospectionException, IllegalArgumentException, IllegalAccessException, InvocationTargetException{
		for (Field f : fields) {
			if(f != null){
				String propertyName = f.getName();
				Object paramVal = null;
				Class<?> clazzField = f.getType();
				if (clazzField == String.class) {
					paramVal = rs.getString(propertyName);
				}
				else if (clazzField == int.class || clazzField == Integer.class) {
					paramVal = rs.getInt(propertyName);
				}
				PropertyDescriptor pd = new PropertyDescriptor(propertyName,
						o.getClass());
				pd.getWriteMethod().invoke(o, paramVal);
			}
			
		}
	}
	public static String getValue(Cell cell) {
		String value = "";
		switch (cell.getCellType()) {
		case Cell.CELL_TYPE_NUMERIC:
			if (HSSFDateUtil.isCellDateFormatted(cell)) {
				double d = cell.getNumericCellValue();
				Date date = HSSFDateUtil.getJavaDate(d);
				SimpleDateFormat sFormat=new SimpleDateFormat("yyyy-MM-dd");
				value = sFormat.format(date);
				break;
			}else{
				cell.setCellType(Cell.CELL_TYPE_STRING);
				value = cell.getStringCellValue().toString();
			}
			
			break;
		/* 此行表示单元格的内容为string类型 */
		case Cell.CELL_TYPE_STRING: // 字符串型
			value = cell.getStringCellValue().toString();
			break;
		case Cell.CELL_TYPE_FORMULA:// 公式型
			// 读公式计算值
			value = String.valueOf(cell.getNumericCellValue());
			if (value.equals("NaN")) {// 如果获取的数据值为非法值,则转换为获取字符串
				value = cell.getStringCellValue().toString();
			}
			break;

		case Cell.CELL_TYPE_BOOLEAN:// 布尔
			value = " " + cell.getBooleanCellValue();
			break;
		/* 此行表示该单元格值为空 */
		case Cell.CELL_TYPE_BLANK: // 空值
			value = "";
			break;
		case Cell.CELL_TYPE_ERROR: // 故障
			value = "";
			break;
		default:
			value = cell.getStringCellValue().toString();
		}

		return value;
	}
	
	/**
	 * 修改高基表数据保存
	 * @param objclass
	 * @param list
	 * @return
	 * @throws InstantiationException
	 * @throws IllegalAccessException
	 */
	public static int saveEdit(Class<?> objclass,List<?> list,int year) throws InstantiationException, IllegalAccessException{
		int value = 0;
		Field fields[] = objclass.getDeclaredFields();
		String sql = "update dbo." + objclass.getSimpleName() + " set ";
		String sql2 = "insert into dbo." + objclass.getSimpleName() + "(";
		String ids = "";
		for(int i = 0; i < list.size(); i++){
			String[] kvs = list.get(i).toString().split("\\|");
			String nowId = kvs[kvs.length-1];
			ids+=nowId;
			if (i!=list.size()-1) {
				ids+=",";
			}
		}
		String sql3 = "delete dbo." + objclass.getSimpleName() + " where id not in("+ids+") and year="+year;
		
		List<String> fieldnames = new ArrayList<String>();
		for(Field f : fields){
			if (f.getName().equals("id")) {
				continue;
			}
			fieldnames.add(f.getName());
		}
		for(int f = 0 ; f < fieldnames.size(); f++){
			if ("year".equals(fieldnames.get(f))) {
				
			}else{
				sql += fieldnames.get(f) + "=?";
				int shu = 1;
				if ("AS_GJ_GJXJTB".equals(objclass.getSimpleName())) {
					shu = 2;
				}
				if (f!=fieldnames.size()-shu) {
					sql += ",";
				}
			}
			sql2 += fieldnames.get(f);
			sql2 += ",";
		}
		sql += " where id=? and year="+year;
		if ("AS_GJ_GJXJTB".equals(objclass.getSimpleName())) {
			sql2 = sql2.substring(0,sql2.lastIndexOf(","));
			sql2 += ") values(";
			
			for(int f = 0 ; f < fieldnames.size()-1; f++){
				sql2 += "?";
				sql2 += ",";
			}
		}else {
			sql2 += "year) values(";
			for(int f = 0 ; f < fieldnames.size(); f++){
				sql2 += "?";
				sql2 += ",";
			}
		}
		sql2 += year+")";
		
		PreparedStatement pstmt;
		Connection conn = DBConnection.getConnection();
		try {
			//删除
			pstmt = conn.prepareStatement(sql3,Statement.RETURN_GENERATED_KEYS);
			pstmt.executeUpdate();
			for(int i = 0; i < list.size(); i++){
				
				System.out.println(list.get(i).toString());
				String[] kvs = list.get(i).toString().split("\\|");
				System.out.println(sql2);
				if ("-1".equals(kvs[kvs.length-1])) {
					pstmt = conn.prepareStatement(sql2,Statement.RETURN_GENERATED_KEYS);
					for(int k = 0; k < kvs.length-1; k++){
						pstmt.setString(k+1, kvs[k].trim());
					}
				}else{
					pstmt = conn.prepareStatement(sql,Statement.RETURN_GENERATED_KEYS);
					for(int k = 0; k < kvs.length; k++){
						pstmt.setString(k+1, kvs[k].trim());
					}
				}
					
//				pstmt.setInt(kvs.length+1, year);
				pstmt.executeUpdate();
			}
			value = 1;
		} catch (Exception e) {
			e.printStackTrace();
			value = 0;
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return value;
	}
}
