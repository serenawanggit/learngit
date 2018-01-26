package audit.util;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFClientAnchor;
import org.apache.poi.hssf.usermodel.HSSFComment;
import org.apache.poi.hssf.usermodel.HSSFConditionalFormattingRule;
import org.apache.poi.hssf.usermodel.HSSFDataFormat;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFPatriarch;
import org.apache.poi.hssf.usermodel.HSSFPatternFormatting;
import org.apache.poi.hssf.usermodel.HSSFRichTextString;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFSheetConditionalFormatting;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.hssf.util.Region;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.ComparisonOperator;
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.web.bind.annotation.ResponseBody;

/***
 * @author yuan
 */
@SuppressWarnings({ "deprecation", "unused" })
public class ExportExcelUtil {

	public static String TITlE = "title";
	public static String HEAD = "head";
	public static String CONTENT = "content";
	public static String THEAD = "thead";
	
	public static String GJ_TAB_TITLE = "Gj_tab_title";
	public static String GJ_TAB_TITLE2 = "Gj_tab_title2";
	public static String GJ_TAB_TITLE3 = "Gj_tab_title3";
	public static String GJ_TAB_TITLE3_LEFT = "Gj_tab_title3_left";
	public static String GJ_TAB_TITLE3_RIGHT = "Gj_tab_title3_right";
	public static String GJ_TAB_TEXT = "Gj_tab_text";
	
	public static String GJ_TAB_TITLE3_FR_DEL_BOTTOM = "Gj_tab_title3_fr_del_bottom";
	public static String GJ_TAB_TITLE3_FR_DEL_TB = "Gj_tab_title3_fr_del_tb";
	public static String GJ_TAB_TITLE3_FR_DEL_TOP = "Gj_tab_title3_fr_del_top";

	/**
	 * 样式设置
	 */
	public static HSSFCellStyle createCellStyle(HSSFWorkbook workbook, String type) {
		HSSFCellStyle style = workbook.createCellStyle();
		if (HEAD.equals(type)) {
			style.setFillForegroundColor(HSSFColor.LIME.index);//前景色
			style.setFillBackgroundColor(HSSFColor.GREEN.index);//背景色
		}else if (THEAD.equals(type)) {
			style.setFillForegroundColor(HSSFColor.GREY_25_PERCENT.index);
			style.setFillBackgroundColor(HSSFColor.GREY_25_PERCENT.index);
		}else if (GJ_TAB_TITLE.equals(type) || GJ_TAB_TITLE2.equals(type) || GJ_TAB_TITLE3.equals(type) 
				|| GJ_TAB_TITLE3_LEFT.equals(type) || GJ_TAB_TITLE3_RIGHT.equals(type) 
				|| GJ_TAB_TITLE3_FR_DEL_BOTTOM.equals(type) || GJ_TAB_TITLE3_FR_DEL_TB.equals(type) 
				|| GJ_TAB_TITLE3_FR_DEL_TOP.equals(type) ) {
			style.setFillForegroundColor(HSSFColor.GREY_25_PERCENT.index);
			style.setFillBackgroundColor(HSSFColor.GREY_25_PERCENT.index);
		}else if (GJ_TAB_TEXT.equals(type)) {
			style.setFillForegroundColor(HSSFColor.WHITE.index);
			style.setFillBackgroundColor(HSSFColor.BLACK.index);
		}  else {
			style.setFillForegroundColor(HSSFColor.WHITE.index);
			style.setFillBackgroundColor(HSSFColor.BLACK.index);
		}
		style.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
		style.setBorderBottom(HSSFCellStyle.BORDER_THIN);//下边框
		style.setBottomBorderColor(HSSFColor.BLACK.index);
		style.setBorderLeft(HSSFCellStyle.BORDER_THIN);//左边框
		style.setLeftBorderColor(HSSFColor.BLACK.index);
		style.setBorderRight(HSSFCellStyle.BORDER_THIN);//右边框
		style.setRightBorderColor(HSSFColor.BLACK.index);
		style.setBorderTop(HSSFCellStyle.BORDER_THIN);//上边框
		style.setTopBorderColor(HSSFColor.BLACK.index);
		if (THEAD.equals(type) || HEAD.equals(type) || TITlE.equals(type) || CONTENT.equals(type)) {
			// 设置自动换行
			style.setWrapText(false);
			// 设置水平对齐的样式为居中对齐
			style.setAlignment(HSSFCellStyle.ALIGN_CENTER); 
			// 设置垂直对齐的样式为居中对齐
			style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		}else if (GJ_TAB_TITLE.equals(type)) {
			style.setAlignment(HSSFCellStyle.ALIGN_CENTER); 
			style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		}else if (GJ_TAB_TITLE2.equals(type)) {
			style.setAlignment(HSSFCellStyle.ALIGN_CENTER); 
			style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		}else if (GJ_TAB_TITLE3.equals(type)) {
			style.setWrapText(true);// 设置自动换行
			style.setAlignment(HSSFCellStyle.ALIGN_CENTER); 
			style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		}else if (GJ_TAB_TITLE3_LEFT.equals(type)) {
			style.setRightBorderColor(HSSFColor.GREY_25_PERCENT.index);
			style.setAlignment(HSSFCellStyle.ALIGN_LEFT); 
			style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		}else if (GJ_TAB_TITLE3_RIGHT.equals(type)) {
			style.setLeftBorderColor(HSSFColor.GREY_25_PERCENT.index);
			style.setAlignment(HSSFCellStyle.ALIGN_RIGHT);
			style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		}else if (GJ_TAB_TITLE3_FR_DEL_BOTTOM.equals(type)) {
			style.setBottomBorderColor(HSSFColor.GREY_25_PERCENT.index);
			style.setAlignment(HSSFCellStyle.ALIGN_RIGHT);
			style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		}else if (GJ_TAB_TITLE3_FR_DEL_TB.equals(type)) {
			style.setTopBorderColor(HSSFColor.GREY_25_PERCENT.index);
			style.setBottomBorderColor(HSSFColor.GREY_25_PERCENT.index);
			style.setAlignment(HSSFCellStyle.ALIGN_RIGHT);
			style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		}else if (GJ_TAB_TITLE3_FR_DEL_TOP.equals(type)) {
			style.setTopBorderColor(HSSFColor.GREY_25_PERCENT.index);
			style.setAlignment(HSSFCellStyle.ALIGN_RIGHT);
			style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		}else if (GJ_TAB_TEXT.equals(type)) {
			style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
			style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
		}
		
		return style;
	}

	/**
	 * 字体设置
	 */
	public static HSSFFont createCellFont(HSSFWorkbook workbook, String type) {
		HSSFFont font = workbook.createFont();
		if (ExportExcelUtil.TITlE.equals(type)) {
			font.setColor(HSSFColor.BLACK.index);
			font.setFontHeightInPoints((short) 20);
			font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
		} else if (ExportExcelUtil.HEAD.equals(type)) {
			font.setColor(HSSFColor.BLACK.index);
			font.setFontHeightInPoints((short) 10);
			//粗体
			font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
		}  else if (ExportExcelUtil.GJ_TAB_TITLE.equals(type)) {
			font.setColor(HSSFColor.BLACK.index);
			font.setFontHeightInPoints((short) 20);
			//粗体
			font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
		}  else if (ExportExcelUtil.GJ_TAB_TITLE2.equals(type)) {
			font.setColor(HSSFColor.BLACK.index);
			font.setFontHeightInPoints((short) 11);
			//粗体
			font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
		} else {
			font.setColor(HSSFColor.BLACK.index);
			font.setFontHeightInPoints((short) 10);
		}
		// font.setItalic(true);//设置斜体属性
		// font.setStrikeout(true);// 是否添加删除线
		font.setFontName("宋体");
		return font;
	}

	/**
	 * 注释设置
	 */
	public static HSSFComment createCellComment(HSSFPatriarch patriarch, String commentText, String commentName) {
		// *添加单元格注释
		// 定义注释的大小和位置,详见文档
		HSSFComment comment = patriarch.createComment(new HSSFClientAnchor(0, 0, 0, 0, (short) 1, 1, (short) 2, 2));
		// 设置注释内容
		comment.setString(new HSSFRichTextString(commentText));
		// 设置注释作者，当鼠标移动到单元格上是可以在状态栏中看到该内容.
		comment.setAuthor(commentName);
		return comment;
	}

	/**
	 * 图片插入
	 */
	public static void createCellPicture(HSSFWorkbook workbook, HSSFPatriarch patriarch, String url, int col, int row) throws Exception {
		// 先把读进来的图片放到一个ByteArrayOutputStream中，以便产生ByteArray
		BufferedImage bufferImg = null;
		ByteArrayOutputStream byteArrayOut = new ByteArrayOutputStream();
		bufferImg = ImageIO.read(new File(url));
		ImageIO.write(bufferImg, "jpg", byteArrayOut);
		HSSFClientAnchor anchor = new HSSFClientAnchor(0, 0, 512, 255, (short) col, row, (short) col, row);
		anchor.setAnchorType(3);
		// 插入图片
		patriarch.createPicture(anchor, workbook.addPicture(byteArrayOut.toByteArray(), HSSFWorkbook.PICTURE_TYPE_JPEG));
		byteArrayOut.flush();
		byteArrayOut.close();
	}
	
	/**
	 * 导出EXCEL-----合并单元格---高基表
	 * 
	 * @throws IOException
	 */
	public static void exportMergeExcel(List<List<String[]>> list, String excelName, HttpServletResponse response,Map<String, String> tdMap,int celCount) throws IOException {
		HSSFWorkbook workbook = new HSSFWorkbook();
		HSSFSheet sheet = workbook.createSheet(excelName);
		sheet.setDefaultColumnWidth(16);
		
		HSSFCellStyle style = createCellStyle(workbook, ExportExcelUtil.TITlE);
		HSSFFont font = createCellFont(workbook, ExportExcelUtil.TITlE);
		// 列头
		int rowid = 0;
		HSSFRow row = sheet.createRow(rowid);
		HSSFRichTextString text = null;
		HSSFCell cell = null;
		row.setHeightInPoints(30);
		Map<Integer, Double> countMap = new HashMap<Integer, Double>();
		//---------------开始遍历数据--------------------------------
		if (list!=null){
			
		int lie = 0;
		int rowsCount = 0;
		for (List<String[]> trlist : list) {
			//-----------------------------------------------------------------------
			int col = 0;
			for (int i = 0; i < trlist.size(); i++) {
				String[] tds = trlist.get(i);
				String tdText = tds[0];
				int rows = (tds[1]==""?1:Integer.parseInt(tds[1]));//跨行
				int cols = (tds[2]==""?1:Integer.parseInt(tds[2]));//跨列
				rows-=1;
				cols-=1;
				int nowCol = col;
				//是否被占
				if (tdMap.get(rowid+"-"+nowCol)!=null && tdMap.get(rowid+"-"+nowCol)!="") {
					for (int j = nowCol+1; j <= celCount; j++) {
						if (tdMap.get(rowid+"-"+j)!=null && tdMap.get(rowid+"-"+j)!="") {
							continue;
						}
						nowCol = j;
						break;
					}
				}
 				//参数：起始行号，终止行号， 起始列号，终止列号
				sheet.addMergedRegion(new CellRangeAddress(rowid, rowid + rows, nowCol, nowCol + cols));
				col = nowCol + cols +1;//1 + cols;//(i==0?1:0)
			}//for end
			//-----------------------------------------------------------------------
			
 			//创建行
			row = sheet.createRow(rowid);
			
			//创建列---------------------------------------------------------test
			int col2 = 0;
			for (int i = 0; i < trlist.size(); i++) {
				String[] tds = trlist.get(i);
				String tdText = tds[0];
				int rows = (tds[1]==""?1:Integer.parseInt(tds[1]));//跨行
				int cols = (tds[2]==""?1:Integer.parseInt(tds[2]));//跨列
				rows-=1;
				cols-=1;
				String className = tds[3];//样式
				int nowCol = col2;
				//是否被占
				if (tdMap.get(rowid+"-"+nowCol)!=null && tdMap.get(rowid+"-"+nowCol)!="") {
					for (int j = col2+1; j <= celCount; j++) {
						if (tdMap.get(rowid+"-"+j)!=null && tdMap.get(rowid+"-"+j)!="") {
							continue;
						}
						nowCol = j;
						break;
					}
				}
				
				
				//创建列
				cell = row.createCell(nowCol);
				text = new HSSFRichTextString(tdText == null ? "" : String.valueOf(tdText));
				cell.setCellValue(text);
				//-----------------------------------------------------------------------style
				style = createCellStyle(workbook, className);
				font = createCellFont(workbook, className);
				style.setFont(font);
				//-----------------------------------------------------------------------end style
				cell.setCellStyle(style);
				
				
				//补齐
				if (cols>=1) {
					for (int k = nowCol+1; k <= nowCol+cols; k++) {
						//创建列
						cell = row.createCell(k);
						text = new HSSFRichTextString("");
						cell.setCellValue(text);
						//-----------------------------------------------------------------------style
						style = createCellStyle(workbook, className);
						font = createCellFont(workbook, className);
						style.setFont(font);
						//-----------------------------------------------------------------------end style
						cell.setCellStyle(style);
					}
				}
				
				
				//填补
				for (Map.Entry<String, String> entry : tdMap.entrySet()) {
					String key = entry.getKey();
					String []row1 = key.split("-");
					if (row1[0].equals((rowid+""))) {
						//创建列
						cell = row.createCell(Integer.parseInt(row1[1]));
						text = new HSSFRichTextString("");
						cell.setCellValue(text);
						//-----------------------------------------------------------------------style
						style = createCellStyle(workbook, entry.getValue());
						font = createCellFont(workbook, entry.getValue());
						style.setFont(font);
						//-----------------------------------------------------------------------end style
						cell.setCellStyle(style);
					}
				}
				
				col2 = nowCol + cols +1;//1 + cols;
			}//for end
			
			rowid++;
			
//			for(int i =1;i<=trlist.size();i++)
//			{
//				sheet.autoSizeColumn(i-1);
//			}
		}//for end
		
		
		}//if end
		
		response.setContentType("applicationnd.ms-excel");
		String fileName = new String(excelName.getBytes("gb2312"), "ISO-8859-1");
		response.setHeader("Content-disposition", "attachment; filename=" + fileName + ".xls");
		workbook.write(response.getOutputStream());
		response.getOutputStream().flush();
		response.getOutputStream().close();
	}

	/**
	 * 导出EXCEL
	 * 
	 * @throws IOException
	 */
	public static void excel(List<Object[]> list, String[] head, String titleStr, String excelName, HttpServletResponse response, int rowTo, short colTo) throws IOException {
		System.out.println("进来了：");
		HSSFWorkbook workbook = new HSSFWorkbook();
		HSSFSheet sheet = workbook.createSheet(excelName);
		sheet.setDefaultColumnWidth(20);
		
		HSSFCellStyle style = createCellStyle(workbook, ExportExcelUtil.TITlE);
		HSSFFont font = createCellFont(workbook, ExportExcelUtil.TITlE);
		style.setFont(font);
		// 头
		HSSFRow titleRow = sheet.createRow(0);
		HSSFCell titleCell = titleRow.createCell(0);//2
		titleCell.setCellStyle(style);
		titleCell.setCellValue(titleStr);
		Region region1 = new Region(0, (short)0, rowTo, colTo);
		sheet.addMergedRegion(region1);
		// 列头
		int rowid = 5;
		HSSFRow row = sheet.createRow(rowid);
		style = createCellStyle(workbook, ExportExcelUtil.HEAD);
		font = createCellFont(workbook, ExportExcelUtil.HEAD);
		style.setFont(font);

		HSSFRichTextString text = null;
		HSSFCell cell = null;
		row.setHeightInPoints(30);
		Map<Integer, Double> countMap = new HashMap<Integer, Double>();
		for (int i = 0; i < head.length; i++) {
			cell = row.createCell(i);
			if (head[i].indexOf("{count}") > -1) {
				countMap.put(i - 1, 0d);
			}
			text = new HSSFRichTextString(head[i].replace("{count}", ""));
			cell.setCellValue(text);
			cell.setCellStyle(style);
			
		}
		rowid++;
		style = createCellStyle(workbook, null);
		font = createCellFont(workbook, null);
		style.setFont(font);
		int no = 1;// 序号
		if (list!=null){
		for (Object[] objects : list) {
			row = sheet.createRow(rowid);
			cell = row.createCell(0);
			text = new HSSFRichTextString(String.valueOf(no));
			cell.setCellValue(text);
			cell.setCellStyle(style);
			for (int i = 0; i < objects.length; i++) {
				cell = row.createCell(i + 1);
				if (countMap.containsKey(i)) {
					countMap.put(i, add(countMap.get(i), parseDouble(String.valueOf(objects[i]))));
					cell.setCellType(HSSFCell.CELL_TYPE_NUMERIC);
					style.setDataFormat(HSSFDataFormat.getBuiltinFormat("0.00"));
					cell.setCellValue(parseDouble(String.valueOf(objects[i])));
					cell.setCellStyle(style);
				} else {
					text = new HSSFRichTextString(objects[i] == null ? "" : String.valueOf(objects[i]));
					cell.setCellValue(text);
					cell.setCellStyle(style);
				}
			}
			no++;
			rowid++;
		}
		// 总计
		row = sheet.createRow(rowid);
		cell = row.createCell(0);
		text = new HSSFRichTextString("总计");
		cell.setCellValue(text);
		for (Map.Entry<Integer, Double> entry : countMap.entrySet()) {
			cell = row.createCell(entry.getKey() + 1);
			style.setDataFormat(HSSFDataFormat.getBuiltinFormat("0.000"));
			cell.setCellValue(entry.getValue());
		}
		
		}
		
		// 设置图片
//		createCellPicture(workbook,
//		patriarch,map.get(String.valueOf(j)).toString(), 6, i);
		response.setContentType("applicationnd.ms-excel");
		String fileName = new String(excelName.getBytes("gb2312"), "ISO-8859-1");
		response.setHeader("Content-disposition", "attachment; filename=" + fileName + ".xls");
		workbook.write(response.getOutputStream());
		response.getOutputStream().flush();
		response.getOutputStream().close();
	}
	
	/**
	 * 导出普通EXCEL--不带内部标题
	 * 
	 * @throws IOException
	 */
	public static void exportExcel(List<Object[]> list, String[] head, String titleStr, String excelName, HttpServletResponse response, int rowTo, short colTo) throws IOException {
		HSSFWorkbook workbook = new HSSFWorkbook();
		HSSFSheet sheet = workbook.createSheet(excelName);
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
		for (int i = 0; i < head.length; i++) {
			cell = row.createCell(i);
			text = new HSSFRichTextString(head[i]);
			cell.setCellValue(text);
			cell.setCellStyle(style);
		}
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
						style1.setFillForegroundColor(HSSFColor.WHITE.index);
						style1.setFillBackgroundColor(HSSFColor.BLACK.index);
						cell = row.createCell(i);
						cell.setCellStyle(style1);
						text = new HSSFRichTextString(objects[i] == null ? "" : String.valueOf(objects[i]));
						cell.setCellValue(text);
					}else {
						style2.setFillForegroundColor(HSSFColor.RED.index);
						style2.setFillBackgroundColor(HSSFColor.BLACK.index);
						cell = row.createCell(i);
						cell.setCellStyle(style2	);
						text = new HSSFRichTextString(objects[i] == null ? "" : String.valueOf(objects[i]));
						cell.setCellValue(text);
					}
				}
				rowid++;
			}
		}
		
		response.setContentType("applicationnd.ms-excel");
		String fileName = new String(excelName.getBytes("gb2312"), "ISO-8859-1");
		response.setHeader("Content-disposition", "attachment; filename=" + fileName + ".xls");
		workbook.write(response.getOutputStream());
	}
	
	/**
	 * 导出正式库EXCEL--不带内部标题
	 * 
	 * @throws IOException
	 */
	public static void exportPassExcel(List<Object[]> list, String[] head, String titleStr, String excelName, HttpServletResponse response, int rowTo, short colTo) throws IOException {
		HSSFWorkbook workbook = new HSSFWorkbook();
		HSSFSheet sheet = workbook.createSheet(excelName);
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
		for (int i = 0; i < head.length; i++) {
			cell = row.createCell(i);
			text = new HSSFRichTextString(head[i]);
			cell.setCellValue(text);
			cell.setCellStyle(style);
		}
		rowid++;
		HSSFCellStyle style1 = ExportExcelUtil.createCellStyle(workbook, ExportExcelUtil.CONTENT);
		HSSFCellStyle style2 = ExportExcelUtil.createCellStyle(workbook, ExportExcelUtil.CONTENT);
		HSSFFont font1 = ExportExcelUtil.createCellFont(workbook, ExportExcelUtil.CONTENT);
		style.setFont(font);
		if (list!=null){
			for (Object[] objects : list) {
				row = sheet.createRow(rowid);
				for (int i = 0,len = objects.length; i < len; i++) {
						cell = row.createCell(i);
						cell.setCellStyle(style1);
						text = new HSSFRichTextString(objects[i] == null ? "" : String.valueOf(objects[i]));
						cell.setCellValue(text);
				}
				rowid++;
			}
		}
		
		response.setContentType("applicationnd.ms-excel");
		String fileName = new String(excelName.getBytes("gb2312"), "ISO-8859-1");
		response.setHeader("Content-disposition", "attachment; filename=" + fileName + ".xls");
		workbook.write(response.getOutputStream());
	}
	/**
	 * 导出EXCEL-----合并单元格
	 * 
	 * @throws IOException
	 */
	public static void mergeExcel(List<Object[]> list, String[] head, String titleStr, String excelName, HttpServletResponse response, int rowTo, short colTo) throws IOException {
		HSSFWorkbook workbook = new HSSFWorkbook();
		HSSFSheet sheet = workbook.createSheet(excelName);
		sheet.setDefaultColumnWidth(37);
		
		HSSFCellStyle style = createCellStyle(workbook, ExportExcelUtil.TITlE);
		HSSFFont font = createCellFont(workbook, ExportExcelUtil.TITlE);
		style.setFont(font);
		// 头
		
		// 列头
		int rowid = 0;
		HSSFRow row = sheet.createRow(rowid);
		style = createCellStyle(workbook, ExportExcelUtil.HEAD);
		font = createCellFont(workbook, ExportExcelUtil.HEAD);
		style.setFont(font);

		HSSFRichTextString text = null;
		HSSFCell cell = null;
		row.setHeightInPoints(30);
		Map<Integer, Double> countMap = new HashMap<Integer, Double>();
		for (int i = 0; i < head.length; i++) {
			cell = row.createCell(i);
			if (head[i].indexOf("{count}") > -1) {
				countMap.put(i - 1, 0d);
			}
			text = new HSSFRichTextString(head[i].replace("{count}", ""));
			cell.setCellValue(text);
			cell.setCellStyle(style);
		}
		rowid++;
		style = createCellStyle(workbook, ExportExcelUtil.CONTENT);
		font = createCellFont(workbook, null);
		style.setFont(font);
		int no = 0;// 序号
		String str = "";
		int tj = 0;
		int tj2 = 0;
		if (list!=null){
		for (Object[] objects : list) {
			int rowTo1 = 0;
			int rowTo2 = 0;
			
			if (no>=tj) {
				rowTo1 = countRow(list, no, 0);
				tj+=rowTo1;
				rowTo1-=1;
			}  
			
			//第二列
			if (no>=tj2) {
				rowTo2 = countRow2(list, no, 1);
//				tj2+=rowTo2;
				if (rowTo2>0) {
					rowTo2-=1;
				}
				tj2+=1+rowTo2;
			} 
			
			// 四个参数分别是：起始行，起始列，结束行，结束列   
			sheet.addMergedRegion(new Region(rowid, (short)0, rowid+rowTo1, (short)0));
			sheet.addMergedRegion(new Region(rowid, (short)1, rowid+rowTo2, (short)1));
			row = sheet.createRow(rowid);
			for (int i = 0; i < objects.length; i++) {
				int ii = i;
				cell = row.createCell(i);
				text = new HSSFRichTextString(objects[i] == null ? "" : String.valueOf(objects[i]));
				cell.setCellValue(text);
				cell.setCellStyle(style);
			}
			no++;
			
			rowid++;
		}
		
		
		}
		
		response.setContentType("applicationnd.ms-excel");
		String fileName = new String(excelName.getBytes("gb2312"), "ISO-8859-1");
		response.setHeader("Content-disposition", "attachment; filename=" + fileName + ".xls");
		workbook.write(response.getOutputStream());
		response.getOutputStream().flush();
		response.getOutputStream().close();
	}

	public static Double add(Double v1, Double v2) {
		BigDecimal b1 = new BigDecimal(Double.toString(v1));
		BigDecimal b2 = new BigDecimal(Double.toString(v2));
		return b1.add(b2).doubleValue();
	}

	public static Double parseDouble(Object obj) {
		Double doub = 0d;
		if (obj != null) {
			try {
				doub = Double.parseDouble(String.valueOf(obj));
			} catch (Exception e) {
			}
		}
		return doub;
	}
	//统计相同的行
	public static int countRow(List<Object[]> list,int listIndex,int index){
		int count = 0;
		String obj = (String) list.get(listIndex)[index];
		if ("".equals(obj)) {
			return count;
		}
		for (int i = 0; i < list.size(); i++) {
			if (obj.equals(list.get(i)[index]+"")) {
				count++;
			}
		}
		return count;
	}
	
	//统计相同的行
	public static int countRow2(List<Object[]> list,int listIndex,int index){
		int count = 0;
		String obj = (String) list.get(listIndex)[index];
		if ("".equals(obj)) {
			return count;
		}
		String obj1 = (String) list.get(listIndex)[index-1];
		
		for (int i = 0; i < list.size(); i++) {
			if (obj.equals(list.get(i)[index]+"") && obj1.equals(list.get(i)[index-1]+"")) {
				count++;
			}
		}
		return count;
	}
	
	
	/**
	 * 导出EXCEL---导出指标数据
	 * @throws Exception 
	 */
	public static void excelBG(List<Object []> list, String[] head, String titleStr, String excelName, HttpServletResponse response, int rowTo, short colTo) throws Exception {
		HSSFWorkbook workbook = new HSSFWorkbook();
		HSSFSheet sheet = workbook.createSheet(excelName);
		sheet.setDefaultColumnWidth(33);
		HSSFCellStyle style = createCellStyle(workbook, ExportExcelUtil.TITlE);
		HSSFFont font = createCellFont(workbook, ExportExcelUtil.TITlE);
		style.setFont(font);
		// 列头
		int rowid = 0;
		HSSFRow row = sheet.createRow(rowid);
		style = createCellStyle(workbook, ExportExcelUtil.THEAD);
		font = createCellFont(workbook, ExportExcelUtil.HEAD);
		style.setFont(font);

		HSSFRichTextString text = null;
		HSSFCell cell = null;
		row.setHeightInPoints(20);
		int cwidth = 20;
		for (int i = 0; i < head.length; i++) {
			cell = row.createCell(i);
			text = new HSSFRichTextString(head[i]);
			int rwidth = StringUtil.DoubleToInt((text.length()*1.7)+"")+2;
//			int rwidth = text.length()*2+1;
			if (rwidth > cwidth) {
				cwidth = rwidth;
			}
			cell.setCellValue(text);
			cell.setCellStyle(style);
		}
		sheet.setDefaultColumnWidth(cwidth);
		rowid++;
		style = createCellStyle(workbook, null);
		font = createCellFont(workbook, null);
		style.setFont(font);
		if (list!=null){
			for (Object [] objects : list) {
				row = sheet.createRow(rowid);	//创建行
				for (int i = 0; i < objects.length; i++) {
					cell = row.createCell(i);
					text = new HSSFRichTextString(objects[i] == null ? "" : String.valueOf(objects[i]));
					cell.setCellValue(text);
					cell.setCellStyle(style);
				}
				rowid++;
			}
		}
		//-----------------------------------------------------------------------------------
		HSSFSheetConditionalFormatting scf = sheet.getSheetConditionalFormatting();  
		//设置"条件格式"的规则，本例选择的条件类型是："单元格数据"  
		//如果当前单元格的数据等于R，则显示红色  
		HSSFConditionalFormattingRule cf_R_rule = scf.createConditionalFormattingRule(ComparisonOperator.EQUAL, "\"R\"", null);  
		HSSFPatternFormatting cf_R = cf_R_rule.createPatternFormatting();  
		cf_R.setFillBackgroundColor(HSSFColor.RED.index);  
		//如果当前单元格的数据等于G，则显示绿色  
		HSSFConditionalFormattingRule cf_G_rule = scf.createConditionalFormattingRule(ComparisonOperator.EQUAL, "\"G\"", null);  
		HSSFPatternFormatting cf_G = cf_G_rule.createPatternFormatting();  
		cf_G.setFillBackgroundColor(HSSFColor.GREEN.index);  
		
		HSSFConditionalFormattingRule[] cfRules = {cf_R_rule, cf_G_rule};  
		//条件格式应用的单元格范围  （起始行号，终止行号， 起始列号，终止列号）
		CellRangeAddress[] regions = {new CellRangeAddress(1, 6, 1, 9)};
		scf.addConditionalFormatting(regions, cfRules);
		//---------------------------------------------------------------------------------------
		response.setContentType("applicationnd.ms-excel");
		String fileName = new String(excelName.getBytes("gb2312"), "ISO-8859-1");
		response.setHeader("Content-disposition", "attachment; filename=" + fileName + ".xls");
		workbook.write(response.getOutputStream());
		response.getOutputStream().flush();
		response.getOutputStream().close();
	}
	
}
