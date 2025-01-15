const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}
// Modificacion de la funcion divide para revisar si el segundo parametro es = 0
function divide(a, b){
  if (b == 0){
    return undefined    
  }
  else {
    return a / b;
  }
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here

// Se agregan las funciones divide y multiply en el export
module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};