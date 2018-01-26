package audit.util;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.poi.poifs.filesystem.DirectoryEntry;
import org.apache.poi.poifs.filesystem.DocumentEntry;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;

public class PoiWord {

	@SuppressWarnings("unused")
	public static boolean writeWord(String content,String dirpath,String fileName){
		boolean w = false;  
        try {  
            if (!"".equals(dirpath)) {  
                // 检查目录是否存在  
                File fileDir = new File(dirpath);  
                if (fileDir.exists()) {  
                    // 生成临时文件名称  
//                    String content = "<html><div style='text-align: center'><span style='font-size: 28px'><span style='font-family: 黑体;color:blue'>" +  
//                        "制度发布通知<br /><img src='/audit/images/word/hlg.png'> <br /> </span></span></div></html>";  
                    InputStream is = new ByteArrayInputStream(content.getBytes("UTF-8"));
                    POIFSFileSystem poifs = new POIFSFileSystem();  
                    DirectoryEntry directory = poifs.getRoot();  
                    DocumentEntry documentEntry = directory.createDocument("WordDocument", is);
                    FileOutputStream ostream = new FileOutputStream(dirpath+ File.separator + fileName);
                    poifs.writeFilesystem(ostream);  
                    is.close();  
                    ostream.close();  
                }  
            }  
        } catch (IOException e) {  
            e.printStackTrace();  
      }  
      return w;  
	}
	
	public static void main(String[] args) throws Exception {
		String content = "<html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/><body><p style='width:200px;height:80px;'><img src='/audit/images/word/hlg.png'></p><p style='color:#4F81BD;font-size:36px;font-weight:bold'>2013本科教学质量报告</p><br /><br /><p style='width:200px;height:200px;'><img src='/audit/images/word/logo.png'></p><br /><br /><p style='color:#4F81BD;font-size:20px;font-weight:bold'>2014年10月</p><div style='color:#C0003A;font-size:20px;font-weight:blod;'><strong>1 定位与目标</strong></div><div style='color:#7081BD;font-size:16px;'><strong>1.1 办学定位</strong></div><br />【 开设课程门次数 】在2011年值为:0<br /><div style='color:#7081BD;font-size:16px;'><strong>1.2 培养目标</strong></div><br />指标【 本科生课程开设总门次数 】在2011年值为:0<br />指标【 双语课程门数 】在2011年值为:0<br />指标【 开设课程门数 】在2011年值为:0<br /><div style='color:#7081BD;font-size:16px;'><strong>1.3 教学中心定位</strong></div><br /><div style='color:#C0003A;font-size:20px;font-weight:blod;'><strong>2 师资队伍</strong></div><div style='color:#7081BD;font-size:16px;'><strong>2.1 数量与结构</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>2.2 教育教学水平</strong></div><br />asdasd<div style='color:#7081BD;font-size:16px;'><strong>2.3 教师教学投入</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>2.4 教师发展与服务</strong></div><br /><div style='color:#C0003A;font-size:20px;font-weight:blod;'><strong>3 教学资源</strong></div><div style='color:#7081BD;font-size:16px;'><strong>3.1 教学经费</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>3.2 教学设施</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>3.3 专业设置与培养方案</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>3.4 课程资源</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>3.5 社会资源</strong></div><br /><div style='color:#C0003A;font-size:20px;font-weight:blod;'><strong>4 培养过程</strong></div><div style='color:#7081BD;font-size:16px;'><strong>4.1 课堂教学</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>4.2 实践教学</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>4.3 第二课堂</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>4.4 教学改革</strong></div><br /><div style='color:#C0003A;font-size:20px;font-weight:blod;'><strong>5 学生发展</strong></div><div style='color:#7081BD;font-size:16px;'><strong>5.1 招生及生源情况</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>5.2 学生指导与服务</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>5.3 学风与学习效果</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>5.4 就业与发展</strong></div><br /><div style='color:#C0003A;font-size:20px;font-weight:blod;'><strong>6 质量保障</strong></div><div style='color:#7081BD;font-size:16px;'><strong>6.1 教学质量保障体系</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>6.2 质量信息及利用</strong></div><br /><div style='color:#7081BD;font-size:16px;'><strong>6.3 质量改进</strong></div><br /></body></html>"; 
		writeWord(content,"D:","asd.doc");
	}
}
