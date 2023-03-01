const form = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const saveInfoBtn = document.getElementById("saveBtn");

//Guardando datos en el localtorage
const storedEmail = "jorge@gmail.com";
const storedPassword = "holaMundo1";

localStorage.setItem(storedEmail, storedPassword);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// Agregar controladores de eventos para los campos de entrada de correo electrónico y contraseña
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);

function validateForm() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue !== "" && passwordValue !== "") {
    saveInfoBtn.removeAttribute("disabled");
  } else {
    saveInfoBtn.setAttribute("disabled", "");
  }
}

function checkInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === storedEmail && passwordValue === storedPassword) {
    setSuccesFor(email);
    setSuccesFor(password);
    location.href = "../index.html";

  } else {
    if (emailValue === "") {
      setErrorFor(email, "El email no puede estar en blanco");
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, "El email no es válido");
    } else {
      setErrorFor(email, "");
    }

    if (passwordValue === "") {
      setErrorFor(password, "La contraseña no puede estar en blanco");
    } else {
      setErrorFor(
        password,
        "El email del usuario o la contraseña no son correctos"
      );
    }
  }
}

//Mostrar Error
function setErrorFor(input, message) {
  const formControl = input.parentElement; //form-container
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-container error";
}

//Mostrar valides
function setSuccesFor(input) {
  const formControl = input.parentElement; //form-container
  formControl.className = "form-container success";
}

//Validación de Expresión regular Email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function saveData() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
}

saveData();