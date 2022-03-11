var horaActual = new Date();

var hora = horaActual.getHours() + ':' + horaActual.getMinutes() + ':' + horaActual.getSeconds();

function showTime() {
    document.open();
    document.write("<h1>Quita el contenido viejo - Agrega el contenido nuevo!</h1>");
    document.close();
    console.log(hora)
}