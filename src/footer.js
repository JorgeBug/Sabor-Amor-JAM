function createFooter() {
    /* Variable footer y backgroud de imagen */
    let footer = document.createElement("footer");
    footer.style.backgroundColor = "rgba(222, 229, 234, 1)"
    footer.style.backgroundImage = "url(../assets/img/footer/talavera.jpg)";
    footer.style.backgroundBlendMode = "screen";
    footer.style.backgroundSize = "cover";
    footer.style.backgroundRepeat = "no-repeat";
    footer.style.display = "flex";
    footer.style.justifyContent = "center";
    footer.style.height = "100px";
    footer.style.color = "rgba(126, 126, 126, 1)";
    footer.style.fontFamily = "Poppins, sans-serif";
    footer.style.fontWeight = "300";
    footer.style.fontSize = "16px";
    footer.style.flexDirection = "column";
    /* Contenedor para los iconos */
    let iconsContainer = document.createElement("div");
    iconsContainer.style.display = "flex";
    iconsContainer.style.justifyContent = "center";
    iconsContainer.style.alignItems = "center";
    iconsContainer.style.height = "60px";
    /* Icono Facebook */
    let facebookLink = document.createElement("a");
    facebookLink.href = "https://www.facebook.com/SaborAmor1967?mibextid=ZbWKwL";
    facebookLink.target = "_blank";
    let facebookLogo = document.createElement("i");
    facebookLogo.classList.add("fab", "fa-facebook-square");
    facebookLogo.style.fontSize = "35px";
    facebookLogo.style.margin = "30px";
    facebookLogo.style.justifyContent = "center-start";
    /* Icono Instagram */
    let instagramLink = document.createElement("a");
    instagramLink.href = "https://www.instagram.com/saboramorjam/";
    instagramLink.target = "_blank";
    let instagramLogo = document.createElement("i");
    instagramLogo.classList.add("fab", "fa-instagram");
    instagramLogo.style.fontSize = "35px";
    instagramLogo.style.margin = "30px";
    /* Icono Corazón*/
    let heartLink = document.createElement("a");
    heartLink.href = ""; //Poner la página de los deploys 
    heartLink.target = "_blank";
    let heartLogo = document.createElement("i");
    heartLogo.classList.add("bi", "bi-heart-fill");
    heartLogo.style.fontSize = "32px";
    heartLogo.style.margin = "30px";
    heartLink.style.marginTop = "7px";

    facebookLink.appendChild(facebookLogo);
    iconsContainer.appendChild(facebookLink);
    instagramLink.appendChild(instagramLogo);
    iconsContainer.appendChild(instagramLink);
    heartLink.appendChild(heartLogo);
    iconsContainer.appendChild(heartLink);
    /* Contenedor texto */
    let textContainer = document.createElement("div");
    textContainer.style.display = "flex";
    textContainer.style.justifyContent = "center";
    textContainer.style.alignItems = "center";
    textContainer.style.height = "20px";
    
    var text = document.createElement("p");
    text.innerText = `Síguenos en nuestras redes sociales`;
    textContainer.appendChild(text);

    /* Segundo contenedor texto */
    let textContainer2 = document.createElement("div");
    textContainer2.style.display = "flex";
    textContainer2.style.justifyContent = "center";
    textContainer2.style.alignItems = "center";
    textContainer2.style.height = "20px";

    var text = document.createElement("p");
    text.innerText = `® 2023 Sabor Amor Jam`;
    textContainer2.appendChild(text);

    footer.appendChild(iconsContainer);
    footer.appendChild(textContainer);
    footer.appendChild(textContainer2);

    document.body.appendChild(footer);
}

createFooter();