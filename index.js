let number1 = parseInt(prompt("ingrese un numero"));
let number2 = parseInt(prompt("ingrese el segundo numero"));

let operacion = prompt("ingrese: suma(+), resta(-), division(/) o multiplicacion(*)");


//el setInterval(funcion, tiempo en milisegundos) sirve para realizar una funcion en un lapso de tiempo. lo utilizo para reiniciar la pagina .
// location.reload() sirve para reiniciar la pagina.
//isNaN() es una funcion donde devuelve false si es un numero y true si no lo es.

function calculadora(number1, number2, operacion){
if (isNaN(number1) && isNaN(number2)) {
  alert("no son numeros, por favor ingrese un numero");
  setInterval("location.reload()", 4000);
} else {
  if (operacion == "+") {
    let suma = number1 + number2;
    alert("la suma es = " + suma);
    setInterval("location.reload()", 4000);
  } else if (operacion == "-") {
    let resta = number1 - number2;
    alert("la resta es = " + resta);
    setInterval("location.reload()", 4000);
  } else if (operacion == "/") {
    if (number2 !== 0) {
      let division = number1 / number2;
      alert("la division es = " + division);
      setInterval("location.reload()", 4000);
    } else {
      alert("no se puede dividir por cero");
      setInterval("location.reload()", 4000);
    }
  } else if (operacion == "*") {
    let multiplicacion = number1 * number2;
    alert("la multiplicacion es = " + multiplicacion);
    setInterval("location.reload()", 4000);
  } else {
    alert(
      "ingrese correctamente la operacion deseada, suma, resta, division o multiplicacion"
    );
    setInterval("location.reload()", 4000);
  }
 }
}

calculadora(number1, number2, operacion);
