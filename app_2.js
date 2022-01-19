var formulario = document.getElementById('formulario');
var inputs = document.querySelectorAll('#formulario input');

var expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{8,12}$/, // 8 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    edad: /^\d{2,4}$/, // 18 a 100 numero.
    ciudad: /^[a-zA-Z]{7,58}$/, // Letras.
    direccion: /^[a-zA-Z0-4000\s]{5,30}$/, // Letras.
    codigo_postal: /^\d{5,6}$/, // 4 a 5 numeros.
    dni: /^[0-50000000]{7,8}$/, // 7 a 8 digitos.
}

var campos = {
    nombre: false,
    correo: false,
    password: false,
    edad: false,
    telefono: false,
    ciudad: false,
    direccion: false,
    codigo_postal: false,
    dni: false
}

var validarformulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarpassword2()
        break;
        case "password2":
            validarpassword2()
        break;
        case "edad":
            validarCampo(expresiones.edad, e.target, 'edad');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case "ciudad":
            validarCampo(expresiones.ciudad, e.target, 'ciudad');
        break;
        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion');
        break;
        case "codigo_postal":
            validarCampo(expresiones.codigo_postal, e.target, 'codigo_postal');
        break;
        case "dni":
            validarCampo(expresiones.dni, e.target, 'dni');
        break;
    }
}

var validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

        campos[campo] = true;
    }else {
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');

        campos[campo] = false;
    }
}

var validarpassword2 = () => {
    var inputpassword1 = document.getElementById('password');
    var inputpassword2 = document.getElementById('password2');

    if(inputpassword1.value !== inputpassword2.value) {
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[password] = false;
    }else {
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[password] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarformulario)
    input.addEventListener('blur', validarformulario)
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.nombre == campos.correo == campos.password == campos.edad == campos.telefono == campos.ciudad == campos.direccion == campos.codigo_postal == campos.dni) {
         formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
    }
})