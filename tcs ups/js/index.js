function htmlToCSV(html, filename) {
let data = [];
 let rows = document.querySelectorAll("table tr");
			
 for (var i = 0; i < rows.length; i++) {
 	var row = [], cols = rows[i].querySelectorAll("td, th");
				
	for (var j = 0; j < cols.length; j++) {
 	        row.push(cols[j].innerText);
   }
		        
	data.push(row.join(".")); 		
 }

downloadCSVFile(data.join("\n"), filename);
}

function downloadCSVFile(csv, filename) {
        var csv_file, download_link;
    
       csv_file = new Blob([csv], {type: "text/csv"});
    
      download_link = document.createElement("a");
    
      download_link.download = filename;
    
      download_link.href = window.URL.createObjectURL(csv_file);
    
       download_link.style.display = "none";

        document.body.appendChild(download_link);
    
        download_link.click();
   }

function buttonDownload()
    {
            var html = document.querySelector("table").outerHTML;
            htmlToCSV(html, "students.csv");
    
    }

    function completeTable(){
      var datatable = document.getElementById('tblData');

      let int1 = document.getElementById("int3306").value;
      let int2 = document.getElementById("int3740").value;
      let int3 = document.getElementById("int3310").value;
      
      let dcr1 = document.getElementById("dcr3306").value;
      let dcr2 = document.getElementById("dcr3740").value;
      let dcr3 = document.getElementById("dcr3310").value;

      let ods1 = document.getElementById("ods3306").value;
      let ods2 = document.getElementById("ods3740").value;
      let ods3 = document.getElementById("ods3310").value;

      let cnl1 = document.getElementById("cnl3306").value;
      let cnl2 = document.getElementById("cnl3370").value;
      let cnl3 = document.getElementById("cnl3310").value;

      let tt1 = document.getElementById("total3306").value;
      let tt2 = document.getElementById("total3740").value;
      let tt3 = document.getElementById("total3310").value;

    
        // Crea un elemento <table> y un elemento <tbody>
        var tabla   = document.createElement("table");
      
        // Crea las celdas
        for (var i = 0; i < 2; i++) {
          // Crea las hileras de la tabla
          var hilera = document.createElement("tr");
      
          for (var j = 0; j < 3; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
          }
      
          // agrega la hilera al final de la tabla (al final del elemento tblbody)
          tblBody.appendChild(hilera);
        }
      
        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tabla);
        // modifica el atributo "border" de la tabla y lo fija a "2";
        tabla.setAttribute("border", "2");
      
      
    }

function showvalues(){

      let int1 = document.getElementById("int3306").value;
      let int2 = document.getElementById("int3740").value;
      let int3 = document.getElementById("int3310").value;
      
      let dcr1 = document.getElementById("dcr3306").value;
      let dcr2 = document.getElementById("dcr3740").value;
      let dcr3 = document.getElementById("dcr3310").value;

      let ods1 = document.getElementById("ods3306").value;
      let ods2 = document.getElementById("ods3740").value;
      let ods3 = document.getElementById("ods3310").value;

      let cnl1 = document.getElementById("cnl3306").value;
      let cnl2 = document.getElementById("cnl3370").value;
      let cnl3 = document.getElementById("cnl3310").value;

      let tt1 = document.getElementById("total3306").value;
      let tt2 = document.getElementById("total3740").value;
      let tt3 = document.getElementById("total3310").value;

  console.log(int1);
  console.log(int2);
  console.log(int3);

  console.log(dcr1);
  console.log(dcr2);
  console.log(dcr3);

  console.log(ods1);
  console.log(ods2);
  console.log(ods3);

  console.log(ods1);
  console.log(ods2);
  console.log(ods3);

  console.log(cnl1);
  console.log(cnl2);
  console.log(cnl3);

  console.log(tt1);
  console.log(tt2);
  console.log(tt3);
}


    function exportTableToExcel(tableID, filename = ''){
      var downloadLink;
      var dataType = 'application/vnd.ms-excel';
      let tableSelect = document.getElementById(tableID);
      var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
      
      // Specify file name
      filename = filename?filename+'.xls':'excel_data.xls';
      
      // Create download link element
      downloadLink = document.createElement("a");
      
      document.body.appendChild(downloadLink);
      
      if(navigator.msSaveOrOpenBlob){
          var blob = new Blob(['\ufeff', tableHTML], {
              type: dataType
          });
          navigator.msSaveOrOpenBlob( blob, filename);
      }else{
          // Create a link to the file
          downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
      
          // Setting the file name
          downloadLink.download = filename;
          
          //triggering the function
          downloadLink.click();
      }
  }

    				
