// Importamos los datos
import videos from '../../../Datos/videos.js';
import resumenes from '../../../Datos/resumenes.js';

// Obtener el contenedor donde se van a mostrar las clases
const contenedorClases = document.getElementById("contenedor-clases");

// Recorrer el array de videos
videos.forEach(video => {
    // Buscar el resumen correspondiente
    const resumenClase = resumenes.find(resumen => resumen.numero === video.numero);

    // Crear un div para cada clase
    const divClase = document.createElement("div");
    divClase.classList.add("clase");

    // Crear un título con el número de la clase
    const titulo = document.createElement("h2");
    titulo.textContent = video.numero;

    // Crear un iframe para mostrar el video
    const iframe = document.createElement("iframe");
    iframe.src = video.video;
    iframe.classList.add("video");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    iframe.setAttribute("allowfullscreen", true);

    // Crear un párrafo para el resumen
    const resumen = document.createElement("p");
    resumen.textContent = resumenClase ? resumenClase.resumen : "No hay resumen disponible.";

    // Crear un párrafo para los detalles
    const detalle = document.createElement("p");
    detalle.textContent = resumenClase ? resumenClase.detalle : "No hay detalle disponible.";

    // Agregar el título, video, resumen y detalle al div de la clase
    divClase.appendChild(titulo);
    divClase.appendChild(iframe);
    divClase.appendChild(resumen); // Esta línea esté antes de detalle
    divClase.appendChild(detalle);

    // Agregar el div de la clase al contenedor
    contenedorClases.appendChild(divClase);
});

