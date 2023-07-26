/* Função sem retorno e sem parâmetro: A função abaixo apenas executa uma instrução, 
sem a necessidade de disponibilizar o resultado para o restante do código. 
Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros. */

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

   function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Lucas')
   cumprimentaPessoa('Thuany')

   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Helena') // “Oi gente! Meu nome é Helena” 

   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
 console.log (operacaoMatematica(15, 30, 45)) // 90