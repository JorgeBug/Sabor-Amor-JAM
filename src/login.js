const form = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const saveInfoBtn = document.getElementById("saveBtn").addEventListener("click", saveData);



form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

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

  if(document.querySelectorAll(".error").length == 0){
    location.href = "/index.html";
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

function saveData() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
}

saveData();