// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listado = [];
const padreActual = document.getElementById("listaAmigos");
var seleccionLista;

function agregarAmigo(){
    var deficionNombre = document.getElementById("amigo").value;

    if(deficionNombre == ""){
        alert("Se necesita Ingresar un nombre válido");
    }else{
        listado.push(deficionNombre.toUpperCase());
        //limpieza de lista
        this.limpiezaListado();

        listado.forEach(e =>{
            const nuevoDiv = document.createElement("li");
            nuevoDiv.textContent = e;
            padreActual.appendChild(nuevoDiv);
        });
        document.getElementById("amigo").value = "";
    }

    
    


    //seleccionLista.forEach(e => e.remove());
    //document.getElementById("listaAmigos").innerHTML = listado;
}

function limpiezaListado(){
    seleccionLista = document.querySelectorAll("li");
    seleccionLista.forEach(e => e.remove());
};


function sortearAmigo(){
    //limpieza de lista
    this.limpiezaListado();

    if(listado.length != 0){
        var indice = parseInt(Math.random() * (listado.length)) + 1;

  

        const nuevoDiv = document.createElement("li");
        nuevoDiv.textContent =  listado[indice - 1] + " fuiste elegido como mi amigo secreto.";
        padreActual.appendChild(nuevoDiv);

        listado.length = 0;
    }
    
        
  
}