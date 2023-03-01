// Inicialización del carrito
const cart = JSON.parse(localStorage.getItem("data")) || [];
const itemsContainer = document.querySelector("#item-container");
if (itemsContainer) {
  loadCartItems();
}

// Agregar producto al carrito
function addToCart(event) {
  const productName = event.target.getAttribute("data-name");
  const productPrice = event.target.getAttribute("data-price");
  const imagePath = event.target.getAttribute("data-img");

  const existingItemIndex = cart.findIndex((item) => item.name === productName);
  if (existingItemIndex !== -1) {
    alert("El producto ya está en el carrito.");
    return;
  }

  const item = {
    name: productName,
    price: productPrice,
    image: imagePath,
    quantity: 1,
  };

  cart.push(item);

  localStorage.setItem("data", JSON.stringify(cart));
  refreshCartCounter();
  loadCartItems();
  refreshTotal();
}

// Mostrar los items en el carrito
function loadCartItems() {
  const cart = JSON.parse(localStorage.getItem("data")) || [];
  console.log(cart);

  for (const product of cart) {
    console.log(product);
    const itemElement = document.createElement("div");
    itemElement.classList.add("item-container");
    itemElement.innerHTML = `
    <div class="item-img">
    <img src="${product.image}" alt="" />
    </div>
    <div class="details">
    <h3>${product.name}</h3>
        <span>${product.price} MXN</span>
      </div>
      <div class="delete-item">
        <input type="number" name="" id="" value="${product.quantity}" class="quantity" />
        <button onclick="deleteItem(event)"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
    console.log(itemElement);
    itemsContainer.appendChild(itemElement);

    refreshTotal();
  }
}

// Actualización del contador de productos en el carrito
function refreshCartCounter() {
  const cartCount = cart.length;
  const productCounter = document.querySelector(".counter");
  productCounter.textContent = cartCount;
}

// Actualización del total
function refreshTotal() {
  const itemRows = document.querySelectorAll(".item-container");
  let total = 0;

  for (const itemRow of itemRows) {
    const itemQuantity = itemRow.querySelector("input.quantity").valueAsNumber;
    console.log(itemQuantity);
    const itemPrice = parseFloat(
      itemRow.querySelector(".details span").innerText.replace(" MXN", "")
    );

    total += itemPrice * itemQuantity;
  }

  const totalElement = document.querySelector(".total");
  totalElement.textContent = `${total.toFixed(2)} MXN`;
}

// Actualizar cantidad del producto
const inputs = document.getElementsByClassName("quantity");
for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i].addEventListener("change", changeQuantity);
}

function changeQuantity(e) {
  let inputValue = e.target.value;
  if (isNaN(inputValue) || inputValue <= 0) {
    e.target.value = 1;
  }
  refreshTotal();
  refreshCartCounter();
}

// Eliminar item del carrito
function deleteItem(event) {
  const itemRow = event.target.closest(".item-container");
  const itemIndex = Array.from(itemRow.parentNode.children).indexOf(itemRow);
  cart.splice(itemIndex, 1);
  localStorage.setItem("data", JSON.stringify(cart));
  itemRow.remove();
  refreshTotal();
  refreshCartCounter();
}

// Realizar pago
function makePayment() {
  const itemsContainer = document.querySelector("#item-container");
  while (itemsContainer.hasChildNodes()) {
    itemsContainer.removeChild(itemsContainer.firstChild);
  }

  const totalElement = document.querySelector(".total");
  totalElement.innerText = `${0} MXN`;
  refreshTotal();

  window.location.href = '../html/shipment.html';
}
