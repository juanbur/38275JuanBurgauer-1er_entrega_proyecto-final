//! Entrega con html


function capturar(){
    let nombreCapturar = document.getElementById("nombre").value;
    let cantidadCapturar = document.getElementById("cantidad").value;

    let tipoCapturar = document.getElementById('tipo-alimento').value;
     //    console.log(nombreCapturar);
     //    console.log(cantidadCapturar);

     //CREAMOS UN NUEVO OBJETO
     //dentro de los parentesis le creo los atributos (pongo las variables que armé para que el usuario las agregue.)
     // nuevoProducto = new Producto(nombreCapturar,cantidadCapturar + " kilos"); //creo una variable global
     // console.log(nuevoProducto);
     if(nombreCapturar && cantidadCapturar && tipoCapturar) {
         let text_a_mandar = `${nombreCapturar}  - ${tipoCapturar} - ${cantidadCapturar} kg.`
         agregar(text_a_mandar);
     } 
     else {
         alert('Por favor, completar todos los campos')
     }
     if (cantidadCapturar<3) {
        alert('Colocarlo en barra')
    } 
    else {
        if (tipoCapturar==='fresco') 
        {
            alert('comentario: Ubicarlo en la cámara de frío')
        } 
        else 
        {
            if (tipoCapturar==='congelado') {
                alert('comentario: Ubicarlo en la cámara de congelados')
            } 
            else {
                alert('comentario: Ubicarlo en almacén')
            }
        }
    }
 }
 //capturar nombre y cantidad y eso transformarlo en un objeto

 // Mediante un array paso un objeto a una tabla.

 var baseDatos = []; //nuevoProducto (es el objeto), tiene que pasar dentro de la base de datos, que es el array
 function agregar(nombreCapturar){
     // baseDatos.push(producto);
     // Creo el elemento <li></li>
     let li = document.createElement('li');
     // Creo un nodo de texto
     let text = document.createTextNode(nombreCapturar)
     li.appendChild(text)
     document.getElementById('lista-de-productos').appendChild(li)
     // console.log(baseDatos); //metodo Push, le pones la variable y lo guarda adentro
 }