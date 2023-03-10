const inputZIP = document.getElementById("zipcode");
const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");
const btnSubmit = document.getElementById("btnSubmit");
const saveAdressBtn = document.getElementById("saveAddress");
const goToCheckout = document.querySelector('.btn-checkout');
console.log(goToCheckout)
const locationContainer =
  document.getElementsByClassName("location-container")[0];
const locationInput = document.createElement("div");
locationInput.classList.add("location");
locationInput.innerHTML = `<div class="input" id="stateInput">
<span id="state"></span>
</div>
<div class="input" id="cityInput">
<span id="city"></span>
</div>`;
let inputState;
let inputCity;
const selectSubdivision = document.createElement("select");
const subAndZipContainer = document.getElementById("row3");

nameInput.addEventListener("input", checkInputs);
lastnameInput.addEventListener("input", checkInputs);
addressInput.addEventListener("input", checkInputs);
phoneInput.addEventListener("input", checkInputs);

let addressData = {
  state: "",
  city: "",
  subdivision: "",
  address: "",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nameValue = nameInput.value.trim();
  const lastnameValue = lastnameInput.value.trim();
  const addressValue = addressInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const zipValue = inputZIP.value.trim();

  let isNameValid = false;
  let isLastNameValid = false;
  let isAddressValid = false;
  let isPhoneValid = false;
  let isZipValid = false;

  if (nameValue === "") {
    setErrorFor(nameInput);
  } else {
    isNameValid = true;
    setSuccessFor(nameInput);
  }

  if (lastnameValue === "") {
    setErrorFor(lastnameInput);
  } else {
    isLastNameValid = true;
    setSuccessFor(lastnameInput);
  }

  if (addressValue === "") {
    setErrorFor(addressInput);
  } else {
    isAddressValid = true;
    setSuccessFor(addressInput);
  }

  if (phoneValue === "") {
    setErrorFor(phoneInput);
  } else if (!validPhone(phoneValue)) {
    setErrorFor(phoneInput);
  } else {
    isPhoneValid = true;
    setSuccessFor(phoneInput);
  }

  if (zipValue === "") {
    setErrorFor(inputZIP);
  } else if (!validZip(zipValue)) {
    setErrorFor(inputZIP);
  } else {
    isZipValid = true;
    setSuccessFor(inputZIP);
  }

  if(isZipValid) {
    btnSubmit.disabled = false;
  }

  if (
    isNameValid &&
    isLastNameValid &&
    isAddressValid &&
    isPhoneValid &&
    isZipValid
  ) {
    goToCheckout.disabled = false;
  }
}

function setErrorFor(input) {
  input.className = "input error";
}

function setSuccessFor(input) {
  input.className = "input success";
}

function validPhone(phone) {
  return /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/.test(
    phone
  );
}

function validZip(zip) {
  return /^[0-9]{5}$/.test(zip);
}

btnSubmit.addEventListener("click", loadAddressInfo);

function getZipCode() {
  const zipcode = inputZIP.value;
  console.log(zipcode);
  return zipcode;
}

async function loadAddressInfo() {
  const cp = getZipCode();
  const token = "71427c6b-fedd-4ea2-8d7a-2aa8c4eb5a8f";
  const url = `https://api.copomex.com/query/info_cp/${cp}?type=simplified&token=${token}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      show(data.response);
      showLocationInfo(data.response);
      //saveAdressInfo(data.response);
    });
}

const show = (data) => {
  console.log(data);
};

const showLocationInfo = (data) => {

  locationContainer.appendChild(locationInput);
  inputState = document.getElementById("state");
  inputCity = document.getElementById("city");

  inputState.innerHTML = data.estado;
  inputCity.innerHTML = data.ciudad;
  selectSubdivision.innerHTML = "";
  subAndZipContainer.appendChild(selectSubdivision);

  for (let i = 0; i < data.asentamiento.length; i++) {
    const subdivisionOption = document.createElement("option");
    subdivisionOption.innerHTML = data.asentamiento[i];
    selectSubdivision.appendChild(subdivisionOption);
  }
  saveAddressInfo(inputState, inputCity);
};

const saveAddressInfo = (inputState, inputCity) => {
  addressData.state = inputState.innerHTML;
  addressData.city = inputCity.innerHTML;
  addressData.subdivision = selectSubdivision.value;
  addressData.address = addressInput.value;
};

const saveSelectedAddressInfo = () => {
  addressData.subdivision = selectSubdivision.value;
  addressData.address = addressInput.value;
  localStorage.setItem("addressData", JSON.stringify(addressData));
};

const redirectPaymentPage = () => {
  window.location.href = "https://steady-longma-5c9fa1.netlify.app/html/paymentMethod.html";
}

saveAdressBtn.addEventListener("click", saveSelectedAddressInfo);
selectSubdivision.addEventListener("change", saveSelectedAddressInfo);
goToCheckout.addEventListener('click', redirectPaymentPage);