const form = document.getElementById("formularioid");
const fname = document.getElementById("fnameid");
const lastName = document.getElementById("lnameid");
const email = document.getElementById("emailid");
const phone = document.getElementById("phoneid");
const messagec = document.getElementById("messageid");
const saveInfoBtn = document.getElementById("saveBtn");

fname.addEventListener("input", checkInputs);
lastName.addEventListener("input", checkInputs);
email.addEventListener("input", checkInputs);
phone.addEventListener("input", checkInputs);
messagec.addEventListener("input", checkInputs);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  showMessage();
});


function showMessage() {
  setTimeout(() => {
    addMessage();
    setTimeout(() => {
      location.reload();
    }, 3000);
  }, 3000);
}


function addMessage() {
  Swal.fire({
    title: "Enviado correctamente",
    icon: "success",
    confirmButtonColor: "#b40414",
  });
}

function checkInputs() {
  const fnameContact = fname.value.trim();
  const lnameContact = lastName.value.trim();
  const emailContact = email.value.trim();
  const phoneContact = phone.value.trim();
  const messageContact = messagec.value.trim();
  //let isValid = true; //verifica que los campos sean válidos
  
  let isNameValid = false;
  let islnameValid = false;
  let isEmailValid = false;
  let isPhoneValid = false;
  let isMessageValid = false;
  
  //validación Name
  if (fnameContact === "") {
    setErrorForInput(fname, "Es obligatorio completar el campo");
  } else {
    setSuccesFor(fname);
    isNameValid = true;
  }

  //Validación Last Name
  if (lnameContact === "") {
    setErrorForInput(lastName, "Es obligatorio completar el campo");
  } else {
    setSuccesFor(lastName);
    islnameValid = true;
  }

  //Validación Email
  if (emailContact === "") {
    setErrorForInput(email, "Es obligatorio completar el campo");
  } else if (!isEmail(emailContact)) {
    setErrorForInput(email, "El email no es válido");
  } else {
    setSuccesFor(email);
    isEmailValid = true;
  }

  //Validación Teléfono
  if (phoneContact === "") {
    setErrorForInput(phone, "Es obligatorio completar el campo");
  } else if (!validPhone(phoneContact)) {
    setErrorForInput(phone, "El teléfono no es valido");
  } else {
    setSuccesFor(phone);
    isPhoneValid = true;
  }

  //Validación Mensaje
  if (messageContact === "") {
    setErrorForInput(messagec, "Es obligatorio completar el campo");
  } else {
    setSuccesFor(messagec);
    isMessageValid = true;
  }

  if (
    isNameValid &&
    islnameValid &&
    isEmailValid &&
    isPhoneValid &&
    isMessageValid &&
    checkbox.checked
  ) {
    saveInfoBtn.disabled = false;
  }
}




//Muestra el mensaje de Error
function setErrorForInput(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.classList.add("error");

  if (input === messagec) {
    formControl.classList.add("error");
  }
}

//Muestra el mensaje de Correcto
function setSuccesFor(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");

  const small = formControl.querySelector("small");
  small.innerText = "";
  formControl.classList.remove("error");
}

//Validaciones con Expresiones regulares
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//Validaciones con Expresiones regulares
function validPhone(phone) {
  return /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/.test(
    phone
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const small = document.querySelectorAll("small");
  small.forEach((element) => {
    element.innerText = "";
  });
});

saveInfoBtn.addEventListener("click", saveData);

function saveData() {
  const fnameContact = username.value.trim();
  const lnameContact = phone.value.trim();
  const emailContact = email.value.trim();
  const phoneContact = password.value.trim();
  const messageContact = password.value.trim();

  addUser(fnameContact, lnameContact, emailContact, phoneContact, messageContact);

  location.reload();
}
