DROP TABLE AS_GJ_REPORTTABLE
---质量报表
CREATE TABLE AS_GJ_REPORTTABLE(
REPORTID INT PRIMARY KEY IDENTITY(1,1), --报表id
REPORTNAME VARCHAR(225), --报表名
REPORTURL VARCHAR(225), --报表模板路径
REPORTCONTENT  VARCHAR(500), --报表说明
OBJECT_TABLE VARCHAR(225) ) --对应存储表

insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('博士研究生分专业（领域）学生数.xls',
'博士研究生分专业（领域）学生数.xls','博士研究生分专业（领域）学生数','AS_GJ_BYFX')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('成人本科分专业学生数.xls',
'成人本科分专业学生数.xls','成人本科分专业学生数','AS_GJ_CBFX')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('成人专科分专业学生数.xls',
'成人专科分专业学生数.xls','成人专科分专业学生数','AS_GJ_CZFX')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('分学科专任教师数.xls',
'分学科专任教师数.xls','分学科专任教师数','AS_GJ_FZJ')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('教职工情况.xls',
'教职工情况.xls','教职工情况','AS_GJ_JZGQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('教职工中其他情况.xls',
'教职工中其他情况.xls','教职工中其他情况','AS_GJ_JZGQTQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('普通本科分专业学生数.xls',
'普通本科分专业学生数.xls','普通本科分专业学生数','AS_GJ_PBFX')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('普通专科分专业学生数.xls',
'普通专科分专业学生数.xls','普通专科分专业学生数','AS_GJ_PZFX')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('其他学生情况.xls',
'其他学生情况.xls','其他学生情况','AS_GJ_QTXSQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('硕士研究生分专业（领域）学生数.xls',
'硕士研究生分专业（领域）学生数.xls','硕士研究生分专业（领域）学生数','AS_GJ_SYFX')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('外国留学生情况.xls',
'外国留学生情况.xls','外国留学生情况','AS_GJ_WLSQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('校舍情况.xls',
'校舍情况.xls','校舍情况','AS_GJ_XSQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('心里咨询工作人员情况.xls',
'心里咨询工作人员情况.xls','心里咨询工作人员情况','AS_GJ_XLZCQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('信息化建设情况.xls',
'信息化建设情况.xls','信息化建设情况','AS_GJ_XJQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('学生变动情况.xls',
'学生变动情况.xls','学生变动情况','AS_GJ_XBQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('学生休退学的主要原因.xls',
'学生休退学的主要原因.xls','学生休退学的主要原因','AS_GJ_XTXYY')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('学校（机构）基本情况.xls',
'学校（机构）基本情况.xls','学校（机构）基本情况','AS_GJ_XXJQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('研究生指导教师情况.xls',
'研究生指导教师情况.xls','研究生指导教师情况','AS_GJ_YZJSQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('在校生分年龄情况.xls',
'在校生分年龄情况.xls','在校生分年龄情况','AS_GJ_XSNLQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('在校生中其他情况.xls',
'在校生中其他情况.xls','在校生中其他情况','AS_GJ_XSQTQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('在职人员攻读硕士学位分专业（领域）学生数.xls',
'在职人员攻读硕士学位分专业（领域）学生数.xls','在职人员攻读硕士学位分专业（领域）学生数','AS_GJ_GDSXFX')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('招生、在校生来源情况.xls',
'招生、在校生来源情况.xls','招生、在校生来源情况','AS_GJ_ZSLYQK')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('专任教师、聘请校外教师岗位分类情况.xls',
'专任教师、聘请校外教师岗位分类情况.xls','专任教师、聘请校外教师岗位分类情况','AS_GJ_ZRJSGW')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('专任教师、聘请校外教师学历（位）情况.xls',
'专任教师、聘请校外教师学历（位）情况.xls','专任教师、聘请校外教师学历（位）情况','AS_GJ_ZRJSXL')

insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('专任教师变动情况.xls',
'专任教师变动情况.xls','专任教师变动情况','AS_GJ_ZRJSBD')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('专任教师接受培训情况.xls',
'专任教师接受培训情况.xls','专任教师接受培训情况','AS_GJ_ZRJSPX')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('专任教师年龄情况.xls',
'专任教师年龄情况.xls','专任教师年龄情况','AS_GJ_ZRJSNL')
insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('专职辅导员分年龄、专业技术职务、学历情况.xls',
'专职辅导员分年龄、专业技术职务、学历情况.xls','专职辅导员分年龄、专业技术职务、学历情况','AS_GJ_FDNLZWXL')

insert into AS_GJ_REPORTTABLE (reportname,reporturl,reportcontent,OBJECT_TABLE) values('资产情况.xls',
'资产情况.xls','资产情况','AS_GJ_ZCQK')


--高基表列与字段映射
CREATE TABLE AS_GJ_OBJECT_TABLE_MAPPING(
ID INT PRIMARY KEY IDENTITY(1,1),
OBJECT_TABLE VARCHAR(50),
FIELD_NAME VARCHAR(50),
COLUMN_NAME VARCHAR(50))