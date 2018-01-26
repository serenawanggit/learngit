package audit.util.text;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.UUID;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
//import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
//import com.eprobiti.trs.TRSException;


/** * 基本思路：得到html内容,因为是非标准的html内容，利用Jsoup组件将读取出来的内容转换为标准的html文件内容,
 * 然后遍历每个节点，找到img标签，记录其索引，再根据其文件名规则拼接出图片的物理路径，将其替换为${image_index}标识，而后将{索引，路径}
 * 以键值对的方式丰入Map中， 如
 * "${image_1,d:lucene.png}"格式，然后利用jacob组件打开template.doc,选中整篇文档并复制，而后新建一篇文档，粘贴刚复制的内
 * 容 查找图片标识位，将其替换为图片
 * 
 * @since 2011-12-09
 * @author xioawu
 * @cateogry topstar
 * @version 1.0
 */
public class TestJsoupComponent {

	private static Document document;
	//存放图片标识符及物理路径 i.e {"image_1","D:\lucene.png"};
	private static Map<String, String> imgMap = new HashMap<String, String>(); 
	//存入本地生成的各个文章doc的文件名
	private static List<String> files = new ArrayList<String>(); 
	//图片标识
	private static Integer imgIndex = 1; 
	
	public static void main(String[] args) {
		String htmlStr = "";
		try {
			htmlStr = Jsoup.connect("http://desktop-t3lio4o:8080/projectDemo/showZhuzhuangtu.jsp").execute().body();
			System.out.println(Jsoup.connect("http://desktop-t3lio4o:8080/projectDemo/showZhuzhuangtu.jsp").execute().body());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String bodyStr = "<body><button style='width:200px;height:40px;' onclick='downupload();'>下载</button><div style='width:600px;padding:20px;'>校本部15个学院，应参加评价人数6866人，完全评价人数6670人，评教率为97.15%，各学院学生参评率详见表1。本学期评教率与2015-2016第一学期都稳定在95%以上。学生的高度参与主要依靠各学院教务科、班主任和学生科动员学生参与评教，教务处积极组织宣传。实验学院、艺术学院按照北工大评教指标体系独立评教，学生参与评教率均在90%以上。参评学生数量多，大的样本采集数据为评价数据的分析提供保障。</div><div style='width:600px;padding:20px;'><font style='color:red;font-weight:bold;width:100%;text-align:center;'>表1 2015-2016学年第二学期校本部各学院学生评教参评率</font><table style='width:100%;'  border='0' cellspacing='0' cellpadding='0'><tr style='background:#DCDBDB;'><td>序号</td><td>学院</td><td>需评人数</td><td>完全评价<br>人数</td><td>部分评价<br>人数</td><td>完全未评价<br>人数</td><td>评教率(%)</td></tr><tr><td>1</td><td>电控学院</td><td>792</td><td>792</td><td>0</td><td>0</td><td>100.00%</td></tr><tr style='background:#F7F7F7;'><td>2</td><td>电控学院</td><td>792</td><td>792</td><td>0</td><td>0</td><td>100.00%</td></tr><tr><td>3</td><td>电控学院</td><td>792</td><td>792</td><td>0</td><td>0</td><td>100.00%</td></tr><tr style='background:#F7F7F7;'><td>4</td><td>电控学院</td><td>792</td><td>792</td><td>0</td><td>0</td><td>100.00%</td></tr><tr><td>5</td><td>樊恭烋学院</td><td>792</td><td>792</td><td>0</td><td>0</td><td>100.00%</td></tr><tr style='background:#F7F7F7;'><td>6</td><td>樊恭烋学院</td><td>792</td><td>792</td><td>0</td><td>0</td><td>100.00%</td></tr><tr><td>7</td><td>樊恭烋学院</td><td>792</td><td>792</td><td>0</td><td>0</td><td>100.00%</td></tr></table></div><div id='container' style='width: 600px;height:400px;padding:20px;'><img src='D:\\a\\aaa.jpg'><img src='D:\\a\\bbb.jpg'><img src='D:\\a\\ccc.jpg'><img src='D:\\a\\ddd.jpg'><img src='D:\\a\\eee.jpg'></div></body>";
		String html = "<html>"+bodyStr+"</html>";
		htmlConvertWord(htmlStr,"D:" + File.separator + "template.doc","template");
	}

	/**
	 * 
	 * @param html HTML内容
	 * @param path  路径（不包括文件名）
	 * @param filename 文件名
	 */
	public static void htmlConvertWord(String html,String path,String filename) {
		try {
			// 将生成过程设置为不可见
			MSOfficeGeneratorUtils officeUtils = new MSOfficeGeneratorUtils(false); 
	
			//这方法能够将输入的HTML解析为一个新的文档
			document = Jsoup.parse(html);
			for (int i = 0; i < document.body().childNodes().size(); i++) {
				// 递归遍历body下的所有直接子元素，找出img标签，@see SysElementText Method
				List<Node> childNodes = document.body().childNodes();
				sysElementText(childNodes.get(i));
			}
			
			File file = new File(path + "template.doc");
			// 创建模板html
			file.createNewFile();
			FileWriter fw = new FileWriter(file);
			// 写入文件
			fw.write(document.html(), 0, document.html().length());
			// 清空FileWriter缓冲区
			fw.flush(); 
			fw.close();
			// 打开template.doc
			officeUtils.openDocument(path + "template.doc"); 
			// .由trsserver eipdocument库中的dochtmlcon生成的template.doc文件
			// 拷贝整篇文档
			officeUtils.copy(); 
			officeUtils.close();
			officeUtils.createNewDocument();
			// 粘贴整篇文档
			officeUtils.paste(); 
			for (Entry<String, String> entry : imgMap.entrySet())
				// 循环将图片标识位替换成图片
				officeUtils.replaceText2Image(entry.getKey(), entry.getValue());
			// 将插入点移动至Word文档的最顶点
			officeUtils.moveStart(); 
			// 设置字体,具体参数，自己看API
			officeUtils.setFont(true, false, false, "0,0,0", "14", "楷体"); 
//			officeUtils.setFontScale("宋体", false, false, false, "0,0,0", 5, 14);
			// 设置标题
//			officeUtils.setTitle(header, 1); 
			// 设置一行回车
			officeUtils.enterDown(1); 
			// 记录文件名，
			files.add(filename); 
			// 生成doc文件
			officeUtils.saveAs(path+filename+".doc"); 
			// 关闭Office Word创建的文档
			officeUtils.close(); 
			// 退出Office Word程序
			officeUtils.quit(); 
			// 整合过程设置为不可见
			MSOfficeGeneratorUtils msOfficeUtils = new MSOfficeGeneratorUtils(false); 
			msOfficeUtils.createNewDocument();
			msOfficeUtils.close();
			msOfficeUtils.openDocument(path + filename + ".doc");
			// 复制一个内容比较少的*.doc文档，防止在关闭word程序时提示有大量的copy内容在内存中，是否应用于其它程序对话框,
			msOfficeUtils.createNewDocument();
//			msOfficeUtils.insertText("测试消息");
			msOfficeUtils.copy();
			msOfficeUtils.close();
			msOfficeUtils.quit();
			imgIndex = 1;
			imgMap.clear();
//			file.delete();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}
	
	public static void sysElementText(Node node){
		if(node.childNodes().size()==0){
			// 处理图片路径问题
			if(node.nodeName().equals("img")){
				// 为img添加同级P标签，内容为<P>${image_imgIndexNumber}</P>
				node.after("<p>${image_" + imgIndex + "}</p>");
				String src = node.attr("src");
				// 删除Img标签。
				node.remove();
				
				StringBuffer imgUrl = new StringBuffer();
				
				//获取Tomcat路径
				String name = System.getProperty("logoAddress");
				//处理路径问题，把图片的相对路径换成绝对路径
				if(src.indexOf("audit")!=-1) 
					imgUrl.append(name+"/"+src.substring(src.indexOf("audit")));
				if(src.indexOf("CHART")!=-1) 
					imgUrl.append(name+"/"+src.substring(src.indexOf("CHART")));
				if(src.indexOf("datareport_platform")!=-1) 
					imgUrl.append(name+"/"+src.substring(src.indexOf("datareport_platform")));
				if(src.indexOf("TQCC")!=-1)
					imgUrl.append(name+"/"+src.substring(src.indexOf("TQCC")));
				
				//把路径存在map中，方便替换图片
				imgMap.put("${image_" + imgIndex++ + "}", imgUrl.toString());
			}else{
				for (int i = 0; i < node.childNodes().size(); i++) {
					List<Node> rNode = node.childNodes();
					sysElementText(rNode.get(i));
				}
			}
		}else{
			for (int i = 0; i < node.childNodes().size(); i++) {
				List<Node> rNode = node.childNodes();
				sysElementText(rNode.get(i));
			}
		}
	}
}
