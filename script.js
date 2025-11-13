//Ejercicio #1

let compras = ["manzana"];
console.log(compras);


compras.push("leche", "pan");
console.log (compras); 

compras.unshift ("huevos");
console.log(compras);

compras.splice(1,1);
console.log(compras);

//Ejercicio #2 

let tareas = ["Revisar emails"];
console.log(tareas);

tareas.unshift("Llamar al cliente")
console.log(tareas);

tareas.unshift("Preparar reporte")
console.log(tareas);

tareas.shift()
console.log(tareas);

tareas.shift()
console.log(tareas)

//Ejercicio #3

let historial = ["google.com", "youtube.com", "facebook.com"];

historial.pop()
console.log(historial);

historial.pop()
console.log(historial);

//Ejercicio #4

let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];
console.log(colaImpresion);


colaImpresion.shift()
console.log(colaImpresion);

colaImpresion.push("doc4.txt")
console.log(colaImpresion);

colaImpresion.shift()
console.log(colaImpresion);







