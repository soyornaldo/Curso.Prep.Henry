// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  var arrObjeto = [];

  for (const propiedad in objeto) {
    arrObjeto.push([propiedad,objeto[propiedad]]);
  }

  return arrObjeto;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objSalida = {};
  for(let i=0; i < string.length ; i++){
    if((objSalida[string[i]] && objSalida[string[i]]++ ) === undefined ){
      objSalida[string[i]] = 1; 
    }  
  }
  return objSalida;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var strMinusculas = '';
  var strMayusculas = '';
  for(let i=0; i < s.length ; i++){
     if((s[i] >= 'a') && (s[i] <= 'z')){
       strMinusculas = strMinusculas + s[i];
     } else{
       strMayusculas = strMayusculas + s[i];
     }
  }

  return strMayusculas+strMinusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var nuevaFrase = '';
  var palabra = '';

  //Primero recupero todas las palabras de la frase
  // y la spongo en el arreglo arrPalabras
  for(let i=str.length-1; i>=0 ;i--){
     if(str[i]!==' '){
      palabra = palabra + str[i];
     }else{
      nuevaFrase = (nuevaFrase.length && palabra + ' ' + nuevaFrase) || palabra;
      palabra = ''; 
     }
  }
  nuevaFrase = palabra + ' ' + nuevaFrase;

  return nuevaFrase;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var textNumero = numero.toString();
  var ok = true;

  for(let i=0, j = textNumero.length-1; i < textNumero.length ;i++,j--){
     console.log(textNumero[i] + ' !== ' + textNumero[j]);
     if(textNumero[i] !== textNumero[j]){
       ok = false;
       break;
     }
  }

  return (ok && "Es capicua") || "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var nuevaCadena = '';

  for(let i=0; i < cadena.length ;i++){
    switch (cadena[i]) {
      case 'a':
        break;
      case 'b':
        break;
      case 'c':
        break;
      case 'A':
          break;
      case 'B':
          break;
      case 'C':
          break;  
      default:
        nuevaCadena = nuevaCadena + cadena[i];
    }
  }

  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var arrObj = [];

  arr.forEach(function(elemento){
      arrObj.push({nombre:elemento, largo:elemento.length});
  });
  
  //esta variante la encontre leyendo en developer.mozilla.org
  return arrObj.sort(function (a, b) {
    if (a.largo > b.largo) {
      return 1;
    }
    
    if (a.largo < b.largo) {
      return -1;
    }
    
    return 0;
  });

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var arrSalida = [];

  arreglo1.forEach(function(elem1){
     arreglo2.forEach(function(elem2){
        if(elem1 === elem2){
           //no me lo piden pero con esto evito duplicar elementos 
           //en el arreglo de salida
           if(arrSalida.indexOf(elem1) === -1){
             arrSalida.push(elem1); 
           }
        }
     });
  });

  return arrSalida;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

