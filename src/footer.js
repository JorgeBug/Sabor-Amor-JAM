function createFooter() {
    /* Variable footer y backgroud de imagen */
    let footer = document.createElement("footer");
   
    /* Contenedor para los iconos */
    let iconsContainer = document.createElement("div");
    iconsContainer.style.height = "60px";
    /* Icono Facebook */
    let facebookLink = document.createElement("a");
    facebookLink.href = "https://www.facebook.com/SaborAmor1967?mibextid=ZbWKwL";
    facebookLink.target = "_blank";
    let facebookLogo = document.createElement("i");
    facebookLogo.classList.add("fab", "fa-facebook-square");
    
    /* Icono Instagram */
    let instagramLink = document.createElement("a");
    instagramLink.href = "https://www.instagram.com/saboramorjam/";
    instagramLink.target = "_blank";
    let instagramLogo = document.createElement("i");
    instagramLogo.classList.add("fab", "fa-instagram");
    facebookLogo.style.justifyContent = "center-start";
    
    facebookLink.appendChild(facebookLogo);
    iconsContainer.appendChild(facebookLink);
    instagramLink.appendChild(instagramLogo);
    iconsContainer.appendChild(instagramLink);

    /* Contenedor texto */
    let textContainer = document.createElement("div");
    textContainer.style.height = "15px";
    var text = document.createElement("p");
    text.innerText = `Síguenos en nuestras redes sociales`;
    textContainer.appendChild(text);

    /* Segundo contenedor texto */
    let textContainer2 = document.createElement("div");
    textContainer2.style.height = "15px";
    var text = document.createElement("p");
    text.innerText = `® 2023 Sabor Amor Jam`;
    textContainer2.appendChild(text);

    footer.appendChild(iconsContainer);
    footer.appendChild(textContainer);
    footer.appendChild(textContainer2);

    document.body.appendChild(footer);
}

createFooter();