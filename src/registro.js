const form = document.getElementById("form");
const name = document.getElementById("name");
const lastName = document.getElementById('lastName');
const phone = document.getElementById("phone-num");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("check-password");
const saveInfoBtn = document.getElementById("saveBtn");
const checkbox = document.getElementById("check");

const EMPTY_NAME_MSG = "El nombre no puede estar en blanco";
const EMPTY_LASTNAME_MSG = "Los apellidos no pueden estar en blanco"
const EMPTY_EMAIL_MSG = "El email no puede estar en blanco";
const INVALID_EMAIL_MSG = "El email no es válido";
const EMPTY_PASSWORD_MSG = "La contraseña no puede estar en blanco";
const INVALID_PASSWORD_MSG =
  "La contraseña debe tener mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número";
const EMPTY_PHONE_MSG = "El número de teléfono no puede estar en blanco";
const INVALID_PHONE_MSG = "Ups, parece que no es un número válido";
const PASSWORDMISMATCH_MSG = "Las contraseñas no coinciden";

name.addEventListener("input", checkInputs);
console.log(name)
lastName.addEventListener("input", checkInputs);
phone.addEventListener("input", checkInputs);
email.addEventListener("input", checkInputs);
password.addEventListener("input", checkInputs);
password2.addEventListener("input", checkInputs);
checkbox.addEventListener("change", checkInputs);

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que se refresque la página cuando se envía el formulario

  checkInputs(); // Ejecuta la función que valida los inputs

  const nameValue = name.value.trim();
  const lastnameValue = lastName.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Verifica que todos los campos estén completos
  if (nameValue === "" || lastnameValue === "" || phoneValue === "" || emailValue === "" || passwordValue === "") {
    alert("Por favor, complete todos los campos");
    return;
  }

  // Crea un objeto con los datos a enviar al servidor
  const data = {
    nombre: nameValue,
    apellido: lastnameValue,
    contrasenia: passwordValue,
    email: emailValue,
    telefono: phoneValue
  };

  // Convierte el objeto a JSON para poder enviarlo en la solicitud
  const datosJSON = JSON.stringify(data);

  fetch("https://sabor-amor.up.railway.app/api/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: datosJSON,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});


function checkInputs() {
  const nameValue = name.value.trim();
  const lastnameValue = lastName.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  let isNameValid = false;
  let isLastNameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;
  let isPassword2Valid = false;
  let isPhoneValid = false;

  if (nameValue === "") {
    setErrorFor(name, EMPTY_NAME_MSG);
  } else {
    isNameValid = true;
    setSuccessFor(name);
  }

  if (lastnameValue === "") {
    setErrorFor(lastName, EMPTY_LASTNAME_MSG);
  } else {
    isLastNameValid = true;
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, EMPTY_EMAIL_MSG);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, INVALID_EMAIL_MSG);
  } else {
    isEmailValid = true;
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, EMPTY_PASSWORD_MSG);
  } else if (!isValidPassword(passwordValue)) {
    setErrorFor(password, INVALID_PASSWORD_MSG);
  } else {
    isPasswordValid = true;
    setSuccessFor(password);
  }

  if (password2Value === "" && !passwordCheck(passwordValue)) {
    setErrorFor(password2, EMPTY_PASSWORD_MSG);
  } else if (!passwordCheck(password2Value)) {
    setErrorFor(password2, INVALID_PASSWORD_MSG);
  } else if (password2Value !== passwordValue) {
    setErrorFor(password2, PASSWORDMISMATCH_MSG);
  } else {
    isPassword2Valid = true;
    setSuccessFor(password2);
  }

  if (phoneValue === "") {
    setErrorFor(phone, EMPTY_PHONE_MSG);
  } else if (!validPhone(phoneValue)) {
    setErrorFor(phone, INVALID_PHONE_MSG);
  } else {
    isPhoneValid = true;
    setSuccessFor(phone);
  }

  if (
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isPassword2Valid &&
    isPhoneValid &&
    checkbox.checked
  ) {
    saveInfoBtn.disabled = false;
  }
}

function isValidPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //form-container
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-container error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement; //form-container
  formControl.className = "form-container success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function passwordCheck(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
}

function validPhone(phone) {
  return /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/.test(
    phone
  );
}

saveInfoBtn.addEventListener("click", saveData);

function saveData() {
  const nameValue = name.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  addUser(nameValue, phoneValue, emailValue, passwordValue);
  showMessage();
}

function showMessage() {
  setTimeout(() => {
    addMessage();
    setTimeout(() => {
      window.location.href="https://steady-longma-5c9fa1.netlify.app/html/login.html"
    }, 3000);
  }, 3000);
}


function addMessage() {
  Swal.fire({
    title: "Registrado con éxito",
    icon: "success",
    confirmButtonColor: "#b40414",
  });
}