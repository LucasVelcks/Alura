const num = 11;

if (num > 10 || !num) {
 console.log('número não válido');
}

const num1 = 11;

if (num1 > 10 && num < 20) {
 console.log('número válido');
}

function verificaNumero(numero) {
    if (numero > 10) {
         return 'número maior que 10';
    } else {
        return 'número não é maior que 10';
    }
}
console.log(verificaNumero(9)) //número não é maior que 10

const num2 = 15;

if (num2 >= 0 && num2 <= 10) {
  console.log('número entre zero e dez');
} else if (num2 > 10 && num2 <= 20) {
  console.log('número entre dez e vinte');
} else if (num2 > 20 && num2 <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}