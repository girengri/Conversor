let cantidadIngresada, divisasUno, divisasDos;
let resultadoConversion = 0;

let datosFormulario = document.querySelector("form");

datosFormulario.addEventListener("submit", (event) => {
   event.preventDefault();

   cantidadIngresada = Number(document.getElementById("cantidad").value);
   divisasUno = document.getElementById("selector1").value;
   divisasDos = document.getElementById("selector2").value;

   if (cantidadIngresada > 0) {
      if (divisasUno == "dolar" && divisasDos == "pesoM") {
         resultadoConversion = (cantidadIngresada * 20.18).toFixed(2);
      } else if (divisasUno == "pesoM" && divisasDos == "dolar") {
         resultadoConversion = (cantidadIngresada / 20.18).toFixed(2);
      } else if (divisasUno == "dolar" && divisasDos == "pesoC") {
         resultadoConversion = (cantidadIngresada * 3773).toFixed(2);
      } else if (divisasUno == "pesoC" && divisasDos == "dolar") {
         resultadoConversion = (cantidadIngresada / 3773).toFixed(5);
      } else if (divisasUno == "dolar" && divisasDos == "euro") {
         resultadoConversion = (cantidadIngresada * 0.86).toFixed(2);
      } else if (divisasUno == "euro" && divisasDos == "dolar") {
         resultadoConversion = (cantidadIngresada / 0.86).toFixed(2);
      } else if (divisasUno == "dolar" && divisasDos == "libraE") {
         resultadoConversion = (cantidadIngresada * 0.73).toFixed(2);
      } else if (divisasUno == "libraE" && divisasDos == "dolar") {
         resultadoConversion = (cantidadIngresada / 0.73).toFixed(2);
      } else if (divisasUno == "pesoM" && divisasDos == "pesoC") {
         resultadoConversion = (cantidadIngresada * 187.01).toFixed(2);
      } else if (divisasUno == "pesoC" && divisasDos == "pesoM") {
         resultadoConversion = (cantidadIngresada / 187.01).toFixed(4);
      } else if (divisasUno == "pesoM" && divisasDos == "euro") {
         resultadoConversion = (cantidadIngresada / 23.5).toFixed(3);
      } else if (divisasUno == "euro" && divisasDos == "pesoM") {
         resultadoConversion = (cantidadIngresada * 23.5).toFixed(2);
      } else if (divisasUno == "pesoM" && divisasDos == "libraE") {
         resultadoConversion = (cantidadIngresada / 27.76).toFixed(3);
      } else if (divisasUno == "libraE" && divisasDos == "pesoM") {
         resultadoConversion = (cantidadIngresada * 27.76).toFixed(2);
      } else if (divisasUno == "pesoC" && divisasDos == "euro") {
         resultadoConversion = (cantidadIngresada / 4393.3).toFixed(5);
      } else if (divisasUno == "euro" && divisasDos == "pesoC") {
         resultadoConversion = (cantidadIngresada * 4393.3).toFixed(2);
      } else if (divisasUno == "pesoC" && divisasDos == "libraE") {
         resultadoConversion = (cantidadIngresada / 5205.53).toFixed(5);
      } else if (divisasUno == "libraE" && divisasDos == "pesoC") {
         resultadoConversion = (cantidadIngresada * 5205.53).toFixed(2);
      } else if (divisasUno == "euro" && divisasDos == "libraE") {
         resultadoConversion = (cantidadIngresada * 0.85).toFixed(2);
      } else if (divisasUno == "libraE" && divisasDos == "euro") {
         resultadoConversion = (cantidadIngresada / 0.85).toFixed(2);
      } else if (divisasUno == "seleccione" && divisasDos == "seleccione") {
         resultadoConversion = alert(
            "Debe elegir el tipo de monedas para la conversion"
         );
      } else if (divisasUno === divisasDos) {
         resultadoConversion = alert(
            "La conversion de monedas no puede ser entre monedas iguales"
         );
      } else {
         resultadoConversion = alert("Ingrese todos los campos");
      }
   } else {
      resultadoConversion = alert("Ingrese un valor mayor a cero (0)");
   }

   document.getElementById("resultados").value=resultadoConversion;
});
