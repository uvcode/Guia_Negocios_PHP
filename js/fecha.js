
var ar_meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];


function dia() 
{
	document.write("<label for=''>Fecha de Nacimiento</label>");
	document.write("<select class='dia'>");
	for(var i=1; i<=31; i++ )
	{
		document.write("<option value="+i+">"+i+"</option>");
	}	
	document.write("</select>");
}
function mes() 
{
	document.write("<select class='mes'>");
	for( var i=0; i<=11; i++ )
	{
		document.write("<option value="+ar_meses[i]+">"+ar_meses[i]+"</option>");
	}
	document.write("</select>");
}
function anio()
{
	document.write("<select class='anio'>");
	for( var i=1980; i<=2015; i++ )
	{
		document.write("<option value="+i+">"+i+"</option>");
	}
	document.write("</select>");
}