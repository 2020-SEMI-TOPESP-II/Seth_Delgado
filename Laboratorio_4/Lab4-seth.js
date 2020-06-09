/*1. Declarar dos variables con la palabra reservada "var", 
    imprimir el resultado de las operaciones de "Suma", "Resta", 
    "Multiplicación" y 
    "División" en la consola. Las variables pueden ser estáticas.
 */

var a = 200;
var b = 20;
    console.log("la suma de a y b es: ", a + b); 
/*   (+ "\n", + "la resta de a y b es:" a - b);
tambien podia hacerlo asi en un solo console.log pero 
el primer resultado no se resaltaban en amarrillo*/
    console.log("la resta de a y b es: ", a - b);
    console.log("la multiplicación de a y b es: ", a * b);
    console.log("la división de a y b es: ", a / b);
  console.log("\n");

/*2.Declarar dos variables con la palabra reservada "let",
    imprimir la concatenación de ellas
*/
let con1 = "mi nombre es: ";
let con2 = "Seth Delgado"
    console.log(con1 + con2);
console.log("\n");
/*
3. Declarar dos variables con la palabra reservada "const", 
imprimir cuál es el tipo de dato de esa variable.
*/
const tipo1 = 2;
const tipo2 = null;
console.log("el tipo de dato para la primera variable es:", typeof tipo1 ,"\n",
"el tipo de dato para la segunda variable es:", typeof tipo2);

/*
4.Declarar una variable tipo Objecto, colocar 4 llaves dentro de él 
que contengan un entero,un string, un booleano y un objeto vacío, 
en ese mismo orden.
*/
console.log("\n");

var Datos = {
  numero: 26,  
  juego: "MonsterHunter",
  boole: false,
  vacio: null
};
console.log(Datos.juego);
