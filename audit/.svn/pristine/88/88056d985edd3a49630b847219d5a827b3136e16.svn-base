/*--------------------------------------弹出框--------------------------------------*/

//点击确认事件
function gethtml()
{
//	alert(jQuery("#planTB tr:first td:eq(0)").width());
     var valuestr = "";
     var fTableElement,rows,cols,style,className;
     fTableElement = document.getElementById("planTB");
     for (var i = 0; i < fTableElement.rows.length; i++)
     {
           var trClass = fTableElement.rows[i].className;
           for (var j = 0; j < fTableElement.rows[i].cells.length; j++)
           {
                //---------------------------------------------------------
                rows = fTableElement.rows[i].cells[j].rowSpan;
                cols = fTableElement.rows[i].cells[j].colSpan;
                style = fTableElement.rows[i].cells[j].align;
                var tdClass = fTableElement.rows[i].cells[j].className;
                if (trClass!="" && tdClass=="") {
                    className = trClass;
				}else{
	                className = tdClass;
				}
                //---------------------------------------------------------
                var tdText = fTableElement.rows[i].cells[j].innerHTML;
                tdText = tdText.replace(" ", "");
                tdText = tdText.replace("<br/>", "");
                valuestr += tdText;
                valuestr += "<style>";
                valuestr += rows;
                valuestr += "<style>";
                valuestr += cols;
                valuestr += "<style>";
                valuestr += className;
                valuestr += "<td>";
           }
            valuestr += "<tr>";
     }
     return valuestr;
}
        
function exportToExcel()
{
      var fHtml = gethtml();
      jQuery("#tabValue").val(fHtml);
      document.getElementById("exportForm").action = "/audit/homeContro/exportExcel.do";
      document.getElementById("exportForm").submit();
}

