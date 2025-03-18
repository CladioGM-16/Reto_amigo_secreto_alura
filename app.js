// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


let lista_amigos =[];
let cantidad = 0;


function agregarAmigo( ){
    let amigos=document.getElementById("amigo").value;
    if (amigos === "" ||  amigos.length < 4 ) {
        alert("Ingrese un nombre valido");
        return;
    }
    if (lista_amigos.includes(amigos)) {
        alert("Ese nombre ya esta en la lista");
        return;
    }

    lista_amigos.push(amigos);
    console.log(lista_amigos);
    cantidad++;
    limpiar();
    mostrarAmigos();
}


function mostrarAmigos(){
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML="";
    for(let i=0; i<lista_amigos.length; i++){
        let item=document.createElement("li");
        item.textContent=lista_amigos[i];
        lista.appendChild(item);
    }

}
function sortearAmigo(){
    console.log(cantidad);
    if(cantidad==0){
        alert("No hay amigos para sortear");
    }else{  
        let amigo_sorteado=lista_amigos[Math.floor(Math.random()*cantidad)];
        let resultado=document.getElementById("resultado");
        resultado.innerHTML="el amigo sorteado es: "+ amigo_sorteado;
    }
}
function limpiar(){
    document.getElementById("amigo").value="";
}

function reiniciarLista() {
    lista_amigos = [];
    cantidad = 0;
    mostrarAmigos();
    document.getElementById("resultado").innerHTML = "";
    alert("Lista vacia");
}