const form = document.getElementById("form");
const username = document.getElementById("name");
const phone = document.getElementById("phone-num");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("check-password");
const saveInfoBtn = document.getElementById("saveBtn");
const checkbox = document.getElementById("check");

const EMPTY_NAME_MSG = "El nombre no puede estar en blanco";
const EMPTY_EMAIL_MSG = "El email no puede estar en blanco";
const INVALID_EMAIL_MSG = "El email no es válido";
const EMPTY_PASSWORD_MSG = "La contraseña no puede estar en blanco";
const INVALID_PASSWORD_MSG =
  "La contraseña debe tener mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número";
const EMPTY_PHONE_MSG = "El número de teléfono no puede estar en blanco";
const INVALID_PHONE_MSG = "Ups, parece que no es un número válido";
const PASSWORDMISMATCH_MSG = "Las contraseñas no coinciden";

username.addEventListener("input", checkInputs);
phone.addEventListener("input", checkInputs);
email.addEventListener("input", checkInputs);
password.addEventListener("input", checkInputs);
password2.addEventListener("input", checkInputs);
checkbox.addEventListener("change", checkInputs);

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

  let isNameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;
  let isPassword2Valid = false;
  let isPhoneValid = false;

  if (nameValue === "") {
    setErrorFor(username, EMPTY_NAME_MSG);
  } else {
    isNameValid = true;
    setSuccessFor(username);
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
  const nameValue = username.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  addUser(nameValue, phoneValue, emailValue, passwordValue);

  location.reload();
}
