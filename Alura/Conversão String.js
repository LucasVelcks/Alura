/* teremos a conversão do número 12341234 para uma string “12341234”
assim poderemos fazer a concatenação entre as strings */

let telefone = 12341234;
console.log("O telefone é " + String(telefone));

// O .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let telefone1 = 12341234;
console.log("O telefone é " + telefone1.toString());

// teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
let usuarioConectado = false;
console.log(String(usuarioConectado));
 // agora teremos uma string “true”.
usuarioConectado = true;
console.log(String(usuarioConectado));
