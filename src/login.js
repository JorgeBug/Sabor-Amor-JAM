const form = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const saveInfoBtn = document.getElementById("saveBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();

  // Obtener los valores de los campos de entrada
  const emailValue = email.value;
  const passwordValue = password.value;

  // Realizar la solicitud GET
  fetch(`https://sabor-amor.up.railway.app/api/usuarios/email/${emailValue}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      setErrorFor(email, 'Usuario no registrado');
      throw new Error('Error al obtener el usuario');
    }
  })
  .then(data => {
    console.log(data.nombre);
    if (data && data.contrasenia === passwordValue) {
      // Si la contraseña coincide, permitir el acceso
      setSuccesFor(email);
      setSuccesFor(password);
      showMessage(data.nombre);
      
    } else {
      // Si la contraseña no coincide, mostrar un mensaje de error
      setErrorFor(password, "La contraseña no es válida");
    }
  })
  .catch(error => {
    // Si hay algún error al realizar la solicitud GET, mostrar un mensaje de error
    setErrorFor(email, "Ups, parece que no está registrado");
    setErrorFor(password, "");
  });
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
  } else {
    setSuccesFor(password);
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

function showMessage(user) {
  setTimeout(() => {
    addMessage(user);
    setTimeout(() => {
      window.location.href = "https://steady-longma-5c9fa1.netlify.app/";
    }, 3000);
  }, 3000);
}


function addMessage(user) {
  Swal.fire({
    title: "Bienvenido de vuelta" + " " + user,
    icon: "success",
    confirmButtonColor: "#b40414",
  });
}