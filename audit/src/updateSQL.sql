--☆☆☆☆先删除AS_ASSESS_INDEX_TABLE的主键在添加
alter table AS_ASSESS_INDEX_TABLE add id int identity(1,1) 


--现场考查专家表
create table ASSESS_COMMENT_RECORD(
id int primary key IDENTITY(1,1),
sysid varchar(4),
kc_userid varchar(4),
kc_time varchar(20),
kc_content varchar(4000),
item  varchar(2),
syear varchar(4),
kc_type varchar(2),
kc_suggestions varchar(4000),
specialtyId varchar(4),
ranks varchar(4)
)



--设置上传材料份数表
CREATE TABLE as_asses_filedsum(
	[id] [int] IDENTITY(1,1) NOT NULL, --自动增长ID
	[sysear] [varchar](10) NULL,   --年份
	[sysid] [int] NULL,          --
	[filedsum] [varchar](20) NULL,
)

--评估体系内容表
CREATE TABLE [dbo].[ASSESSMENT_SYSTEM_INFO_content](
	[sysid] [varchar](6) NULL,
	[syear] [varchar](10) NULL,
	[ratio] [varchar](1000) NULL,
	[level_a] [varchar](1000) NULL,
	[level_c] [varchar](1000) NULL,
	[total] [varchar](1000) NULL,
	[score] [varchar](4) NULL
) 

--分析报告 聂忠兵 创建时间：
   create table college_content(
		cid int identity(1,1), --自动增长
		cname varchar(20),  --专业类别
		parentId int     --父节点ID

    )
delete college_content 
insert into college_content values('文理科',0)
insert into college_content values('工科',0)
 insert into college_content values('法学',1)
 insert into college_content values('管理学',1)
 insert into college_content values('教育学',1)
 insert into college_content values('经济学',1)
 insert into college_content values('理学',1)
 insert into college_content values('文学',1)
 insert into college_content values('医学',1)
 insert into college_content values('艺术学',1)
 insert into college_content values('工学',2)
    --如果之前有此college_content则需执行，没有则不需要
update college_content  set cname='工科' where cid=1
update college_content  set cname='文理科' where cid=2
  
  
  
  --华理工专业排名 王源远 创建时间： 2017-6-7
	create PROCEDURE ZYPF(@syear int,@IS_ENGINEERING int)
	AS
	declare @sysname nvarchar(4000)
	declare @SYSTEM_NAME varchar(4000)
	select @SYSTEM_NAME=s.SYSTEM_NAME from ASSESSMENT_SPECIALTY_INFO i
	 left join (select  Convert(decimal(18,2),AVG(convert(float ,b.SCORE))) 
	 as SCORE,SYSID,b.OBJECTID from ASSESSMENT_SITE_SURVEY_FEEDBACK b
	  where b.SYEAR = @syear and b.USERID in 
	 (select  ASSESS_SELF_USER from ASSESSMENT_USER_INFO where  ASSESS_TYPE>=4)
	group by b.SYSID,b.OBJECTID ) f on f.OBJECTID = i.ID 
	left join ASSESSMENT_SYSTEM_INFO s on s.ID = f.SYSID
	where IS_ENGINEERING = @IS_ENGINEERING group by SYSTEM_NAME
	
	IF @SYSTEM_NAME is NULL
	BEGIN
		select @SYSTEM_NAME
		return 0
	END
		
	ELSE
	
	BEGIN
		select @sysname= stuff((select ','+s.SYSTEM_NAME
		 from ASSESSMENT_SPECIALTY_INFO i left join (select  Convert(decimal(18,2),AVG(convert(float ,b.SCORE))) as SCORE,SYSID,b.OBJECTID from ASSESSMENT_SITE_SURVEY_FEEDBACK b where b.SYEAR = @syear  
		 and b.USERID in (select  ASSESS_SELF_USER from ASSESSMENT_USER_INFO where  ASSESS_TYPE>=4) group by b.SYSID,b.OBJECTID ) f
		 on f.OBJECTID = i.ID left join ASSESSMENT_SYSTEM_INFO s on s.ID = f.SYSID where IS_ENGINEERING = @IS_ENGINEERING  group by s.SYSTEM_NAME,s.ID order by s.ID for xml path('')),1,1,'')
	
		exec('select * from (select f.SCORE ,i.SPECIALTY_NAME,s.SYSTEM_NAME ,(select COUNT(ID) from ASSESSMENT_SPECIALTY_INFO where IS_ENGINEERING = 2) as NUM
		 from ASSESSMENT_SPECIALTY_INFO i left join (select  Convert(decimal(18,2),AVG(convert(float ,b.SCORE))) as SCORE,SYSID,b.OBJECTID from ASSESSMENT_SITE_SURVEY_FEEDBACK b where b.SYEAR = '+@syear+'  
		 and b.USERID in (select  ASSESS_SELF_USER from ASSESSMENT_USER_INFO where  ASSESS_TYPE>=4) group by b.SYSID,b.OBJECTID ) f
		 on f.OBJECTID = i.ID left join ASSESSMENT_SYSTEM_INFO s on s.ID = f.SYSID where IS_ENGINEERING = '+@IS_ENGINEERING+'
		 )a pivot (max(Score) for SYSTEM_NAME in('+@sysname+'))b order by 总评分 desc')
	END
	  --自评人的问题与不足
alter table AS_ASSESS_REPORT alter column problem varchar(5000)


--分析报告历史记录下载 
alter table Auditing_history add  versionsID varchar(5)


--用户操作记录添加字段- 王源远- 2017/7/11
alter table LOG_DATA add remark nvarchar(4000);
alter table LOG_DATA add ip nchar(100);

--任务角色表添加学校id -王源远 2017/8/22
alter table SHUTCM_DATA_ROlEANDUSER add SCHOOLID nvarchar(500) ;
  
alter table SHUTCM_DATA_TASK add SCHOOLID nvarchar(500) ;

-- 数据对接保存帐号 密码 地址 邹振贵 2017/9/21
CREATE TABLE [dbo].[dackUrl](
	[username] [nvarchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
	[sqlname] [nvarchar](50) NULL,
 CONSTRAINT [PK_dackUrl] PRIMARY KEY CLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]



--开放大学（指标项管理-添加指标所属分类）
insert into AS_M_CATEGORY values(13,'增列学士学位授予单位审核评价',212);
insert into AS_M_CATEGORY values(14,'本科教学工作合格评估指标和基本要求',213);
insert into AS_M_CATEGORY values(15,'本科新专业评估标准',214);

--填报任务中新增查看人
ALTER TABLE SHUTCM_DATA_TABLEROLE ADD CKRROLEID VARCHAR(20)
ALTER TABLE SHUTCM_DATA_TABLEROLE ADD CKROLEID VARCHAR(20)
ALTER TABLE SHUTCM_DATA_TASKINFO ADD CKR VARCHAR(20)
