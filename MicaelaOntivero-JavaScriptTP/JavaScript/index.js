alert('¿A que comision pertenece?')
comision = prompt("ingrese su numero de comision");
alert("comision: " + comision)
     
alert('¿Estamos en el año ____?')
 let año = prompt('Ingrese el año actual')
 while (año != 'ESC') {
     switch (año) {
         case '2022':
             alert('Eso es corresto estamos en el 2022')
             break;
         case '':
             alert('Año no ingresado')
             break;
         default:
             alert('¿Necesitas un calendario?')
             break;}    
        año = prompt ("ingrese el año nuevamente")
} 



