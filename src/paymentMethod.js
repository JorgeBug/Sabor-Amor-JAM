console.log("Hola Mundo");

const form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const card = form.elements.cardnum.value;
  const month = form.elements.month.value;
  const year = form.elements.year.value;
  const ccv = form.elements.ccv.value;
  const owner = form.elements.owner.value;
  const expirationDate = month + " " + year;

  const data = {
    numTarjeta: card,
    titularTarjeta: owner,
    cvv: ccv,
    fechaDeExpiracion: expirationDate,
  };

  const datosJSON = JSON.stringify(data);

  fetch("https://sabor-amor.up.railway.app/api/metodo-pago", {
    //Pendiente la url del back
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: datosJSON,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
