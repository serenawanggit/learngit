----方案----

create table AS_P_PLAN(
pid int primary key identity(1,1) not null,
mid int not null,
name varchar(20) not null,
no varchar(10) not null,
content varchar(500),
description varchar(500), --要素解释
isrelate int, --是否有 观测指标
scid int) --所属学校



---支撑文件
CREATE TABLE AS_P_SUPPORTFILE (
SID INT PRIMARY KEY IDENTITY(1,1),
FILENAME VARCHAR(100) NOT NULL,
DIR VARCHAR(100) NOT NULL,
UPLOADER INT,
UPLOADERNAME VARCHAR(50),
UPLOADTIME datetime,
FLAG INT ,
STATUS INT ,
PID INT)

---考查重点
CREATE TABLE AS_P_INSPECTPOINT(
IID INT PRIMARY KEY IDENTITY(1,1),
PID INT,
TITLE VARCHAR(50),
iCONTENT VARCHAR(200));


---观测指标项
CREATE TABLE AS_P_VIEWQUOTA(
VID INT PRIMARY KEY IDENTITY(1,1),
QID VARCHAR(20),
QNAME VARCHAR(50),
QCATEGORY VARCHAR(50),
QTYPE VARCHAR(50),
PID INT )

---转换状态表
CREATE TABLE PROCSTATUS(
ID INT PRIMARY KEY NOT NULL,
STATUS INT ,
FLAG INT)

---触发器
---上传支撑文件 加入procstatus一条状态
USE [DB_TQCC]
GO
/****** Object:  Trigger [dbo].[AFTER_INSERT]    Script Date: 10/31/2014 09:48:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER TRIGGER [dbo].[AFTER_INSERT]
ON [dbo].[AS_P_SUPPORTFILE]
FOR INSERT
AS 
DECLARE @ID INT,@FLAG INT;
SELECT @ID = SID,@FLAG = FLAG FROM inserted;
IF(@FLAG != 2)
INSERT INTO procstatus VALUES(@ID,0,@FLAG);


----关联项目----
create table AS_P_relevance_item(
rid int primary key identity(1,1) not null,
pid int not null,	---方案ID
rpid int not null,  ---关联方案ID
rvid int			---关联方案的观测指标ID
)

----学校----
create table AS_P_school(
scid int primary key identity(1,1) not null,
scname varchar(20)  not null	---学校名称
)


---审核评估模块表
create table AS_P_MODULE(
pmid int primary key identity(1,1) not null, --id 主键
parentId int not null, --上级模块id
name varchar(20) not null, --名称
mno varchar(10) not null, --编号
grade varchar(10), --级别
static int --是否显示
)

---审核评估模块表 ----2014.11.12
create table AS_P_MODULE(
pmid int primary key identity(1,1) not null, --id 主键
parentId int not null, --上级模块id
name varchar(20) not null, --名称
mno varchar(10) not null, --编号
grade varchar(10), --级别
stat int --是否显示
)
---审核评估模块表--数据初始化
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(64,'评估方案设计','1','1',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(1,'定位与目标','11','2',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(1,'师资队伍','12','2',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(1,'教学资源','13','2',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(1,'培养过程','14','2',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(1,'学生发展','15','2',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(1,'质量保障','16','2',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(1,'自选特色项目','17','2',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(64,'评估方案查看','2','1',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(9,'评估方案查看','21','2',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(64,'自我评估','3','1',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(11,'状态数据','31','2',1)
insert into AS_P_MODULE(parentId,name,mno,grade,stat)
values(11,'自评报告','32','2',1)