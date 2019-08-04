

let d = new Date();
//Array days
let dia = new Array(7);
dia[0]="DOMINGO";
dia[1]="LUNES";
dia[2]="MARTES";
dia[3]="MIÉRCOLES";
dia[4]="JUEVES";
dia[5]="VIERNES";
dia[6]="SABADO";
//Array months
let Mes = new Array(11);
Mes[0]="ENERO";
Mes[1]="FEBRERO"
Mes[2]="MARZO";
Mes[3]="ABRIL";
Mes[4]="MAYO";
Mes[5]="JUNIO";
Mes[6]="JULIO";
Mes[7]="AGOSTO";
Mes[8]="SEPTIEMBRE";
Mes[9]="OCTUBRE";
Mes[10]="NOVIEMBRE";
Mes[11]="DICIEMBRE";


document.getElementById('fecha').innerHTML += ""+ dia[d.getDay()] +" " +d.getDate()+
" DE "+(Mes[d.getMonth()] + " DE "  +d.getFullYear())