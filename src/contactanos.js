const form = document.getElementById("formularioid");
const fname = document.getElementById("fnameid");
const lastName = document.getElementById("lnameid");
const email = document.getElementById("emailid");
const phone = document.getElementById("phoneid");
const messagec = document.getElementById("messageid");

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
  let isValid = true; //verifica que los campos sean válidos

  //validación Name
  if (fnameContact === "") {
    setErrorForInput(fname, "Es obligatorio completar el campo");
    isValid = false;
  } else {
    setSuccesFor(fname);
  }

  //Validación Last Name
  if (lnameContact === "") {
    setErrorForInput(lastName, "Es obligatorio completar el campo");
    isValid = false;
  } else {
    setSuccesFor(lastName);
  }

  //Validación Email
  if (emailContact === "") {
    setErrorForInput(email, "Es obligatorio completar el campo");
    isValid = false;
  } else if (!isEmail(emailContact)) {
    setErrorForInput(email, "El email no es válido");
    isValid = false;
  } else {
    setSuccesFor(email);
  }

  //Validación Teléfono
  if (phoneContact === "") {
    setErrorForInput(phone, "Es obligatorio completar el campo");
    isValid = false;
  } else if (!validPhone(phoneContact)) {
    setErrorForInput(phone, "El teléfono no es valido");
    isValid = false;
  } else {
    setSuccesFor(phone);
  }

  //Validación Mensaje
  if (messageContact === "") {
    setErrorForInput(messagec, "Es obligatorio completar el campo");
    isValid = false;
  } else {
    setSuccesFor(messagec);
  }

  if (isValid) {
    form.submit();
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


