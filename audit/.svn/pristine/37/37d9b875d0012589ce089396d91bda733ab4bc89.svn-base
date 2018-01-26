package audit.util;


import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;
import audit.annotation.ExcelAnnotation;

public class ExcelUtil {

	//读取数据
	public static List<Map<String, String>> importExcel(MultipartFile file, Class pojoClass, String... pattern) {
		List<Map<String, String>> dist = new ArrayList();
		Row title =null;
		Iterator<Row> row=null;
		try {
			// 得到目标目标类的所有的字段列表
			Field filed[] = pojoClass.getDeclaredFields();
			// 将所有标有Annotation的字段，也就是允许导入数据的字段,放入到一个map中
			Map<String, String> fieldSetMap = new HashMap<String, String>();
			// 循环读取所有字段
			for (int i = 0; i < filed.length; i++) {
				Field f = filed[i];
				// 得到单个字段上的Annotation
				ExcelAnnotation excel = f.getAnnotation(ExcelAnnotation.class);
				// 如果标识了Annotationd的话
				if (excel != null) {
					// 构造设置了Annotation的字段的Setter方法
					// 将这个method以Annotaion的名字为key来存入。
					// 对于重名将导致 覆盖失败，对于此处的限制需要
					fieldSetMap.put(excel.exportname(), f.getName());
				
				}
			}
/*			// 将传入的File构造为FileInputStream;
			FileInputStream in = new FileInputStream(file.getContentType());*/
			// // 得到工作表
		  String	filename=file.getOriginalFilename().substring(file.getOriginalFilename().indexOf("."));
			if (filename.equals(".xlsx")) {
				XSSFWorkbook book = new XSSFWorkbook(file.getInputStream());
				 // 得到第一页
				XSSFSheet sheet = book.getSheetAt(0);
				 // 得到第一面的所有行
				 row = sheet.rowIterator();
				// 得到第一行，也就是标题行
				 title = row.next();
			}else {
				HSSFWorkbook book = new HSSFWorkbook(file.getInputStream());
				// // 得到第一页
				HSSFSheet sheet = book.getSheetAt(0);
				// // 得到第一面的所有行
				 row = sheet.rowIterator();
				// 得到第一行，也就是标题行
				 title = row.next();
			}
			// 得到第一行的所有列
			Iterator<Cell> cellTitle = title.cellIterator();
			// 将标题的文字内容放入到一个map中。
			Map titlemap = new HashMap();
			// 从标题第一列开始
			int i = 0;
			// 循环标题所有的列
			while (cellTitle.hasNext()) {
				Cell cell = cellTitle.next();
				String value = cell.getStringCellValue();
				titlemap.put(i, value);
				i = i + 1;
			}
			// 用来格式化日期的DateFormat
			SimpleDateFormat sf;
			if (pattern.length < 1) {
				sf = new SimpleDateFormat("yyyy-MM-dd");
			} else{
				sf = new SimpleDateFormat(pattern[0]);
			}
			while (row.hasNext()) {
				// 标题下的第一行
				Row rown = row.next();
				// 得到传入类的实例
				Object tObject = pojoClass.newInstance();
				int k = 0;
				// 遍历一行的列
				Map<String,String> map=new HashMap<String, String>();
				while (k<=i) {
					// 这里得到此列的对应的标题
					String titleString = (String) titlemap.get(k);
					// 如果这一列的标题和类中的某一列的Annotation相同，那么则调用此类的的set方法，进行设值
					if (fieldSetMap.containsKey(titleString)) {
						map.put(fieldSetMap.get(titleString),rown.getCell(k)==null?" ":rown.getCell(k).toString());
					}
					// 下一列
					k = k + 1;
				}
				dist.add(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		return dist;
	}

	
//	public static Map<String, String> insertExcelByZB(File file){
//		InputStream is = null;
//		String sql = "";
//		Workbook workbook;
//		try {
//			is = new FileInputStream(file);
//			 workbook = WorkbookFactory.create(is);
//			
//			// 循环工作表Sheet
//			for (int numSheet = 0; numSheet < workbook.getNumberOfSheets(); numSheet++) {
//				HSSFSheet hssfSheet = (HSSFSheet) workbook.getSheetAt(numSheet);
//				if (hssfSheet == null) {
//					continue;
//				}
//				// 循环行Row
//				
//				for (int rowNum = 1; rowNum <= hssfSheet.getLastRowNum(); rowNum++) {
//					HSSFRow hssfRow = hssfSheet.getRow(rowNum);
//					if (hssfRow == null) {
//						continue;
//					}
//
//				}
//				
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}finally{
//			try {
//				is.close();
//				is=null;
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		}
//		//System.out.println("sql:"+sql);
//		return map;
//	}

}
