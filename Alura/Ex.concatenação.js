const nome = 'Lucas';
const sobrenome = 'Velcks';
const idade = 24;
const valorIngresso = 26.50;
const totalCarteira = 50;
const atendente = 'Julia';

const atendimento = `Olá ${nome} ${sobrenome}, me chamo ${atendente} e o valor do seu ingresso é de ${valorIngresso},
seu troco é de ${totalCarteira - valorIngresso}!`
console.log(atendimento);