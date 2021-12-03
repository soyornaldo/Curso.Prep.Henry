// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]; 
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (let i=0; i < array.length ;i++){
     array[i]++;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  var texto_salida;

  for (let i = 0; i < palabras.length  ; i++){
     if (i === 0){
      texto_salida = palabras[i];
     }else{
      texto_salida = texto_salida + ' ' + palabras[i];
     }
     
  }
  return texto_salida;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  var existe = false;

  for (let i = 0; i < array.length  ; i++){
     if (array[i] === elemento){
       existe = true;
       break;
     }
  }

  return existe;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var suma = 0;
  for (let i = 0; i < numeros.length  ; i++){
     suma = suma + numeros[i];
  }

  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var suma = 0;

  for (let i = 0; i < resultadosTest.length  ; i++){
     suma = suma + resultadosTest[i];
  }

  return suma / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var el_mas_grande = numeros[0];

  for (let i = 1; i < numeros.length  ; i++){
     if (el_mas_grande < numeros[i]){
       el_mas_grande = numeros[i];
     }
  }

  return el_mas_grande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  switch (arguments.length){
    case 0: 
      return 0;
      break; 
    case 1: 
      return arguments[0];
      break;  
    default:
      var multiplicacion = 1;
      for (let i = 0; i < arguments.length  ; i++){
         multiplicacion = multiplicacion * arguments[i];
      }  
      return multiplicacion;
  } 
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var elems_over_18 = 0;

  for (let i = 0; i < arreglo.length  ; i++){
     if (arreglo[i] > 18){
       elems_over_18++;
     }
  } 
  return elems_over_18;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  if ((numeroDeDia === 1) || (numeroDeDia === 7)){
     return 'Es fin de Semana';
  }else if ( (numeroDeDia === 2) ||
             (numeroDeDia === 3) ||
             (numeroDeDia === 4) ||
             (numeroDeDia === 5) ||
             (numeroDeDia === 6) ){
     return 'Es dia Laboral'   
  };
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  return (n.toString())[0] === '9';
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  var todos_iguales = true;

  for (let i = 1; i < arreglo.length  ; i++){
    if (arreglo[0] !== arreglo[i]){
      todos_iguales = false;
      break;
    }
  }

  return todos_iguales;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  var arreglo_salida = [];
  var encontrados = [false,false,false];
  
  for (let i = 0; i < array.length  ; i++){

    switch(array[i]){
      case 'Enero': 
        encontrados[0] = true;  
        arreglo_salida.push(array[i]);
        break;
      case 'Marzo':
        encontrados[1] = true; 
        arreglo_salida.push(array[i]); 
        break;  
      case 'Noviembre':
        encontrados[2] = true;  
        arreglo_salida.push(array[i]);
        break; 
    } 
  
  }

  if (!encontrados[0] || !encontrados[2] || !encontrados[2]){
    return 'No se encontraron los meses pedidos';
  }else{
    return arreglo_salida;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var array_salida = [];

  for (let i = 0; i < array.length  ; i++){
     if (array[i] > 100){
        array_salida.push(array[i]);
     }
  }

  return array_salida;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var array_salida = [];
  var limite = 0;
  var nuevo_valor;

  for (let i = 0; i < numero.length  ; i++){

    if (++limite <= 10){

      nuevo_valor = numero[i] + 2;
      
      if (nuevo_valor === limite){
        return 'Se interrumpió la ejecución';
      }else{
        array_salida.push(nuevo_valor); 
      }

    }else{
      //se acabaron las 10 posibilidades para aumentar en 2 el numero
      break;
    }

  }

  return array_salida;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var array_salida = [];
  var limite = 0;

  for (let i = 0; i < numero.length  ; i++){
    
    if (++limite <= 10){
      if (limite === 5){
        continue;
      }else{
        array_salida.push(numero[i] + 2); 
      }  
    }else{
      //se acabaron las 10 posibilidades para aumentar en 2 el numero
      break;
    }
  }

  return array_salida;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
