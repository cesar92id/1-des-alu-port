

var nombre = document.querySelector("#nombre-apellido");
nombre.addEventListener("keyup", function (evento) {


    if (nombreError.vacio == false) {

        if (validarVacio(nombre.value)) {

            mostrarTextoErrorVacio("nombre-apellido", "error-nombreVacio");
            nombreError.vacio = true;

        }
    } else {

        if (validarEntrada(evento.key)){

            borrarElemento("error-nombreVacio");
            nombreError.vacio = false;
        }

    }

    if (nombreError.longitud == false) {

        if (validarLongitud(nombre.value, 50) == false) {

            mostrarTextoErrorLongitud("nombre-apellido", "error-nombreLongitud", 50);
            nombreError.longitud = true;
        }

    } else if (validarLongitud(nombre.value, 50)) {
        borrarElemento("error-nombreLongitud");
        nombreError.longitud = false;

    }

    if ((nombreError.longitud == false) && (nombreError.vacio == false)) {

        nombreError.estado = true;

    } else {

        nombreError.estado = false;
    }



    verificarEstado();
})