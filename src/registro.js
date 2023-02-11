const form = document.getElementById("form");
const username = document.getElementById("name");
const phone = document.getElementById("phone-num");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("check-password");
const saveInfoBtn = document.getElementById("saveBtn").addEventListener("click", saveData);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nameValue = username.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (nameValue === "") {
    setErrorFor(username, "El nombre no puede estar en blanco");
  } else {
    setSuccesFor(username);
  }

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

  if (password2Value === "" && !passwordCheck(passwordValue)) {
    setErrorFor(password2, "La contraseña no puede estar en blanco");
  } else if (!passwordCheck(password2Value)) {
    setErrorFor(
      password2,
      "La contraseña debe tener mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número"
    );
  } else if (password2Value !== passwordValue) {
    setErrorFor(password2, "Las contraseñas no coinciden");
  } else {
    setSuccesFor(password2);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "El número de telefono no puede estar en blanco");
  } else if (!validPhone(phoneValue)) {
    setErrorFor(phone, "Ups, parece que no es un número válido");
  } else {
    setSuccesFor(phone);
  }
}

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

function validPhone(phone) {
  return /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/.test(
    phone
  );
}

function saveData() {
  const nameValue = username.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  addUser(nameValue, phoneValue, emailValue, passwordValue);
}

saveData();