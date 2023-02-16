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

const createProductString = () => {
  return `<div class="pro">
        <img
        class="img-fluid"
        src="../assets/img/home-items/Chile morita.png"
        alt=""
        />
        <div class="fav-icon">
        <a href="#"><i class="fa-regular fa-heart"></i></a>
        </div>
        <div class="hot-scale">
        <i class="fa-solid fa-pepper-hot"></i>
        <i class="fa-solid fa-pepper-hot"></i>
        <i class="fa-solid fa-pepper-hot"></i>
        </div>
        <div class="description">
        <h4 class="item-title">salsa de chile morita</h4>
        <span>$70.00 MXN</span>
        <button class="cart-button"><a href="#aver">+ Añadir</a></button>
        </div>
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
        //De todo el JSON, unicamente obtener los elementos mas vendidos
        salsas = res.data[0];
        salsasParaPaginaPrincipal = [];

        for (let i = 0; i < salsas.length; i++) {
          salsa = salsas[i].name;
          if (salsas_mas_vendidas.includes(salsa)) {
            salsasParaPaginaPrincipal.push(salsas[i]);
          }
        }

        console.log(salsasParaPaginaPrincipal);
      })
  );
}

loadFullCatalog();
