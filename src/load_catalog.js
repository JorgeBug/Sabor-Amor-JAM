const sauceSectionId = "sauces-row";
const mermeladeSectionId = "mermelades-row";
const jsonPath = "../assets/data/catalog.json";

async function loadFullCatalog() {
  fetch("https://sabor-amor.up.railway.app/api/catalogo")
    .then((response) => response.json())
    .then((data) => {
      const sauces = getSauceOrMermeladeArray(data, "Salsa");
      const mermelades = getSauceOrMermeladeArray(data, "Mermelada");
      populateCatalog(sauces, sauceSectionId);
      populateCatalog(mermelades, mermeladeSectionId);
    });
}

const getSauceOrMermeladeArray = (productArray, category) => {
  result = [];
  for (let i = 0; i < productArray.length; i++) {
    if (productArray[i].categoria === category) {
      result.push(productArray[i]);
    }
  }
  return result;
};

const populateCatalog = (sauceArray, idString) => {
  for (let i = 0; i < sauceArray.length; i++) {
    const card = createCardString(
      sauceArray[i].imgLink,
      sauceArray[i].nombre,
      sauceArray[i].precio
    );
    addCard(card, idString);
  }
};

const addCard = (cardString, idString) => {
  const sauceRow = document.getElementById(idString);
  sauceRow.innerHTML += cardString;
};

const createCardString = (imgRoute, cardTitle, cardPrice) => {
  return `
  <div class="col-sm">
  <div class="card text-center border-0" style="width: 18rem">
      <div class="image-container">
      <!--  <i class="fa-regular fa-heart"></i> -->
        <i class="fa-solid fa-pepper-hot"></i>
        <a href="../html/descripcion.html"><img src=${imgRoute} class="card-img-top" alt="..." /></a>
      </div>
  </div>
    <div class="card-body">
      <h5 class="card-title">${cardTitle}</h5>
      <h5 class="card-text"><strong>$${cardPrice} MXN</strong></h5>
      <button
        onclick="addToCart(event)"
        class="btn btn-primary btn-lg border-0 btn-rounded"
        data-name="${cardTitle}"
        data-price="${cardPrice}"
        data-img="${imgRoute}"
        id="add-btn"
      >
        AÑADIR
      </button>
    </div>
  </div>
</div>`;
};

loadFullCatalog();
