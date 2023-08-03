function apresentar (nome) {
    return `Meu nome é ${nome}`; 
}
console.log(apresentar(nome = 'lucas'))

// Arrow Function
 const apresentarArrow = nome => `Meu nome é ${nome}`
 const soma = (num1, num2) => num1 + num2;
 console.log(apresentarArrow('Lucas'), soma(1, 3))

//  Arrow Function com + de 1 linha de instrução
 const somaNumeros = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'somente numeros de 1 a 9'
    } else {
        return (num1 + num2)
    }
 }
 console.log(somaNumeros(12, 15))
