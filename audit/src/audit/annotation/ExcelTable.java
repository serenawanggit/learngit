package audit.annotation;

import java.lang.annotation.ElementType;


@java.lang.annotation.Target(value={ElementType.TYPE})
@java.lang.annotation.Retention(value=java.lang.annotation.RetentionPolicy.RUNTIME)
public @interface ExcelTable {
	public String table();
}
