ejercicio1="///////////////1. Calcular el área de un rectángulo///////////////";
console.log(ejercicio1); 
//Función para calcular el área de un rectángulo - Opción 1: Usando una función simple
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}
console.log("Opción 1: función simple");
console.log("Solución 1: el área de un rectángulo de 10cm x 10cm es", calcularAreaRectangulo(10, 10), "cm2"); // Resultado: 100
console.log("Solución 2  el área de un rectángulo de 10cm x 5cm es", calcularAreaRectangulo(10, 5),"cm2"); // Resultado: 50
console.log("Solución 3: el área de un rectángulo de 7.5cm x 3cm es", calcularAreaRectangulo(7.5, 3),"cm2"); // Resultado: 22.5
console.log("________________");

/*acá probé la función simple ingresando 2 valores, y probé con uno decimal*/
 
// Opción 2: Usando una función con parámetros predeterminados
function calcularAreaRectanguloConParametrosDeterminados(longitud = 1, ancho = 1) {
    return longitud * ancho;
}

// esta opción la encontré buscando alternativas
//es una función que utiliza valores predeterminados para mostrar cómo la función podría comportarse si no se proporcionan argumentos
console.log("Opción 2: con parámetros predeterminados "); 
console.log("Solución 1: el área de un rectángulo de 1cm x 6cm es", calcularAreaRectanguloConParametrosDeterminados(6), "cm2");    // Resultado: 6
console.log("Solución 2: el área de un rectángulo de 1cm x 1cm es", calcularAreaRectanguloConParametrosDeterminados(), "cm2");     // Resultado: 1
console.log("________________"); 

// Opción 3: Usando una función de flecha
const calcularAreaRectanguloFlecha = (longitud, ancho) => longitud * ancho;

// esta opción la encontré buscando alternativas
//una función flecha, es una forma más moderna y concisa de escribir funciones en JS
console.log("Opción 3: usando función flecha");
console.log("Solución 1: el área de un rectángulo de 4cm x 5cm es", calcularAreaRectanguloFlecha(4, 5), "cm2"); // Resultado: 20
console.log("________________");
console.log("");


 ejercicio2="///////////////2. Contar palabras en una cadena///////////////";
 console.log(ejercicio2); 
 console.log("Opción 1: con función");
  // Función para contar palabras en una cadena
function contarPalabras(string) {
    return string.split(' ').length;
}
//para resolverlo usé el método split para la cadena de texto ya que la divide en un array de palabras donde encuentra un espacio en blanco
//y para obtener la longitud del array, usé la propiedad .length
console.log("Solución 1: 'Este año vamos de vacaciones a la Costa', tiene", contarPalabras("Este año vamos de vacaciones a la Costa"),"palabras"); // Resultado: 8
console.log("Solución 2: '¿Cuántas palabras tiene esta cadena?', tiene", contarPalabras("¿Cuántas palabras tiene esta cadena?"),"palabras"); // Resultado: 5
console.log("Solución 3: 'Hola, ¿cómo estás?', tiene", contarPalabras("Hola, ¿cómo estás?"),"palabras"); // Resultado: 3
console.log("________________");

console.log("Opción 2: con espacios en blanco");
 function contarPalabras(texto) {
    texto = texto.trim(); // El método .trim elimina los espacios en blanco al principio y al final del texto
    let palabras = texto.split(/\s+/); // Divide el texto en palabras usando los espacios como separadores
    return palabras.length; // Devuelve el número de palabras
}
let texto = "Hola,  (nombre)   ¿cómo estás?";
console.log("Número de palabras de la cadena  'Hola,  (nombre)   ¿cómo estás?':", contarPalabras(texto)); // Salida: 3
/*El método split se usa con una expresión regular (/\s+/) para dividir el texto en palabras, 
considerando uno o más espacios en blanco como separadores*/
//la expresión regular \s+,  sgnifica "uno o más espacios en blanco" (esto incluye espacios, tabulaciones y saltos de línea).
console.log("________________");

console.log("Opción 3: sin función");
//encontré esta otra opción donde define la variable del string y no usa una función, desventaja: no es reutilizable
var str = "Estas son algunas palabras para contar";
var ContarPalabras = str.split(' ').length;
console.log("La cadena 'Estas son algunas palabras para contar' contiene " + ContarPalabras + " palabras.");
console.log("________________");
console.log("");


ejercicio3="///////////////3. Invertir una cadena///////////////";
 console.log(ejercicio3); 
 // Función para invertir una cadena
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}
console.log('Hola Mundo -', "Solución 1:", invertirCadena("Hola Mundo")); // Resultado: "odnuM aloH"
console.log('Estocolmo -', "Solución 2:", invertirCadena("Estocolmo")); // Resultado: "omlocotsE"
console.log('ananá -', "Solución 3:", invertirCadena("ananá")); // Resultado: "ánana"
console.log("________________");
console.log("");
/*el método reverse() se utiliza para invertir el orden de los elementos en un array. */
//Pero las cadenas (strings) en JavaScript son inmutables, lo que significa que no podemos aplicar reverse() directamente a una cadena.
//Para invertir una cadena, podemos convertirla en un array de caracteres, invertir ese array y luego unirlo nuevamente en una cadena.
//.split(''): Convierte la cadena en un array .
//.reverse(): Invierte el array.
//.join(''): Une los elementos del array de nuevo en una cadena.


 ejercicio4="///////////////4. Encontrar el palíndromo///////////////";
 console.log(ejercicio4); 
// Función para verificar si una cadena es un palíndromo
function esPalindromo(texto) {
    // Eliminamos espacios y convertimos a minúsculas para una comparación uniforme 
    const textoLimpio = texto.toLowerCase().replace(/[\W_]/g, ''); 
    return textoLimpio === textoLimpio.split('').reverse().join(''); // Comparamos el texto con su reverso
}
console.log('Anilina', "Solución 1: ", esPalindromo("Anilina")); // true
console.log('Reconocer', "Solución 2: ", esPalindromo("Reconocer")); // true     
console.log('Amo la pacífica paloma', "Solución 3: ", esPalindromo("Amo la pacífica paloma")); // false
console.log('(Esta solución da falso porque le dejé el acento en pacífica)');
console.log('Yo hago yoga hoy', "Solución 3: ", esPalindromo("Yo hago yoga hoy")); //true
console.log("________________");
console.log("");

/*texto.replace(/\s+/g, ''): Esta expresión regular elimina todos los espacios en el texto.
.toLowerCase(): Convierte el texto a minúsculas.
texto.split('').reverse().join(''): Convierte el texto en un array de caracteres, lo invierte y luego lo une de nuevo a una cadena.
texto === ...: Compara el texto original (modificado) con su versión revertida.*/

ejercicio5="///////////////5. Crear un programa para convertir la edad de un perro a años humanos///////////////";
 console.log(ejercicio5); 
 
 
function calcularEdadCanina() {
    // Declarar una variable para la edad canina
    var edadCanina;

    // Bucle para solicitar un número válido, por si ingresan algo distinto a número
    do {
        // Solicitar la edad humana al usuario
        edadCanina = prompt("Introduce la edad de tu perro:");
        
        // Verificar si la entrada es un número válido
        if (isNaN(edadCanina) || edadCanina < 0) {
            alert("Por favor, introduce un número válido para la edad de tu perro.");
        }
    } while (isNaN(edadCanina) || edadCanina < 0); 

    // Calcular la edad canina
    var edadHumana = edadCanina * 7; 

    // Mostrar el resultado en la consola
    console.log(`Si la edad de tu perro es de ${edadCanina} años, tu perro tiene ${edadHumana} años humanos`);    
}

// Llamar a la función
calcularEdadCanina();
