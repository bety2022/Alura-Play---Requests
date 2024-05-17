async function mostrarVideos(){
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });

    const conexionConvertida=await conexion.json();
    /* console.log(conexion);
    console.log(conexionConvertida); */
    return conexionConvertida;
}

async function crearVideo(titulo,descripcion,url,imagen){
    const conexion= await fetch("http://localhost:3001/videos",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({
        titulo:titulo,
        descripcion:`${descripcion} mil visualizaciones`,
        url:url,
        imagen:imagen
    })
    })
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function buscarVideo(palabraClave){
    const conexion=await fetch(`http://localhost:3001/videos?q=${palabraClave}`)
    const conexionConvertida=conexion.json();
    return conexionConvertida;
}

export const conexionAPI={
    mostrarVideos,crearVideo,buscarVideo
}

//mostrarVideos();