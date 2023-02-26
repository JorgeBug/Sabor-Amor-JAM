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
        input.nextElementSibling.innerText = 'Este campo es obligatorio';
        input.style.borderColor = 'red';
        return false;
    }
    if (!regex.test(input.value.trim())) {
        input.nextElementSibling.innerText = 'Ingrese un valor válido';
        input.style.borderColor = 'red';
        return false;
    }
    input.nextElementSibling.innerText = '';
    input.style.borderColor = 'green';
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

