package audit.generatecode;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.mybatis.generator.api.MyBatisGenerator;
import org.mybatis.generator.config.Configuration;
import org.mybatis.generator.config.xml.ConfigurationParser;
import org.mybatis.generator.internal.DefaultShellCallback;

public class MyBatisCodeGenerator {
	public static void main(String[] args) throws Exception{
		//useGeneratedKeys="true" keyProperty="id" 生成完配置一下在两个 maping包下 insert 方法后面加上
		System.out.println("+++++++++generate begin++++++++++");
		  List<String> warnings = new ArrayList<String>();
		   boolean overwrite = true;
		  // String url = MyBatisCodeGenerator.class.getResource("").getPath()+"../MBG_configuration.xml";
		   String url = "F://ZenithBS//JSSF//audit//src//audit//generatecode//MBG_configuration.xml";
		   File configFile = new File(url);
		   ConfigurationParser cp = new ConfigurationParser(warnings);
		   Configuration config = cp.parseConfiguration(configFile);
		   DefaultShellCallback callback = new DefaultShellCallback(overwrite);
		   MyBatisGenerator myBatisGenerator = new MyBatisGenerator(config, callback, warnings);
		   myBatisGenerator.generate(null);
		   System.out.println("+++++++++generate writer end+++++++++++");
	}
}
