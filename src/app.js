//! Entrega con html


function capturar(){
    let nombreCapturar = document.getElementById("nombre").value;
    let cantidadCapturar = document.getElementById("cantidad").value;

    let tipoCapturar = document.getElementById('tipo-alimento').value;

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


 var baseDatos = []; 
 function agregar(nombreCapturar){

     let li = document.createElement('li');

     let text = document.createTextNode(nombreCapturar)
     li.appendChild(text)
     document.getElementById('lista-de-productos').appendChild(li)
 }


const list = document.getElementById('list');
const componente = document.getElementById('componente');

list.addEventListener('click', () => {
    console.log('Papa, batata, garbanzos, helado vainilla, te en hebras, bananas, manzana roja, manzana verde, arroz blanco')
})

componente.addEventListener('mousemove', () => {
    console.log('Recuerda ingresar todos los campos')
})