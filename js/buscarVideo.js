import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideo(datosDeBusqueda);

    const listaDeBusqueda = document.querySelector("[data-lista]");

    /* while(listaDeBusqueda.firstChild){
         //console.log(busqueda)
        lista.removeChild(lista.firstChild);
    } */

    listaDeBusqueda.replaceChildren();

    busqueda.forEach(video=>listaDeBusqueda.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagen)));

     if(busqueda.length==0){
        listaDeBusqueda.innerHTML=`<h2 class="mensaje__titulo">No encontramos videos para ese filtro</h2>`;
    }
    
}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click",evento=>buscarVideo(evento))