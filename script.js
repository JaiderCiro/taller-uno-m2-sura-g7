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

//Ejercicio #5

let fila = ["Ana", "Luis", "Carlos", "Maria"];
console.log(fila);

fila.splice(1,1)
console.log(fila);

fila.splice(1,0,"Jorge")
console.log(fila)

//Ejercicio #6

let mazo = ["As", "Rey", "Reina", "Jota"];
console.log(mazo);

mazo.reverse()
console.log(mazo);

mazo.shift()
console.log(mazo);

//Ejercicio #7 

let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];
console.log(asientos);

asientos.fill("Reservado",1,4)
console.log(asientos);

//Ejercicio #8

let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];
console.log(productos);

productos.splice(2,1,"Mouse Nuevo")
console.log(productos);

//Ejercicio #9 

let estudiantes = ["Zapata", "Alvarez", "Gomez", "Bernal"];
console.log(estudiantes);

estudiantes.sort()
console.log(estudiantes);


//Ejercicio #10

let puntuaciones = [100, 85, 92, 78];
console.log(puntuaciones);

puntuaciones.fill(0);
console.log(puntuaciones);

//Ejercicio #11

let carrito = [];
console.log(carrito);

carrito.push("Camisa", "Pantalon")
console.log(carrito);

carrito.unshift("Zapato")
console.log(carrito);

carrito.splice(1,1); 
console.log(carrito);

//Ejercicio #12 

let commits = ["v1.0", "v1.1"];
console.log(commits);

commits.push("v1.2");
console.log(commits);

commits.pop("v1.2");
console.log(commits);

commits.push("v1.2-corregido"); 
console.log(commits);







