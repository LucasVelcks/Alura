const idadeMinima = 18;
const idadeCliente = 16;

 if (idadeCliente >= idadeMinima ) {
      console.log("Beba Cerveja");
 } else {
     console.log('Beba suco');
 }

//  Operador Tenário é recomendado usar para encurtar alguns codigos mais simples.
            //Condição                    //True               //False
 console.log(idadeCliente >= idadeMinima ? 'Beba cerveja' : 'Beba suco');