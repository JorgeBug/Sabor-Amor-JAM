let fname = document.getElementById("fnameid");
let lastName = document.getElementById("lnameid");
let email = document.getElementById("emailid");
let phone = document.getElementById("phoneid");
let message = document.getElementById("messageid");

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
