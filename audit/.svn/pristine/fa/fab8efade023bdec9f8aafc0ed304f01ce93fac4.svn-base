package audit.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;

public class ExcelUtils {

	public static int getExcelCells(File file){
		HSSFWorkbook workbook = null;
		int cells = 0;
		try{
			InputStream in = new FileInputStream(file);
			workbook = new HSSFWorkbook(in);
			HSSFSheet sheet = workbook.getSheetAt(0);
			cells = sheet.getRow(0).getPhysicalNumberOfCells();
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return cells;
	}
	
	public static List<String> getExcelHeaders(String path){
		List<String> headers = new ArrayList<String>();
		HSSFWorkbook workbook = null;
		try{
			File file = new File(path);
			InputStream in = new FileInputStream(file);
			workbook = new HSSFWorkbook(in);
			HSSFSheet sheet = workbook.getSheetAt(0);
			//得到第一行
			Iterator<Row> row = sheet.rowIterator();
			Row title = row.next();
			//得到第一行的所有列
			Iterator<Cell> cellTitle = title.cellIterator();
			while(cellTitle.hasNext()){
				Cell cell = cellTitle.next();
				String value = cell.getStringCellValue();
				headers.add(value);
			}
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return headers;
	}
	
	public static int getExcelRows(File file){
		HSSFWorkbook workbook = null;
		int rows = 0;
		//String efiledir = Common.EXCEL_ROOT + File.separator + em.getExcelsrc();
		try{
			InputStream in = new FileInputStream(file);
			workbook = new HSSFWorkbook(in);
			HSSFSheet sheet = workbook.getSheetAt(0);//第一个工作表
			rows = sheet.getPhysicalNumberOfRows();
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return rows;
	}
	
	//获得行头
	public static List<String> getExcelRowsHeaders(String path){
		List<String> rHeaders = new ArrayList<String>();
		HSSFWorkbook workbook = null;
		try{
			File file = new File(path);
			InputStream in = new FileInputStream(file);
			workbook = new HSSFWorkbook(in);
			HSSFSheet sheet = workbook.getSheetAt(0);
			//得到第一行
			int rows = sheet.getPhysicalNumberOfRows();
			for (int i = 1; i < rows; i++) {
				HSSFRow row = sheet.getRow(i);
				HSSFCell cell = row.getCell(0);
				String value = cell.getStringCellValue();
				rHeaders.add(value);
			}
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return rHeaders;
	}
}
