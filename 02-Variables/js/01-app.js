/*  ======== Variables ========
    Las variables son contenedores de información, es decir, un espacio en memoria que se utiliza para almacenar valores.  
    Las variables se pueden declarar de tres formas:
    - var: Es la forma antigua de declarar variables, no es muy utilizada.
    - let: Es la forma moderna de declarar variables, se utiliza para variables que van a cambiar su valor.
    - const: Es la forma moderna de declarar variables, se utiliza para variables que no van a cambiar su valor.
    
    Las variables se pueden declarar de dos formas:
    - Declaración: Se declara la variable y se le asigna un valor.
    - Inicialización: Se declara la variable y se le asigna un valor.

    Las variables se pueden declarar de dos formas:
    - CamelCase: Se escribe la primera palabra en minúscula y las siguientes palabras en mayúscula.
    - SnakeCase: Se escribe la primera palabra en minúscula y las siguientes palabras separadas por un guión bajo.
*/

var producto = "Monitor de 24 pulgadas";


var disponible; // Inicializar la variable
disponible = true; // Asignar un valor a la variable

// Inicializar múltiples variables al mismo tiempo, se utiliza la palabra reservada var y se separan por comas.
var categoria = 'Computadoras',
    marca = "Marca Famosa",
    calificacion = 5;

// Las variables no pueden iniciar con números, pero sí pueden terminar con números.

// var 99dias; // Incorrecto
var dias99; // Correcto

// var 01_; // Incorrecto
var _01; // Correcto

// Estilos para nombrar variables
var nombre_producto = "Monitor HD"; // SnakeCase
var nombreProducto = "Monitor HD"; // CamelCase
var NombreProducto = "Monitor HD"; // PascalCase