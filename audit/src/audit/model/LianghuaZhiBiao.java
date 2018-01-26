package audit.model;

public class LianghuaZhiBiao {
private String Name;
private Integer value;
public String getName() {
	return Name;
}
public void setName(String name) {
	Name = name;
}
public Integer getValue() {
	return value;
}
public void setValue(Integer value) {
	this.value = value;
}
public boolean equals(Object obj) {
    if (obj instanceof LianghuaZhiBiao) {
    	LianghuaZhiBiao lhzb = (LianghuaZhiBiao) obj;
        return (Name.equals(lhzb.Name));
    }
    return super.equals(obj);
}
    
public int hashCode() {
    return Name.hashCode();
}

}
