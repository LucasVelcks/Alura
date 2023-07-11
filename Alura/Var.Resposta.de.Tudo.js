/*
 Variáveis declaradas com var ou let podem ser reatribuídas. 
 Porém, uma variável declarada com let só pode ser usada no mesmo escopo em que está definida. 
 No caso da declaração const, significa que a variável sempre terá uma referência ao mesmo
 objeto ou valor primitivo, porque essa referência não pode ser alterada. 
 A referência em si é imutável, mas o valor mantido pela variável não se torna imutável.
*/ 

var respostaDeTudo = 42
let idade = 29
const pi = 3.14
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

/* 
Ao declararmos let, podemos apenas declarar a variável, sem atribuir nenhum valor. 
Além disso, o valor inicial pode ser modificado depois: 
*/ 

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100

minhaLet = "Lucas"
console.log(minhaLet);