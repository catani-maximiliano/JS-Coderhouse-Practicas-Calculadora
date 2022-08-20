let number1 = prompt("ingrese un numero");
number1 = parseInt(number1);

let operacion = prompt(
  "ingrese: suma(+), resta(-), division(/) o multiplicacion(*)"
);

let number2 = prompt("ingrese el segundo numero");
number2 = parseInt(number2);

if (isNaN(number1) && isNaN(number2)) {
  alert("no son numeros, por favor ingrese un numero");
  setInterval("location.reload()", 4000);
} else {
  if (operacion == "suma") {
    let suma = number1 + number2;
    alert("la suma es = " + suma);
    setInterval("location.reload()", 4000);
  } else if (operacion == "resta") {
    let resta = number1 - number2;
    alert("la suma es = " + resta);
    setInterval("location.reload()", 4000);
  } else if (operacion == "division") {
    if (number2 !== 0) {
      let division = number1 / number2;
      alert("la suma es = " + division);
      setInterval("location.reload()", 4000);
    } else {
      alert("no se puede dividir por cero");
      setInterval("location.reload()", 4000);
    }
  } else if (operacion == "multiplicacion") {
    let multiplicacion = number1 * number2;
    alert("la suma es = " + multiplicacion);
    setInterval("location.reload()", 4000);
  } else {
    alert(
      "ingrese correctamente la operacion deseada, suma, resta, division o multiplicacion"
    );
    setInterval("location.reload()", 4000);
  }
}
