// Vamos calcular a área de um retângulo
// Teremos a conversão de String para números, possibilitando a realização da multiplicação
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura));

// Teremos a conversão de String para números realizado usando o + antes das variáveis
let largura1 = "10";
let altura1 = "5";
console.log( + largura * + altura);

// como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
// a conversão também retornará NaN
let meuNome = "leonardo";
console.log(Number(meuNome));
console.log( + meuNome);

// Teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
let usuarioConectado = false;
console.log(Number(usuarioConectado));
// Agora teremos a conversão de true (verdadeiro) para o número 1.
usuarioConectado = true;
console.log(Number(usuarioConectado));
