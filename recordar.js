const { log } = require("console");

// PROMESAS HANDLE CON THEN  Y ESTRUCTURA NORMAL--------------------------------------------------------------- 
//const promesacumplida = false;
//const miPromesa = new Promise((resolve, reject) => {
//    if(promesacumplida){
//        resolve("promesa cumplida")
//    } else{
//        reject("promesa rechazada")
 //   }
     

//})

//const manejadorcumplida = (valor) => {
//    console.log(valor);
//}

//const manejadorrechazada = (mensaje) =>{
 //   console.log(mensaje);
//}

//miPromesa.then(manejadorcumplida, manejadorrechazada) 


//__________________________________________________________________________________________________________

//EJEMPLO DE PIZZAS : la pizeria hace pedidos asincronos, y vamos a crear una estructura que nos ayude a manejar los eerores por si no se hace 
// el pedido y a mandar un mensaje cuando se cumple 

// const statusPedido = () => {
 //  let x = Math.random() < 0.8;
 // return x // MANDA NUMEROS ALEATORIOS Y LO MUESTRA POR TRUE Y FALSE

// }

// const miPedidodePizza = new Promise((resolve, reject) => {
 //        if(statusPedido){
   //         resolve("pedido exitoso, tu pizza esta en camino")
    //    } else{
     //       reject("ocurrio un error, intentalo nuevamente")
    //    }
  //   })


    //metotodo 1 para manejar la promesa------------------

 //   const manejadoraceptada = (mensaje) =>{
  //  }
  //  const manejadorrechazada = (mensaje) =>{
  //      console.log(mensaje);
  // }

 //  miPedidodePizza.then(manejadoraceptada, manejadorrechazada)


 //metotodo 2 para manejar la promesa------------------
 
 // miPedidodePizza
 // .then((mensajeaceptada) => {
  //   console.log(mensajeaceptada);
//  })
 // .then(null,(mensajerechazo) => {
  //   console.log(mensajerechazo);
 // })

 //metotodo 3 para manejar la promesa------------------
   

 // miPedidodePizza
 // .then((mensajeaceptada) => {
 //    console.log(mensajeaceptada);
//  })
//  .catch((mensajerechazo) => {
//     console.log(mensajerechazo);
//  })
