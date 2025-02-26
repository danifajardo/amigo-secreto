// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//arreglo donde se guardaran los amigos 
let amigos = [];

//función para agregar amigos
function agregarAmigo(){
    //obtener el valor del campo de texto
    let campoTexto = document.getElementById("amigo");
    //verificar si el valor es nulo 
    if(campoTexto.value == ""){
        //creamos una alerta para indicar que se quiere ingresar un valor vacio
        alert("por favor digita un nombre!");
    }else{
        //agregamos el nombre del amigo en el arreglo amigos 
        amigos.push(campoTexto.value);
        //reestablecer el vañor del campo de texto a vacio 
        campoTexto.value = "";
        //actualiza la lista
        actualizarLista();
    }

}

//función para actualizar la lista mostrando los amigos actuales
function actualizarLista(){
    //obtener el elemento ul donde se agregarań los elementos
    let lista = document.getElementById("listaAmigos");
    //resetear la lista
    lista.innerHTML = "";
    //listar cada uno de los amigos
    for (let i = 0; i < amigos.length; i++) {
        //crear un nuevo elemento li
        const nuevoElemento = document.createElement("li");
        //asignar el valor del nombre del amigo como texto al elemento de la lista
        nuevoElemento.innerHTML = amigos[i];
        //añadir el nuevo elemento a la lista
        lista.appendChild(nuevoElemento);
    }
}

//función sortear amigo
function sortearAmigo(){
    //verificar si el arreglo tiene almenos un amigo 
    if(amigos.length != 0){
        //numero aleatorio entre 0 y cantidad de amigos menos 1
        let indiceAmigoAleatorio = parseInt(Math.random()*(amigos.length - 1));
        //escogemos el amigo
        let amigoEscogido = amigos[indiceAmigoAleatorio];
        //tremos el elemento ul resultado
        let listaResutado = document.getElementById("resultado");
        //limpiar la lista resultado
        listaResutado.innerHTML = "";
        //crear un elemento li nuevo
        let elementoListaResultado = document.createElement("li");
        //añadimos el nuevo elemento li 
        listaResutado.appendChild(elementoListaResultado);
        //imprimimos el amigo escogido en lista resultado
        elementoListaResultado.innerHTML = amigoEscogido;
        //limpieamos el arreglo amigos
        amigos = [];
        //actualizamos la lista
        actualizarLista();
    }else{
        alert("No has agregado a ningun amigo!");
    }
}

