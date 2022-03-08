
// Title

function myfuction() {
        document.getElementById('title_').style.display = "none";
        document.querySelector('.formulario__input-error').classList.remove('formulario__input-error-activo');
        document.getElementById('nombre').style.border = "4px solid lightgray";
}

var titulo=document.getElementById('nombre');

function recuperacion(elem){
    //Obtenemos el valor del input
    var titulo=elem.value; 
  
    //Aplicamos el valor de la variable titulo
    document.getElementById('title_').innerHTML=titulo;
    document.getElementById('saludo_').classList.add('saludo__-activo');
    document.getElementById('title_').style.display = "flex";
  }

// focus
function correccion() {
  document.querySelector('.formulario__input-email-error').classList.remove('formulario__input-email-error-activo');
  document.getElementById('correo').style.border = "4px solid lightgray";
}

function correccion2() {
  document.querySelector('.formulario__input-password-error').classList.remove('formulario__input-password-error-activo');
  document.getElementById('password').style.border = "4px solid lightgray";
}

function correccion3() {
  document.querySelector('.formulario__input-password2-error').classList.remove('formulario__input-password2-error-activo');
  document.getElementById('password2').style.border = "4px solid lightgray";
}
function correccion4() {
  document.querySelector('.formulario__input-edad-error').classList.remove('formulario__input-edad-error-activo');
  document.getElementById('edad').style.border = "4px solid lightgray";
}
function correccion5() {
  document.querySelector('.formulario__input-telefono-error').classList.remove('formulario__input-telefono-error-activo');
  document.getElementById('telefono').style.border = "4px solid lightgray";
}
function correccion6() {
  document.querySelector('.formulario__input-ciudad-error').classList.remove('formulario__input-ciudad-error-activo');
  document.getElementById('ciudad').style.border = "4px solid lightgray";
}
function correccion7() {
  document.querySelector('.formulario__input-direccion-error').classList.remove('formulario__input-direccion-error-activo');
  document.getElementById('direccion').style.border = "4px solid lightgray";
}
function correccion8() {
  document.querySelector('.formulario__input-codigo_postal-error').classList.remove('formulario__input-codigo_postal-error-activo');
  document.getElementById('codigo-postal').style.border = "4px solid lightgray";
}
function correccion9() {
  document.querySelector('.formulario__input-dni-error').classList.remove('formulario__input-dni-error-activo');
  document.getElementById('DNI').style.border = "4px solid lightgray";
}

// blur

function verificacion() {
  verificarNombre();
}

function verificacion1() {
  verificarCorreo();
}

function verificacion2() {
  verificarPassword();
}
function verificacion3() {
  verificarPassword2();
}
function verificacion4() {
  verificarEdad();
}
function verificacion5() {
  verificarTelefono();
}
function verificacion6() {
  verificarCiudad();
}
function verificacion7() {
  verificarDireccion();
}
function verificacion8() {
  verificarCodigo();
}

function verificacion9() {
  verificarDni();
}


//  Inputs
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
// nombres

  function verificarNombre() {
    const nombre = document.getElementById('nombre').value;
    
    const abc = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];    

    var contadorLetra3 = 0;

    var contadorNumero3 = 0;

    for (let i = 0; i < nombre.length; i++) {
      if (abc.includes(nombre[i].toLocaleLowerCase())) {
          contadorLetra3++;
      } else {
          Number.isInteger(nombre[i]);
          contadorNumero3++;
      }
  }

    if(contadorLetra3 <= 0 && contadorNumero3 >= 0 || contadorNumero3 <= 0 || nombre.indexOf(" ") > nombre.length-3) {
      document.querySelector('.formulario__input-error').classList.add('formulario__input-error-activo');
      document.getElementById('nombre').style.border = "4px solid red";
      a = false;
    }else{
      document.querySelector('.formulario__input-error').classList.remove('formulario__input-error-activo');
      document.getElementById('nombre').style.border = "4px solid lime";
      a = true;
      }
    
  }

  //correo

  function verificarCorreo() {
    const mail = document.getElementById('correo').value;

    if( mail.indexOf(" ") > 1 || mail <= 0){
      document.querySelector('.formulario__input-email-error').classList.add('formulario__input-email-error-activo');
      document.getElementById('correo').style.border = "4px solid red";
      b = false;
    }else {
      document.querySelector('.formulario__input-email-error').classList.remove('formulario__input-email-error-activo');
      document.getElementById('correo').style.border = "4px solid lime";
      b = true;
    }
  }

  //Password

  function verificarPassword() {
    
    const abc = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

    const password = document.getElementById('password').value;

    var contadorLetra = 0;

    var contadorNumero = 0;

    for (let i = 0; i < password.length; i++) {
      if (abc.includes(password[i].toLocaleLowerCase())) {
          contadorLetra++;
      } else {
          Number.isInteger(password[i]);
          contadorNumero++;
      }
  }

    if(contadorLetra <= 0 || contadorNumero <= 0 || password.indexOf(" ") > -1) {
      document.querySelector('.formulario__input-password-error').classList.add('formulario__input-password-error-activo');
      document.getElementById('password').style.border = "4px solid red"; 
      c = false;
    }else{
      document.querySelector('.formulario__input-password-error').classList.remove('formulario__input-password-error-activo');
      document.getElementById('password').style.border = "4px solid lime";
      c = true;
      }
  }

  //password2
  
  function verificarPassword2() {
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    
    if(password != password2 || password2.indexOf(" ") == password2.length-1) {
      document.querySelector('.formulario__input-password2-error').classList.add('formulario__input-password2-error-activo');
      document.getElementById('password2').style.border = "4px solid red";
      d = false;
    }else{
      document.querySelector('.formulario__input-password2-error').classList.remove('formulario__input-password2-error-activo');
      document.getElementById('password2').style.border = "4px solid lime";
      d = true;
    }
  }

  //Edad

  function verificarEdad() {
    const edad = document.getElementById('edad').value;

    if(edad.indexOf(" ") == edad.length-1 || edad.indexOf(" ") == edad.length-3){
      document.querySelector('.formulario__input-edad-error').classList.add('formulario__input-edad-error-activo');
      document.getElementById('edad').style.border = "4px solid red";
      e = false;
    }else {
      document.querySelector('.formulario__input-edad-error').classList.remove('formulario__input-edad-error-activo');
      document.getElementById('edad').style.border = "4px solid lime";
      e = true;
    }

    if(edad < 18 || edad >= 140) {
      document.querySelector('.formulario__input-edad-error').classList.add('formulario__input-edad-error-activo');
      document.getElementById('edad').style.border = "4px solid red";
      e = false;
    }else{
      document.querySelector('.formulario__input-edad-error').classList.remove('formulario__input-edad-error-activo');
      document.getElementById('edad').style.border = "4px solid lime";
      e = true;
    }
  }

  //Telefono

  function verificarTelefono() {
    const telefono = document.getElementById('telefono').value;

    if(telefono.length < 7 || telefono < 0) {
      document.querySelector('.formulario__input-telefono-error').classList.add('formulario__input-telefono-error-activo');
      document.getElementById('telefono').style.border = "4px solid red";
      f = false;
    }else {
      document.querySelector('.formulario__input-telefono-error').classList.remove('formulario__input-telefono-error-activo');
      document.getElementById('telefono').style.border = "4px solid lime";
      f = true;
    }
  }

  //Ciudad

  function verificarCiudad() {
    const ciudad = document.getElementById('ciudad').value;
    
    if(ciudad.indexOf(" ") < 1 || ciudad <= 0 || ciudad >= 0 || ciudad.length < 3) {
      document.querySelector('.formulario__input-ciudad-error').classList.add('formulario__input-ciudad-error-activo');
      document.getElementById('ciudad').style.border = "4px solid red";
      g = false;
    }else {
      document.querySelector('.formulario__input-ciudad-error').classList.remove('formulario__input-ciudad-error-activo');
      document.getElementById('ciudad').style.border = "4px solid lime";
      g = true;
    }
 }

  //Direccion

  function verificarDireccion() {
    
    const abecedario = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

    const direccion = document.getElementById('direccion').value;

    var contadorLetras2 = 0;

    var contadorNumero2 = 0;

    for (let i = 0; i < direccion.length; i++) {
      if (abecedario.includes(direccion[i].toLocaleLowerCase())) {
          contadorLetras2++;
      } else {
          Number.isInteger(direccion[i]);
          contadorNumero2++;
      }
  }

    if(contadorLetras2 <= 0 || contadorNumero2 < 3 || contadorNumero2 > 6 || direccion.indexOf(" ") < 1 || direccion.length < 5) {
      document.querySelector('.formulario__input-direccion-error').classList.add('formulario__input-direccion-error-activo');
      document.getElementById('direccion').style.border = "4px solid red"; 
      h = false;
    }else{
      document.querySelector('.formulario__input-direccion-error').classList.remove('formulario__input-direccion-error-activo');
      document.getElementById('direccion').style.border = "4px solid lime";
      h = true;
      }
  }

  //Codigo postal

  function verificarCodigo() {
    const codigo_postal = document.getElementById('codigo-postal').value;

    if(codigo_postal.indexOf(" ") == codigo_postal.length-1 || codigo_postal.indexOf(" ") == codigo_postal.length-4 || codigo_postal <= 0) {
      document.querySelector('.formulario__input-codigo_postal-error').classList.add('formulario__input-codigo_postal-error-activo');
      document.getElementById('codigo-postal').style.border = "4px solid red";
      i = false;
    }else{
      document.querySelector('.formulario__input-codigo_postal-error').classList.remove('formulario__input-codigo_postal-error-activo');
      document.getElementById('codigo-postal').style.border = "4px solid lime";
      i = true;
    }
    if(codigo_postal.length < 3) {
      document.querySelector('.formulario__input-codigo_postal-error').classList.add('formulario__input-codigo_postal-error-activo');
      document.getElementById('codigo-postal').style.border = "4px solid red";
      i = false;
    }else{
      document.querySelector('.formulario__input-codigo_postal-error').classList.remove('formulario__input-codigo_postal-error-activo');
      document.getElementById('codigo-postal').style.border = "4px solid lime";
      i = true;
    }
  }

  //DNI

  function verificarDni() {
    const dni = document.getElementById('DNI').value;

    if (dni.indexOf(" ")  == dni.length-1 && dni <= 0 || dni.length < 7 || dni.length > 8){
      document.querySelector('.formulario__input-dni-error').classList.add('formulario__input-dni-error-activo');
      document.getElementById('DNI').style.border = "4px solid red";
      j = false;
    }else {
      document.querySelector('.formulario__input-dni-error').classList.remove('formulario__input-dni-error-activo');
      document.getElementById('DNI').style.border = "4px solid lime";
      j = true;
    }
  }




function handleOnSubmit() {

    //Nombre

    const nombre = document.getElementById('nombre').value;
    verificarNombre(nombre);
    console.log("nombre", nombre);

    //Correo-electronico

    const correo = document.getElementById('correo').value;
    verificarCorreo(correo)
    console.log("correo", correo);

    //Password

    const password = document.getElementById('password').value;
    verificarPassword(password);
    console.log("password", password);

    //Password2

    const password2 = document.getElementById('password2').value;
    verificarPassword2(password2);
    console.log("password2", password2);

    //Edad

    const edad = document.getElementById('edad').value;
    verificarEdad(edad);
    console.log("edad", edad);

    //Telefono

    const telefono = document.getElementById('telefono').value;
    verificarTelefono(telefono);
    console.log("telefono", telefono);

    //Ciudad 

    const ciudad = document.getElementById('ciudad').value;
    verificarCiudad(ciudad);
    console.log("ciudad", ciudad);

    //Direccion

    const direccion = document.getElementById('direccion').value;
    verificarDireccion(direccion)
    console.log("direccion", direccion);

    //Codigo postal

    const codigo_postal = document.getElementById('codigo-postal').value;
    verificarCodigo(codigo_postal);
    console.log("codigo_postal", codigo_postal);

    //DNI

    const dni = document.getElementById('DNI').value;
    verificarDni(dni);
    console.log("DNI", dni);

    // validar todos los inputs

}

window.onload = function () {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        if(a && b && c && d && e && f && g && h && i && j == true) {
              document.querySelector('.formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
              document.querySelector('.formulario__mensaje').classList.remove('formulario__mensaje-activo');
              document.getElementById('form').reset();
            }else {
              document.querySelector('.formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
              document.querySelector('.formulario__mensaje').classList.add('formulario__mensaje-activo');
            }
    })
}