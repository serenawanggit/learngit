package audit.util;

import java.io.File;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.io.FileUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.sun.star.io.IOException;
/**
 * 改变html 字符集
	*<p>Title: HtmlChangeCharset</p>*
	*<p>Description: </p>*
	*<p>Company: 上海喆思电子技术有限公司</p>
	*@author lzr
	*@date 2016-12-28
 */
public class HtmlChangeCharset {
	public static void main(String[] args) throws Exception {
		htmlChangeCharset("E:\\assessFileUser\\old123jjj6.html");
	}
	public static void htmlChangeCharset(String toPath) throws IOException,
			java.io.IOException {
		// 读取html文件，修改编码
		String charset = null;
		File file = new File(toPath);
		String html = FileUtils.readFileToString(file);
		charset = getCharset(html);
		System.out.println("文件字符集---"+charset);
		if(charset!=null){
			Document doc = Jsoup.parse(file, charset);
			Elements elements = doc.getElementsByAttributeValueStarting("content",
					"text/html;");
			for (Element element : elements) {
				element.attr("content", "text/html; charset=" + charset);
			}
			FileUtils.write(new File(toPath),
					doc.html(), "GBK", false);
			System.out.println("写入完毕");
		}
	}

	/**
	 * 获取html 编码
	 * 
	 * @param str
	 *            html内容
	 * @return
	 * @throws java.io.IOException
	 */
	public static String getCharset(String str) {
		Pattern pattern = Pattern.compile("charset=([^\">]*)");
		Matcher matcher = pattern.matcher(str);
		if (matcher.find()) {
			if (matcher.group(1).equals("x-cp20936")) {
				return "GBK";
			}else {
				return null;
			}
		}
		return null;
	}
}
