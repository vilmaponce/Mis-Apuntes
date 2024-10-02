
const resumenes = [
    {
      numero: "Clase 1",
      resumen: "CLASE NRO : 01- INTRODUCCIÓN A LA PROGRAMACIÓN.",
      detalle: "En esta clase aprenderemos los conceptos básicos de programación, los tipos de lenguajes y su utilización."
    },
  
    {
      numero: "Clase 2",
      resumen: "CLASE NRO : 02-PATRÓN MODELO VISTA CONTROLADOR: Creación de primer proyecto con JavaScript.",
      detalle: `
      - Creación del primer proyecto con JavaScript.
      - Creación del documento HTML.
      - Incorporación de hoja de estilos CSS.
      - Incorporación del controlador con JavaScript.
      - Primeras sentencias: 
        - \`alert()\`, \`console.log()\`, \`prompt()\`, \`confirm()\`, \`console.error()\`, \`console.warn()\`.
      - Realización de líneas de comentarios.
    `

    },
    {
      numero: "Clase de Consulta 1",
      resumen: "CLASE NRO : 01- CONSULTA 1",

    },
    {
      numero: "Clase 3",
      resumen: "TIPOS DE DATOS – OPERACIONES CON VARIABLES: Introducción a las variables y tipos de datos en JavaScript.",
      detalle: `
        - ¿Qué es una variable?
        - Formas de declarar una variable.
        - Particularidades al nombrar variables.
        - Diferentes tipos de variables:
          - Tipo numérico.
          - Tipo string.
          - Tipo boolean.
          - Valores nulos.
          - Valores indefinidos.
        - Bloques de código {}.
        - JavaScript: lenguaje débilmente tipado.
        - Operaciones entre variables:
          - Suma, resta, multiplicación, división.
          - Suma de cadenas e interpolación de cadenas \${variable}.
      `
    },
    {
      numero: "Clase 4",
      resumen: "CLASE NRO. 04: ESTRUCTURAS CONDICIONALES Y COMPARACIONES LÓGICAS",
      detalle: `
      - Creación del documento HTML
      - Incorporación del código JavaScript como controlador de las interacciones del usuario
      - Declaración de variables desde el teclado a través de prompt
      - Inicialización de variables
      - Realizar operaciones numéricas simples entre las variables numéricas
      - Concatenación y/o interpolación de valores strings.
      - Mostrar valores por consola.
      - Visualizar el problema de dividir por cero
      - Visualizar el problema de realizar una operación con una variable no inicializada
      - Visualizar en el archivo controlador.js cuando escribo o trato de realizar o mostrar por consola una variable que no existe.
      - Respetar la identación de código.
      - Introducción a las estructuras condicionales
      - Las operaciones de comparación lógicas básicas >, <, =, >=, <=
        . A > B => se lee A es mayor a B
        . A < B => se lee A es menor a B
        . A = B => se lee A es igual a B
        . A >= B => se lee A es mayor o igual que B
        . A <= B => se lee A es menor o igual que B
      - Introducción a las estructuras condicionales (lado verdadero, lado falso)
      `
    },
    {
      numero: "Clase de Consulta 2",
      resumen: "CLASE DE CONSULTA 2",
    },
    {
      numero: "Clase 5",
      resumen: "CLASE NRO. 05: ERRORES TÍPICOS Y TRY/CATCH",
      detalle: `
      - No inicializar variables
      - Utilizar el “==” en comparaciones en lugar de utilizar el “===”
      - Utilizar una variable no inicializada dentro de un condicional.
      - Olvidarse de cerrar paréntesis (), corchetes [], llaves {} en lugares donde son obligatorios.
      - Ser desprolijo en la estructura del programa, no respetar la IDENTACIÓN.
      - Olvidarse de colocar comillas dobles o comillas simples, en algún mensaje que sea por consola por ejemplo
      - Introducción a la sentencia try/catch
      `
    },
    {
      numero: "Clase 6",
      resumen: "CLASE NRO. 06: ESTRUCTURAS REPETITIVAS",
      detalle: `
      - Estructuras repetitivas
        . Ciclo for
        . Ciclo while
        . Ciclo do while
      - Declaración e inicialización de variables
      - Estructuras condicionales if/else dentro de ciclos
      - Estructuras condicionales anidadas
      - Contadores
      - Acumuladores
      - Cálculo de porcentajes sobre el total
      - Salir de estructuras repetitivas con break
      - Saltar una iteración en estructuras repetitivas con continue
      `
    },
    {
      numero: "Clase de Consulta 3",
      resumen: "CLASE DE CONSULTA 3",
    },
    {
      numero: "Clase 7",
      resumen: "CLASE NRO. 07: FUNCIONES",
      detalle: `
      - ¿Qué es una función? => sinónimos (subprocesos, subrutinas, procedimientos, métodos).
      - Definición o declaración de una función
        . Palabra function
        . Parámetros o argumentos
        . Cuerpo de la función
        . Retorno de la función
      - Funciones que devuelven valor
      - Invocación de Funciones.
      - Mostrar como las funciones pueden participar dentro de expresiones matemáticas
      - Funciones que no devuelven valor => procedimientos.
      - Funciones y bibliotecas de funciones estándar
      - Funciones como constantes => Expresión de función
      - Funciones Flecha o arrow functions
        . Forma de declaración
        . Omitir paréntesis, llaves y la palabra return cuando se recibe un solo parámetro de entrada.
      - Funciones que reciben como parámetro otras funciones.
      `
    },
    {
      numero: "Clase 8",
      resumen: "CLASE NRO. 08: MANEJO DEL DOM",
      detalle: `
      - Introducción y explicación del DOM
      - Estructura de árbol del DOM y sus ELEMENTOS
        . Elementos
        . Atributos
        . Texto
        . Comentarios
      - Interacción con el DOM 
        - Los selectores por ID y Nombre
        . getElementById
        . getElementsByClassName
        . getElementsByTagName
        . querySelector("selector")
        . querySelectorAll("selector")
      - Modificación de Elementos del DOM
        . innerHTML
        . textContent
      - Eventos Principales en una página WEB
        . window.onload
        . click
        . Incorporamos dos botones y capturamos el evento click en dos botones
        . Incorporamos el Evento click al documento y observamos que se produce un efecto de propagación de dentro hacia afuera.
        . stopPropagation()
      `
    },
    {
      numero: "Clase de Consulta 4",
      resumen: "CLASE CONSULTA 4  ",
    },
    {
      numero: "Clase 9",
      resumen: "CLASE NRO. 09: MANEJO DEL DOM",
      detalle: `
      - Manejo del DOM
      - Integración HTML, CSS y JavaScript
      - Declaración de variables y constantes
      - Captura de elementos / objetos de la interfaz con getElementById
        . Mostramos cuando una variable o constante es nula
        . Mostramos cuando una variable es undefined
      - Captura de valores de esos elementos
      - Declaración de funciones
      - Invocación de funciones
      - Captura de los eventos que surgen en la pantalla
      - Interpolación de string para mostrar resultados por consola
      `
    },
    {
      numero: "Clase 10",
      resumen: "CLASE NRO. 10: MANEJO DEL DOM",
      detalle: `
      - Manejo del DOM
      - Integración HTML, CSS y JavaScript
      - Declaración de variables y constantes
      - Captura de elementos / objetos de la interfaz con getElementById
        . Mostramos cuando una variable o constante es nula
        . Mostramos cuando una variable es undefined
      - Captura de valores de esos elementos
      - Declaración de funciones
      - Invocación de funciones
      - Captura de los eventos que surgen en la pantalla
      - Interpolación de string para mostrar resultados por consola
      `
    },
    {
      numero: "Clase de Consulta 5",
      resumen: "CLASE CONSULTA 5  ",
    },
    {
      numero: "Clase 11",
      resumen: "CLASE NRO. 11: ARRAYS / VECTORES",
      detalle: `
      - Declarar un vector literal
      - Mostrar el contenido de un vector
      - Acceder a una posición del vector y modificarlo
      - Agregar al final push()
      - Eliminar el último valor y devolverlo pop()
      - Eliminar el primer elemento del vector y devolverlo shift()
      - Agregar al principio unshift()
      - Eliminar elementos contiguos splice()
      - Devolver la ubicación de un elemento indexOf() y lastIndex(). Uno retorna la primera ubicación y el otro devuelve la última posición.
      - Devolver un elemento y la ubicación, pero con criterios más flexibles y definidos por el usuario como find y findIndex.
      - Filtrar y seleccionar y devolver un conjunto de elementos del vector que cumplan con una condición específica. Filter
        - Forma 1: con una arrow function que no tiene la palabra los () para el parámetro, no tiene llaves y no tiene la palabra return.
        - Forma 2: con una arrow function con llaves y con return
      - Determinar si en un array existen elementos, para ello debemos usar algunos métodos de búsqueda, si devuelve verdadero o falso.
      - Saber la cantidad de elementos de un vector con length
      - Convertir un vector a un string con join
      `
    },
    {
      numero: "Clase 12",
      resumen: "CLASE NRO. 12: OBJETOS",
      detalle: `
      - Crear un objeto literal
      - Acceder a las propiedades del objeto y mostrar por consola
      - Modificar propiedades de un objeto
      - Agregar propiedades y métodos a un objeto
      - Crear un objeto vacío e ir llenándolo
      - Crear un objeto utilizando la palabra reservada new
      - Prototipos de los objetos
      `
    },
    {
      numero: "Clase 13",
      resumen: "CLASE NRO. 13: OBJETOS Y ARREGLOS",
      detalle: `
      - Estructuras de datos (arreglos y objetos)
      - Crear un objeto literal y agregarle un array
      - Mostrar en consola las propiedades de un objeto y las posiciones de un arreglo
      - Mostrar el valor en el array mediante la propiedad del objeto
      - Conocer cuántos elementos tiene un array, se usa con length
      - Métodos de los arreglos: 
      . foreach
      . map
      . filter
      . reduce
      `
    },
    {
      numero: "Clase 14",
      resumen: "CLASE NRO. 14: OBJETOS, ARRAYS Y JSON",
      detalle: `
      - Crear un objeto literal y asignarle un array
      - Agregarle un método que transforme el objeto en JSON
      - Transformar un string en un objeto JSON
      `
    },
    {
      numero: "Clase de Consulta 8",
      resumen: "CLASE DE CONSULTA NRO. 8",
    },
    {
      numero: "Clase 15",
      resumen: "CLASE NRO. 15: RESUMEN FINAL Y REVISIÓN DE TEMAS",
      detalle: ` 
      - Revisión de conceptos de JavaScript.
      - Preguntas y Respuestas.
      `
    },
    {
      numero: "Clase 16",
      resumen: "CLASE NRO. 16: ASINCRONISMO",
      detalle: `
      - **¿Qué es el asincronismo?**
          - El asincronismo permite que ciertas operaciones se ejecuten de manera no bloqueante, lo que significa que el programa puede continuar su ejecución mientras se esperan resultados de otras tareas.

      - **Diferencias entre procesos síncronos y asíncronos**
          - Síncronos: Las tareas se ejecutan en secuencia, una tras otra.
          - Asíncronos: Las tareas pueden iniciarse y ejecutarse independientemente, permitiendo que otras operaciones continúen.

      - **Event Loop**
          - El Event Loop es el mecanismo que permite a JavaScript realizar operaciones no bloqueantes. Se encarga de gestionar la ejecución de las funciones y los eventos.

      - **Manejar el asincronismo para conseguir un proceso síncrono**
          - A través de callbacks, promesas y async/await, podemos manejar tareas asincrónicas y estructurarlas como si fueran síncronas.

      - **Ejemplo 01: De dos procesos aislados y asíncronos**
          - Demostrar la ejecución de dos procesos independientes que no se afectan mutuamente.

      - **Funciones Callback**
          - Las funciones callback son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se completa una tarea.

      - **Ejemplo 02: Utilizando una función callback**
          - Ejemplo práctico que muestra cómo se utiliza una callback para ejecutar una tarea después de completar otra.

      - **Ejemplo 03: La función llamadora recibe como parámetro la próxima función a llamar**
          - Muestra cómo se pueden encadenar funciones mediante callbacks.

      - **Ejemplo 04: La función callback al momento de la invocación se declara de forma anónima como una arrow function**
          - Un ejemplo que ilustra el uso de funciones anónimas como callbacks.

      - **Ejemplo 05: En este quinto ejemplo la función llamadora pasa resultados a la callback**
          - Demuestra cómo una función puede enviar resultados a la callback.

      - **Promesas**
          - Las promesas son objetos que representan la eventual finalización o falla de una operación asíncrona, y su resultado.

      - **Ejemplo 07: Visualización de cómo instanciar el objeto Promise**
          - Ejemplo de cómo crear una nueva promesa.

      - **Ejemplo 08: Crear una función que retorne una promesa**
          - Ejemplo práctico de una función que devuelve una promesa.

      - **Ejemplo 09: Crear una función que retorne una promesa, pero la promesa se pasa como parámetro a la función**
          - Muestra cómo una función puede recibir una promesa como argumento.

      - **Ejemplo 10: En este ejemplo la función lanzadora anterior se utiliza para enganchar dos promesas que se desean ejecutar de forma síncrona**
          - Ejemplo de cómo encadenar promesas.

      - **Async / Await**
         

      `
  },
    {
      numero: "Clase 17",
      resumen: "CLASE NRO. 17: PERSISTENCIA DE DATOS EN EL NAVEGADOR",
      contenido: `Cookies
                  -Web Storage
                  -Local Storage
                  -Session Storage`


    },
    {
      numero: "Clase 18",
      resumen: "CLASE NRO. 18: PROYECTO FINAL",
      contenido: ``
    },
    {
      numero: "Clase 19",
      resumen: "CLASE NRO. 19: En construccion",
      contenido: ``
    },
  ];
  
  
  export default resumenes;
  