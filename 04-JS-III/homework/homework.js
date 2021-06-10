// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length - 1 ];

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  for(var i = 0; i < array.length; i++){
      array[i] = array[i] + 1;
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
  return (palabras.join(" "));
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++){
    if (array[i] === elemento){
      return true;
    }
     
}
return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // por ejemplo el array es [4, 5, 8, 12]
  var suma = 0; //aca estoy creando una variable para el punto de partida que voy a sumar y vamos a empezar en 0
  for (var i = 0; i < numeros.length; i++){
    suma = suma + numeros[i]; // el bucle va a empezar en 0 hasta que termine el numero de elementos, entonces..
  // 0   =   0  +    4 (toma el numero que esta en el lugar 0 del array) = 4 // comienza el ciclo de vuelta..
  // 4   =   4  +    5  =  9
  // 9   =   9  +    8  =  17 
  // 17  =   17 +    12 =  29 
  }
  return suma; //29
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo = 0;
  for (var i = 0; i < numeros.length; i++){
    // para acceder a cada elemento del array ponemos numeros[0], [1],...pero tenemos que comprar entre ellos 
    // entonces preguntamos ¿ maximos es mas chico que numeros [i]?
    // ejemplo array numeros= [2, 5, 1, 11 ]
      if (maximo < numeros [i] ) {
        //  0    <    2   =  true 
        maximo = numeros[i];
      //maximo =    2
      // vuelve a hacer el bucle con el segundo elemento del array
      //   2     <    5   = true 
      //maximo =    5
      //   5     <    1   = false (entonces ahi no pasa y sigue con el for hasta encontrar un numero mas grande que 5)
      //   5     <    11  = true
      //maximo = 11 // y ahi termina y retorna 

      }
  }
return maximo;
  
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) return 0;
  var total = 1; // empezamos en 1 porque si empezamos en 0 la multiplicacion siempre nos va a sar 0
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
// ejemplo
// var arreglo = [ 2, 45, 12, 21, 39] => 3 (elementos son mayores a 18)
var cantidad = 0;
for (var i = 0; i < arreglo.length; i++){
   if (arreglo[i] > 18) { // tenemos que preguntar cual elemento es mayor a 18 y le tenemos que pedir que sume 1 para eso creo una variable
     cantidad = cantidad + 1;
   }
   
  }
return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana"
  }
  return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  // para acceder al primer digito del numero n lo tenemos que pasar a string entonces usamos el metodo .toString
  if (n.toString()[0] === "9" ){
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i = 0; i < arreglo.length; i++){
    if (arreglo[i] === arreglo[i + 1]){
      return true;
    }
  }return false;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  // ejemplo tenemos el sgte array ["Enero", "Febrero", "Marzo", "Mayo"; "Noviembre"]
  // tenemos que recorrerlo y encontrar enero , marzo y noviembre y pushearlo a un nuevo array
  var nuevoArray = [ ]
  for (var i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
     nuevoArray.push(array[i]); // pusheamos el array actual
    
    }
  }
  if (nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos"
  }else {
    return nuevoArray;
  }
      
  }



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray =[];
  for (var i =0 ; i < array.length; i++){
    if (array[i] > 100) { //tengo que preguntar si cada elemento del array es mayor a 100
      nuevoArray.push(array[i])
      
  } 

}return nuevoArray;
  


}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      array.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
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
