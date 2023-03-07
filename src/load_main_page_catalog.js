topProductSection = "top-product-container";
bottomProductSection = "bottom-product-container";
const jsonPath = "../assets/data/catalog.json";

salsas_mas_vendidas = [
  "Salsa de Habanero con Mango",
  "Salsa Chilapeña",
  "Salsa de Cacahuate",
];

mermeladas_mas_vendidas = [
  "Mermelada de Frutos Rojos",
  "Mermelada de Jamaica",
  "Mermelada de Fresa",
];

const createProductString = (imgPath, name, price, spicy) => {
  /* Nivel de picante mostrado con iconos */
  let hotScaleIcons = '';
  for (let i = 0; i < spicy; i++) {
    hotScaleIcons += '<i class="fa-solid fa-pepper-hot"></i>';
  }
  return `<div class="pro">
        <a href="../html/descripcion.html" onclick="saveCardTitle(event, '${name}')"><img
        class="img-fluid"
        src="${imgPath}"
        alt=""
        /></a>
        <div class="hot-scale">
        ${hotScaleIcons}
        </div>
        <center>
        <div class="description">
        <h4 class="item-title">${name}</h4>
        <span>$${price} MXN</span>
        <button class="cart-button" 
        onclick="addToCart(event)"
        data-name="${name}"
        data-price="${price}"
        data-img="${imgPath}"
        id="add-btn">
          Añadir
        </button>
        </div>
        </center>
    </div>`;
};


const populateMainPageCatalog = () => {
  topProductSection = document.getElementById(topProductSection);
  bottomProductSection = document.getElementById(bottomProductSection);
  for (let i = 0; i < 3; i++) {
    producto = createProductString();
    topProductSection.innerHTML += producto;
    bottomProductSection.innerHTML += producto;
  }
};

async function loadFullCatalog() {
  fetch(jsonPath).then((response) =>
    response
      .json()
      .then((data) => ({
        data: data,
      }))
      .then((res) => {
        salsas = res.data[0];
        mermeladas = res.data[1];

        salsasParaPaginaPrincipal = getMainProductArray(
          salsas,
          salsas_mas_vendidas
        );
        mermeladasParaPaginaPrincipal = getMainProductArray(
          mermeladas,
          mermeladas_mas_vendidas
        );

        populateCatalog(salsasParaPaginaPrincipal, topProductSection);
        populateCatalog(mermeladasParaPaginaPrincipal, bottomProductSection);
      })
  );
}

const populateCatalog = (SauceArray, sectionID) => {
  productSection = document.getElementById(sectionID);
  for (let i = 0; i < SauceArray.length; i++) {
    const name = SauceArray[i].name;
    const price = SauceArray[i].price;
    const spicy = SauceArray[i].spicy;
    const imgPath = SauceArray[i].imgPath;

    sauceHTML = createProductString(imgPath, name, price, spicy);
    productSection.innerHTML += sauceHTML;
  }
};


//Regresa un arreglo de objetos JSON con la
//informacion de las salsas mas populares
const getMainProductArray = (salsas, productArray) => {
  productosParaPaginaPrincipal = [];
  for (let i = 0; i < salsas.length; i++) {
    salsa = salsas[i].name;
    if (productArray.includes(salsa)) {
      productosParaPaginaPrincipal.push(salsas[i]);
    }
  }
  return productosParaPaginaPrincipal;
};

loadFullCatalog();

//Guardar en el localStorage
function saveCardTitle(event, title) {
  event.preventDefault(); 
  localStorage.setItem("cardTitle", title); // guarda el título de la tarjeta en el Local Storage con la clave "cardTitle"
  window.location.href = "../html/descripcion.html"; // redirige al usuario a la página "descripcion.html"
}