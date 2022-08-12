
const btnGuardar = document.querySelector('#btnGuardar');
const btnLimpiar = document.querySelector('#btnLimpiar');
const formQuestion = document.querySelector('#formQuestion');


let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let direccion = document.getElementById('direccion');


const obtenerdatos = () => {

    let nameValue = nombre.value;
    let apellidoValue = apellido.value;
    let emailValue = email.value;
    let direccionValue = direccion.value;

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(nameValue === '' || apellidoValue === '' || emailValue === '' || direccionValue === '' || !emailRegex.test(emailValue)) {
        formQuestion.classList.add("was-validated");
    }else{
        formQuestion.classList.remove("was-validated");
        let persona = [nameValue, apellidoValue, emailValue, direccionValue];
        console.log(persona);
    }
}
    

 // eventos

btnGuardar.addEventListener('click', () => obtenerdatos());
btnLimpiar.addEventListener('click', () => formQuestion.reset());