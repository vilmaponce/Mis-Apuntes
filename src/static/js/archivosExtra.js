
function uploadPDF() {
    const pdfFile = document.getElementById("pdfUpload").files[0];
    if (pdfFile) {
        const pdfContainer = document.getElementById("pdfContainer");
        const fileURL = URL.createObjectURL(pdfFile);

        // Crear un nuevo contenedor para cada PDF subido
        const pdfDiv = document.createElement("div");
        pdfDiv.classList.add("pdf-item");

        // Insertar el PDF en el contenedor
        pdfDiv.innerHTML = `<embed src="${fileURL}" type="application/pdf" width="100%" height="600px">`;

        // Agregar el nuevo contenedor al contenedor principal
        pdfContainer.appendChild(pdfDiv);
    } else {
        alert("Por favor, selecciona un archivo PDF");
    }
}

function openPDF(pdfPath) {
    // Abre el PDF en una nueva pestaña
    window.open(pdfPath, '_blank');
}

function openPDF(pdfPath) {
    // Abre el PDF en una nueva pestaña
    window.open(pdfPath, '_blank');
}