const numero = document.getElementById('numero');
const calcular = document.getElementById('btn-calcular');


function calcularFactorial() {
    let factorial = 1;
    let listaNumeros = [];

    let num = Number(numero.value);
    
    if (num < 1) {
        document.getElementById('mensaje').innerHTML ='¡Debe ingresar un número entero positivo mayor o igual a 1!';
        numero.value = "";
    } else {
         document.getElementById('mensaje').innerHTML ='';
        for (let i = 1; i <= num; i++) {
            factorial = factorial * i;
            listaNumeros.push(i);
        }
    
        document.getElementById('num').innerHTML = num;
        document.getElementById('factorial').innerHTML = factorial;
        if(num>100){document.getElementById('formula').innerHTML = `${num}! = ${factorial}`;}
        else{
        document.getElementById('formula').innerHTML = `${num}! = ${listaNumeros.join(' x ')} = ${factorial}`;
        }
        numero.value = "";
    }
}


calcular.addEventListener('click', calcularFactorial);

numero.addEventListener('keydown', (evento) => {
  
    if (evento.key === 'Enter') {
        calcularFactorial();
    }
});