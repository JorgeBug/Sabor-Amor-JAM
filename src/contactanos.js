const form = document.getElementById("formularioid");
const fname = document.getElementById("fnameid");
const lastName = document.getElementById("lnameid");
const email = document.getElementById("emailid");
const phone = document.getElementById("phoneid");
const messagec = document.getElementById("messageid");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const fnameContact = fname.value.trim();
    const lnameContact = lastName.value.trim();
    const emailContact = email.value.trim();
    const phoneContact = phone.value.trim();
    const messageContact = messagec.value.trim();
    let isValid = true; //verifica que los campos sean válidos

    //validación Name
    if(fnameContact === ""){
        setErrorForInput(fname,"El nombre no puede estar vacio");
        isValid = false;
    }else {
        setSuccesFor(fname);
    }

    //Validación Last Name
    if(lnameContact === "") {
        setErrorForInput(lastName, "El apellido no puede estar en blanco");
        isValid = false;
    }else {
        setSuccesFor(lastName);
    }

    //Validación Email
    if(emailContact === ""){
        setErrorForInput(email,"El email no puede estar en blanco");
        isValid = false;
    }else if(!isEmail(emailContact)){
        setErrorForInput(email, "El email no es válido");
        isValid = false;
    }else{
        setSuccesFor(email);
    }

    //Validación Teléfono
    if(phoneContact === ""){
        setErrorForInput(phone, "El teléfono no puede estar en blanco");
        isValid = false;
    }else if(!validPhone(phoneContact)){
        setErrorForInput(phone,"El teléfono no es valido");
        isValid = false;
    }else {
        setSuccesFor(phone);
    }

    //Validación Mensaje
    if(messageContact === ""){
        setErrorForInput(messagec,"El mensaje no puede estar en blanco");
        isValid = false;
    }else{
        setSuccesFor(messagec);
    }

    if(isValid){
        form.submit();
    }
}

//Muestra el mensaje de Error
function setErrorForInput(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-container error";

    if(input === messagec){
        formControl.classList.add("message-error");
    }
}

//Muestra el mensaje de Correcto
function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-container success";
}

//Validaciones con Expresiones regulares
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

//Validaciones con Expresiones regulares
function validPhone(phone){
    return /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/.test(
        phone
      );
}

/*
function saveData() {
    const fnameContact = fname.value.trim();
    const lnameContact = lastName.value.trim();
    const emailContact = email.value.trim();
    const phoneContact = phone.value.trim();
    const messageContact = messagec.value.trim();
  }
  
  saveData();
/*
document.getElementById("formularioid").addEventListener("submit", function(event){
    event.preventDefault();
    
    if(fname.value === ""){
        console.log(alert("Llena el campo: Nombre"));
        return;
    }
    if(lastName.value ===""){
        console.log(alert("Llena el campo: Apellido"));
        return;
    }
    if(!email.value.match(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)){
        console.log(alert("Llena el campo o asegurate que este bien escrito: Correo electrónico"));
        return;
    }
    if(phone.value.length !== 10 || phone.value === ""){
        console.log(alert("Llena el campo: Telefono con 10 digitos"));
        return;
    }
    if(message.value === ""){
        console.log(alert("Ingresa un comentario"));
        return;
    }

    let form = document.getElementById("formularioid");
    form.submit();
});
*/