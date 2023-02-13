const storedEmail = "jorgeo.1225@gmail.com";
const storedPassword = "123";

localStorage.setItem(storedEmail, storedPassword);

function enviar() {
  const email = document.getElementById("emailid");
  const password = document.getElementById("passwordid");

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "El email no puede estar en blanco");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "El email no es válido");
  } else if (emailValue !== storedEmail) {
    setErrorFor(email, "El email ingresado no coincide con el registrado");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "La contraseña no puede estar en blanco");
  } else if (!passwordCheck(passwordValue)) {
    setErrorFor(
      password,
      "La contraseña debe tener mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número"
    );
  } else if (passwordValue !== storedPassword) {
    setErrorFor(password, "La contraseña ingresada no coincide con la registrada");
  } else {
    setSuccessFor(password);
  }

  if (emailValue === storedEmail && passwordValue === storedPassword) {
    location.href = "inicio.html";
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-container error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
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

/*
function checkInputs() {
  const emailValue = email.value;
  const passwordValue = password.value;

  if (emailValue === "") {
    setErrorFor(email, "El email no puede estar en blanco");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "El email no es válido");
  } else {
    setSuccesFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "La contraseña no puede estar en blanco");
  } else if (!passwordCheck(passwordValue)) {
    setErrorFor(
      password,
      "La contraseña debe tener mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número"
    );
  } else {
    setSuccesFor(password);
  }

}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});


function setErrorFor(input, message) {
  const formControl = input.parentElement; //form-container
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-container error";
}

function setSuccesFor(input) {
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

function saveData() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  saveBtn();
}

saveData();
*/