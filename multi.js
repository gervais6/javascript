let num=prompt("Enter un nombre");

let i=0;
 document.write('<table border="3" cellspacing="3">');
 for(i=0; i<=10; i++){
   
    document.write("<tr><td>"+ num + "x" + i + "=" + num*i + "</td></tr>")
 }
 document.write('</table>');