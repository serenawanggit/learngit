package audit.util;

import javax.servlet.http.HttpServletRequest;

import audit.model.quality.vo.ContentInfo;

public class File2Html {
//	public static void main(String[] args) {
//		
//	}
	public static ContentInfo  fileToHtml(String fileAddr,HttpServletRequest request) throws Exception {
		int indexOf = fileAddr.indexOf(".");
		String file_TYPE = fileAddr.substring(indexOf+1);
		int lastIndex = fileAddr.lastIndexOf("/");
		String files_NAME = fileAddr.substring(lastIndex+1,indexOf);
		//处理括号
		String fileName1=files_NAME.replace("(", "");
		String fileName2=fileName1.replace("（", "");
		String fileName3=fileName2.replace("）", "");
		files_NAME=fileName3.replace(")", "");
		//过滤 去掉特殊字符
		files_NAME=StringFilterTest.StringFilter(files_NAME);
		String pingYin = ChineseToEnglish.getPingYin(files_NAME);
		
		String realPath = request.getSession().getServletContext().getRealPath("/");
		String filePathabsolute=realPath+pingYin+".html";
		String filePath=pingYin+".html";
		
		ContentInfo info=new ContentInfo();
		info.setFILE_TYPE(file_TYPE);
		if("doc".equals(file_TYPE)||"docx".equals(file_TYPE)){
				JacobUtil.wordToHtml(fileAddr, filePathabsolute);
				//把编译后的html 进行一次转码
				HtmlChangeCharset.htmlChangeCharset(filePathabsolute);
				info.setFilePath(filePath);
		}else if("xlsx".equals(file_TYPE)||"xls".equals(file_TYPE)){
			 String  excel2Hmtl = POIReadExcelToHtml.Excel2Hmtl(fileAddr);
			 info.setContentMessge(excel2Hmtl);
		}else{
			//如果格式不支持
			info.setStruts(2);
		}
		return info;
	}
}
