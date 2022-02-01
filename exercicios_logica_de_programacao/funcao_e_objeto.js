
function minhaFuncao(objeto) {
    objeto.make = "Toyota";
  }
  
  var meucarro = {make: "Honda", model: "Accord", year: 1998};
  var x, y;
  
  x = meucarro.make;     // x recebe o valor "Honda" -> passagem por valor
  
  minhaFuncao(meucarro);
  y = meucarro.make;   // y recebe o valor "Toyota"
                      // (a propriedade make foi alterada pela função). O y teve que ser chamado depois da função para ser alterado pela passagem por referência

  console.log(x, y);


  