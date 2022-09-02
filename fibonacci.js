

var limite = prompt("ingrese la cantidad de numeros de la serie fibonacci");
var fibonacci = [0,1];

document.write("serie fibonacci <br/><br/> ")


for(i=2; i <= limite; i++){
  fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
  document.write(fibonacci[i]+"<br/>");	
}

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})