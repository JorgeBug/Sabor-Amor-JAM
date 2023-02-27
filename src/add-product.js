// seleccionar elementos del formulario
const form = document.getElementById('myForm');
const category = document.getElementById('category');
const nameInput = document.getElementById('name');
const description = document.getElementById('description');
const price = document.getElementById('price');
const season = document.getElementById('season');
const image = document.getElementById('image');
const enviarBtn = document.getElementById('enviar');

// verificar campos al enviar formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    storeProduct(); //Llamada a la función para guardar en el localStorage
});

// expresiones regulares para validar campos
const selectRegex = /^.+$/;
const nameRegex = /^.{5,}[a-zA-Z\s]+$/;
const descriptionRegex = /^.{10,}$/;
const priceRegex = /^\d+(\.\d{1,2})?$/;
const regImgUrl= /^https:\/\/res\.cloudinary\.com\/.*$/;

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
image.addEventListener('input', () => {
    validateInput(image, regImgUrl);
    checkAllInputs();
});

// función para validar campo y mostrar mensaje de error
function validateInput(input, regex) {
    if (input.value.trim() === '') {
        setErrorForInput(input, "Es obligatorio completar el campo");
        return false;
    }
    if (!regex.test(input.value.trim())) {
        setErrorForInput(input, "Ingrese un valor válido");
        return false;
    }
    setSuccesFor(input);
    return true;
}

// Verificar si todos los campos están llenados correctamente
function checkAllInputs() {
    if (validateInput(category, selectRegex) &&
        validateInput(nameInput, nameRegex) &&
        validateInput(description, descriptionRegex) &&
        validateInput(price, priceRegex) &&
        validateInput(season, selectRegex) && 
        validateInput(image, regImgUrl)) {
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
}

//Muestra el mensaje de Correcto
function setSuccesFor(input) {
    input.style.border = '3px solid #2eec71';
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = "";

    formControl.classList.remove('error');
}

// crear objeto en localStorage para almacenar productos
if (!localStorage.getItem('products')) {
    const products = { salsas: [], mermeladas: [] };
    localStorage.setItem('products', JSON.stringify(products));
}

// función para almacenar producto en localStorage
function storeProduct() {
    const products = JSON.parse(localStorage.getItem('products'));
    const newProduct = {
        name: nameInput.value.trim(),
        description: description.value.trim(),
        price: price.value.trim(),
        season: season.value,
        imageURL: image.value
    };

    if (category.value === 'salsa') {
        products.salsas.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
    } else if (category.value === 'mermelada') {
        products.mermeladas.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
    }
    checkAllInputs();
    form.reset();
    location.reload();

    alert('Producto agregado!');
}