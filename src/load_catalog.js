const sauceSectionId = "sauces-row";
const mermeladeSectionId = "mermelades-row";
const jsonPath = "../assets/data/catalog.json";

async function loadFullCatalog() {
  fetch(jsonPath).then((response) =>
    response
      .json()
      .then((data) => ({
        data: data,
      }))
      .then((res) => {
        populateCatalog(res.data[0], sauceSectionId);
        populateCatalog(res.data[1], mermeladeSectionId);
      })
  );
}

const populateCatalog = (sauceArray, idString) => {
  for (let i = 0; i < sauceArray.length; i++) {
    const card = createCardString(sauceArray[i].imgPath, sauceArray[i].name);
    addCard(card, idString);
  }
};

const addCard = (cardString, idString) => {
  const sauceRow = document.getElementById(idString);
  sauceRow.innerHTML += cardString;
};

const createCardString = (imgRoute, cardTitle) => {
  return `
  <div class="col-sm">
  <div class="card text-center border-0" style="width: 18rem">
    <a href="#">
      <img src=${imgRoute} class="card-img-top" alt="..." />
    </a>
    <div class="card-body">
      <h5 class="card-title">${cardTitle}</h5>
      <h5 class="card-text">$70.00</h5>
      <a
        href="#"
        class="btn btn-primary btn-lg border-0 btn-rounded"
        id="add-btn"
      >
        AÑADIR
      </a>
    </div>
  </div>
</div>`;
};

loadFullCatalog();
