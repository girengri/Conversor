let cantidadIngresada, divisasUno, divisasDos;
let resultadoConversion = 0;

let datosFormulario = document.querySelector("form");

datosFormulario.addEventListener("submit", (event) => {
    event.preventDefault();

    cantidadIngresada = Number(document.getElementById("cantidad").value);
    divisasUno = document.getElementById("selector1").value;
    divisasDos = document.getElementById("selector2").value;

    if (divisasUno == "dolar" && divisasDos == "pesoM") {
        resultadoConversion = (cantidadIngresada * 20.18).toFixed(2);
    } else if (divisasUno == "pesoM" && divisasDos == "dolar") {
        resultadoConversion = (cantidadIngresada / 20.18).toFixed(2);
    } else if (divisasUno == "dolar" && divisasDos == "pesoC"){
        resultadoConversion = (cantidadIngresada* 3773).toFixed(2);
     }else if (divisasUno == "pesoC" && divisasDos == "dolar"){
        resultadoConversion = (cantidadIngresada / 3773).toFixed(5);
     }else if (divisasUno == "dolar" && divisasDos == "euro"){
        resultadoConversion = (cantidadIngresada * 0.86).toFixed(2);
     }else if (divisasUno == "euro" && divisasDos == "dolar"){
        resultadoConversion = (cantidadIngresada / 0.86).toFixed(2);
     }else if (divisasUno == "dolar" && divisasDos == "libraE"){
        resultadoConversion = (cantidadIngresada * 0.73).toFixed(2);
     }else if (divisasUno == "libraE" && divisasDos == "dolar"){
        resultadoConversion = (cantidadIngresada / 0.73).toFixed(2);
     }else if (divisasUno == "pesoM" && divisasDos == "pesoC"){
        resultadoConversion = (cantidadIngresada * 187.01).toFixed(2);
     }else if (divisasUno == "pesoC" && divisasDos == "pesoM"){
        resultadoConversion = (cantidadIngresada / 187.01).toFixed(4);
     }

    document.getElementById("resultados").value=resultadoConversion;
});
