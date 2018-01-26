package audit.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.One;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRichTextString;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.aspectj.weaver.patterns.ThisOrTargetAnnotationPointcut;

public class TestExcel {

	public static void readExcel(File file){
		List<ExcelContent> one=new ArrayList<ExcelContent>();
		List<String> list=new ArrayList<String>();
		List<Object[]> list3=new ArrayList<Object[]>();
		InputStream is = null;
		String sql = "";
		Workbook workbook;
		try {
			is = new FileInputStream(file);
			 workbook = WorkbookFactory.create(is);
			
			// 循环工作表Sheet  workbook.getNumberOfSheets()
			for (int numSheet = 0; numSheet < 1; numSheet++) {
				HSSFSheet hssfSheet = (HSSFSheet) workbook.getSheetAt(numSheet);
				if (hssfSheet == null) {
					continue;
				}
				// 循环行Row
				
				for (int rowNum = 0; rowNum <= hssfSheet.getLastRowNum(); rowNum++) {
					HSSFRow hssfRow = hssfSheet.getRow(rowNum);
					if (hssfRow == null) {
						continue;
					}
				//float a=	Float.parseFloat(hssfRow.getCell(2).toString());
					//循环列
//					for (int i = 0; i < hssfSheet.getRow(0).getPhysicalNumberOfCells()-1; i++) {
//					}
				   //System.out.println(hssfRow.getCell(0).toString()+"*******"+hssfRow.getCell(1).toString());
					ExcelContent excelContent=new ExcelContent();
					excelContent.setColone(hssfRow.getCell(0).toString());
					excelContent.setColtwo(hssfRow.getCell(1).toString());
					one.add(excelContent);
					list.add(hssfRow.getCell(0).toString());
				}
			}
			
			HashSet h  =   new  HashSet(list); 
		    list.clear(); 
		    list.addAll(h);
		    
			for (int i = 0; i < list.size(); i++) {
				 Object[] list2=new Object[2];
				String str1="";
				String str2="";
				for (int j = 0; j < one.size(); j++) {
					String a=list.get(i);
					String b=one.get(j).getColone();
					if (a.equals(b)) {
						str1=one.get(j).getColone();
						str2+=one.get(j).getColtwo()+";";
						list2[0]=str1;
						list2[1]=str2;
						
					}
				}
				list3.add(list2);
			}
			exportExcel(list3);

		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			try {
				is.close();
				is=null;
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
	}
	
	/**A
	 * 导出普通EXCEL--不带内部标题
	 * 
	 * @throws IOException
	 */
	public static void exportExcel(List<Object[]> list) throws IOException {
		HSSFWorkbook workbook = new HSSFWorkbook();
		HSSFSheet sheet = workbook.createSheet("ces");
		sheet.setDefaultColumnWidth(20);
		HSSFCellStyle style = ExportExcelUtil.createCellStyle(workbook, ExportExcelUtil.TITlE);
		HSSFFont font = ExportExcelUtil.createCellFont(workbook, ExportExcelUtil.TITlE);
		style.setFont(font);
	
		// 列头
		int rowid = 0;
		HSSFRow row = sheet.createRow(rowid);
		style = ExportExcelUtil.createCellStyle(workbook, ExportExcelUtil.HEAD);
		font = ExportExcelUtil.createCellFont(workbook, ExportExcelUtil.HEAD);
		style.setFont(font);

		HSSFRichTextString text = null;
		HSSFCell cell = null;
		row.setHeightInPoints(30);
		rowid++;
		HSSFCellStyle style1 = ExportExcelUtil.createCellStyle(workbook, ExportExcelUtil.CONTENT);
		HSSFCellStyle style2 = ExportExcelUtil.createCellStyle(workbook, ExportExcelUtil.CONTENT);
		HSSFFont font1 = ExportExcelUtil.createCellFont(workbook, ExportExcelUtil.CONTENT);
		style.setFont(font);
		if (list!=null){
			for (Object[] objects : list) {
				row = sheet.createRow(rowid);
				for (int i = 0,len = objects.length; i < len; i++) {
					if (objects[objects.length-1].equals(" ")||objects[objects.length-1]==null||objects[objects.length-1].equals("")) {
//						style1.setFillForegroundColor(HSSFColor.WHITE.index);
//						style1.setFillBackgroundColor(HSSFColor.BLACK.index);
						cell = row.createCell(i);
						cell.setCellStyle(style1);
						text = new HSSFRichTextString(objects[i] == null ? "" : String.valueOf(objects[i]));
						cell.setCellValue(text);
					}else {
					/*	style2.setFillForegroundColor(HSSFColor.RED.index);
						style2.setFillBackgroundColor(HSSFColor.BLACK.index);*/
						cell = row.createCell(i);
						cell.setCellStyle(style2	);
						text = new HSSFRichTextString(objects[i] == null ? "" : String.valueOf(objects[i]));
						cell.setCellValue(text);
					}
				}
				rowid++;
			}
		}
		String path = "d://ceshi.xls";
		OutputStream out = new FileOutputStream(path);
		workbook.write(out);// 写入File
	    out.flush();
	    out.close();
	}
	
	
	public static void main(String[] args) {
		String path="d://temp//T5-01.xls";
		File file =new File(path);
		readExcel(file);
	}
}
