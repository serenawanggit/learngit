package audit.model.hr;

import java.io.Serializable;
public class HrTableField implements Serializable{
	private static final long serialVersionUID = -2821263217786118899L;
    private Integer id;

    private String fieldName;

    private String fieldDataName;
    /**
	 * 所属表id
	 */
    private Integer hrTableId;
    /**
	 * 字段类型
	 */
    private Integer fieldType;
    /**
	 * 字段长度
	 */
    private Integer fieldLength;
    /**
	 * 对应的指标
	 */
    private Integer measureId;
    /**
	 * 指标名
	 */
    private String measureName;

    private String position;
    /**
	 * 备注
	 */
    private String remark;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName == null ? null : fieldName.trim();
    }

    public String getFieldDataName() {
        return fieldDataName;
    }

    public void setFieldDataName(String fieldDataName) {
        this.fieldDataName = fieldDataName == null ? null : fieldDataName.trim();
    }

    public Integer getHrTableId() {
        return hrTableId;
    }

    public void setHrTableId(Integer hrTableId) {
        this.hrTableId = hrTableId;
    }

    public Integer getFieldType() {
        return fieldType;
    }

    public void setFieldType(Integer fieldType) {
        this.fieldType = fieldType;
    }

    public Integer getFieldLength() {
        return fieldLength;
    }

    public void setFieldLength(Integer fieldLength) {
        this.fieldLength = fieldLength;
    }

    public Integer getMeasureId() {
        return measureId;
    }

    public void setMeasureId(Integer measureId) {
        this.measureId = measureId;
    }

    public String getMeasureName() {
        return measureName;
    }

    public void setMeasureName(String measureName) {
        this.measureName = measureName == null ? null : measureName.trim();
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position == null ? null : position.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}