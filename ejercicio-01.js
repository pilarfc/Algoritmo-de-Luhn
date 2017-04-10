function isValidCard(creditCardNumber) {
    // Escribe tu código aquí

    //Primera prueba
    if(creditCardNumber == undefined){
        return("Ingresa un numero");  // Cuando se le pone acento a la palabra número no pasa porque en el test no viene así.
        /*if (!/^([0-9])*$/.test(creditCardNumber))
      alert("El valor " + numero + " no es un número");  Expresiones regulares, la mas utilizada para validar numeros en este algoritmo*/
    }

    // Segunda prueba
    if (typeof creditCardNumber != "number") {
      return ("Error de dato");
    }

    // Tercera prueba
    if (digitos(creditCardNumber) != true) {
      return ("Faltan numeros");
    }

    function digitos (creditCardNumber) { // Función para tercera prueba
      var valorNumeros = creditCardNumber.toString();
      var largoNumeros = valorNumeros.length;
      if (largoNumeros == 16) {
        return true;
      }
    }



    // Cuarta y quinta prueba

   function validarNumeros (creditCardNumber) {
      var numerosAString = (creditCardNumber.toString()).split("");
      var numeros = numerosAString.map(conversorNumeros);
      var pares = numeros.map(multiplicacionPares);
      var totalNumerosFinales = pares.map(reducirNumeros);
      var sumaFinal = totalNumerosFinales.reduce(sumaTotal);

      if(sumaFinal%10 === 0){
        return true;
    }
  }

    function conversorNumeros (numero) {
      return parseInt(numero);
    }

    function multiplicacionPares (numero, i) {
      if (i%2 == 0) {
        return numero * 2;
      } else {
        return numero;
      }
    }

   function reducirNumeros(num) {
     if(num > 9){
     return num-9;
   }else{
     return num;
     }
    }

    function sumaTotal (suma, numero) {
      return suma + numero;
    }

}


  /*  function esValida (creditCardNumber) { // función para cuarta y quinta prueba
    var sumatoria = 0;
    var digitosAtexto = creditCardNumber.toString();
    var numeroDeDigitos = digitosAtexto.length;
    var numerosPares = numeroDeDigitos % 2;

    for (var i = 0; i < numerosPares; i++) {
      var digitos = parseInt(creditCardNumber.charAt(i))
       if (i%2 == numerosPares) {
         digitos = digitos * 2;
       } else if (digitos > 9) {
         digito = digito - 9;
       }
       sumatoria = sumatoria + digito;
      }
      return (sumatoria % 10) == 0;
    } */

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
