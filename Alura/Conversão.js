// Conversão

// number() - CONVERTE STRING PARA NUMBER
// String() - CONVERTE NUMBRA PARA STRING

const number = 277;
const numString = "357";

console.log(number + numString);

const number1 = 367;
const numString1 = "472";

console.log(number1 + Number(numString1));

// PODE SER FEITO DIRETAMENTE NA DECLARAÇÃO
// SÓ PODEMOS CONVERTER UMA STRING PARA NUMBER SE HOUVER APENAS NUMEROS NESSA STRING.

const numero = 123;
const numTexto = Number("123");

console.log(numero + numTexto);
