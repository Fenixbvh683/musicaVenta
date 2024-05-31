document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    const mensajeError = document.getElementById('mensajeError');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        //console.log("Procesando formulario")
        
        const errores = [];

        // Validar el nombre
        const nombre = formulario["nombre"].value.trim();
        if (nombre === "") {
            errores.push("El campo Nombre es obligatorio.");
            
        }

        // Validar el apellido
        const apellido = formulario["apellido"].value.trim();
        
        if (apellido === "") {
            errores.push("El campo Apellido es obligatorio.");
            console.log (apellido);
            
        }

        // Validar el email
        const email = formulario["email"].value.trim();
        if (email === "") {
            errores.push("El campo Email es obligatorio.");
            
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errores.push("El campo Email debe ser una dirección de correo electrónico válida.");
            
        }

        // Validar la fecha de nacimiento
        const fecha_nac = formulario["fecha_nac"].value;
        if (fecha_nac === "") {
            errores.push("El campo Fecha de Nacimiento es obligatorio.");
           
        }

        // Validar la dirección
        const direccion = formulario["direccion"].value.trim();
        if (direccion === "") {
            errores.push("El campo Dirección es obligatorio.");
            
        }

        // Validar la forma de pago o cobro
        const pago_cobro = formulario["pago_cobro"].value;
        if (pago_cobro === "") {
            errores.push("El campo Forma de Pago o Cobro es obligatorio.");
            
        }

        // Validar el interés (radio button)
        const cliente = formulario["cliente"].value;
        if (cliente === "") {
            errores.push("Debe seleccionar un interés (Comprador o Vendedor).");
            
        }

        // Validar el género (al menos un checkbox seleccionado)
        const generos = formulario["genero"];
        let generoSeleccionado = false;
        for (let i = 0; i < generos.length; i++) {
            if (generos[i].checked) {
                generoSeleccionado = true;
                break;
            }
        }
        if (!generoSeleccionado) {
            errores.push("Debe seleccionar al menos un género.");
            
        }

        // Mostrar los errores y prevenir el envío del formulario si hay errores
        if (errores.length !== 0) {
            mensajeError.innerHTML = errores.join("<br>");
            return;
        } else {
            mensajeError.innerHTML = "";  // Limpiar el mensaje de error
            this.submit();
        }
    })});