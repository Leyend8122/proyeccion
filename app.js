// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listado = [];
const padreActual = document.getElementById("listaAmigos");
const seleccionLista = document.querySelectorAll("li");

function agregarAmigo(){
    
    var deficionNombre = document.getElementById("amigo").value;
    listado.push(deficionNombre);
    alert(listado);

    //limpieza de lista
    seleccionLista.forEach(e => e.remove())

    listado.forEach(e =>{
        //console.log(e);
        const nuevoDiv = document.createElement("li");
        nuevoDiv.textContent = e;
        padreActual.appendChild(nuevoDiv);
    });

    document.getElementById("amigo").value = "";
    //document.getElementById("listaAmigos").innerHTML = listado;
}


function sortearAmigo(){
    //limpieza de lista
    seleccionLista.forEach(e => e.remove());
  
}