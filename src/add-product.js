// seleccionar elementos del formulario
const form = document.getElementById('myForm');
const category = document.getElementById('category');
const nameInput = document.getElementById('name');
const description = document.getElementById('description');
const price = document.getElementById('price');
const season = document.getElementById('season');
//const comment = document.getElementById('comment');
const enviarBtn = document.getElementById('enviar');

// verificar campos al enviar formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkAllInputs();
});

// expresiones regulares para validar campos
const selectRegex = /^.+$/;
const nameRegex = /^.{5,}[a-zA-Z\s]+$/;
const descriptionRegex = /^.{10,}$/;
const priceRegex = /^\d+(\.\d{1,2})?$/;


// validar campos en tiempo real
category.addEventListener('input', () => {
    validateInput(category, selectRegex);
    checkAllInputs();
});
nameInput.addEventListener('input', () => {
    validateInput(nameInput, nameRegex);
    checkAllInputs();
});
description.addEventListener('input', () => {
    validateInput(description, descriptionRegex);
    checkAllInputs();
});
price.addEventListener('input', () => {
    validateInput(price, priceRegex);
    checkAllInputs();
});
season.addEventListener('input', () => {
    validateInput(season, selectRegex);
    checkAllInputs();
});
/* comment.addEventListener('input', () => {
    validateInput(comment, /.+/);
    checkAllInputs();
}); */

// función para validar campo y mostrar mensaje de error
function validateInput(input, regex) {
    if (input.value.trim() === '') {
        setErrorForInput(input, "Es obligatorio completar el campo");
       // input.nextElementSibling.innerText = 'Este campo es obligatorio';
        //input.style.border = '2px solid #e74c3c';
        return false;
    }
    if (!regex.test(input.value.trim())) {
        setErrorForInput(input, "Ingrese un valor válido");
        //input.nextElementSibling.innerText = 'Ingrese un valor válido';
        //input.style.border = '2px solid #e74c3c';
        return false;
    }
    setSuccesFor(input);
    //input.nextElementSibling.innerText = '';
    //input.style.border = '4px solid #2eec71';
    return true;
}

// Verificar si todos los campos están llenados correctamente
function checkAllInputs() {
    if (validateInput(category, selectRegex) &&
        validateInput(nameInput, nameRegex) &&
        validateInput(description, descriptionRegex) &&
        validateInput(price, priceRegex) &&
        validateInput(season, selectRegex)
    /* && validateInput(comment, /.+/) */) {
        enviarBtn.disabled = false;
    } else {
        enviarBtn.disabled = true;
    }
}

//Muestra el mensaje de Error
function setErrorForInput(input, message) {
    input.style.border = '3px solid #e74c3c'
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.classList.add('error');

    if(input === messagec){
        formControl.classList.add("error");
    }
}

//Muestra el mensaje de Correcto
function setSuccesFor(input){
    input.style.border = '3px solid #2eec71';
    const formControl = input.parentElement;
    formControl.classList.add('success');

    const small = formControl.querySelector("small");
    small.innerText = "";
    formControl.classList.remove('error');
}

