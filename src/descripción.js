/*const cardTitle = localStorage.getItem("cardTitle");

fetch("https://jose-backend-production.up.railway.app/api/catalogo")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));*/
const cardTitle = localStorage.getItem("cardTitle");

fetch("https://sabor-amor.up.railway.app/api/catalogo")
    .then(response => response.json())
    .then(data => {
        const filteredData = data.filter(item => item.nombre === cardTitle)[0];
        console.log(filteredData);

        document.querySelector(".title").textContent = filteredData.nombre;
        document.querySelector("#product-image").src = filteredData.imgLink;
        document.querySelector(".container-volume").textContent = `Contenido: ${filteredData.contenido} ml`;
        document.querySelector(".ingredients").textContent = `Descripción: ${filteredData.descripcion}`;
        document.querySelector(".price").textContent = `$${filteredData.precio}.00 MXN`;
        document.querySelector("#add-btn").setAttribute("data-name", filteredData.nombre);
        document.querySelector("#add-btn").setAttribute("data-price", filteredData.precio);
        document.querySelector("#add-btn").setAttribute("data-img", filteredData.imgLink);
        document.querySelector("#add-btn").setAttribute("onclick","addToCart(event)");
        /*document.querySelector("#add-btn").addEventListener("click",addToCart())*/ /*() => {
            // acción al hacer clic en el botón "AÑADIR"
        });*/

    })
    .catch(error => console.error(error));

    const addCard = (cardString, idString) => {
        const sauceRow = document.getElementById(idString);
        sauceRow.innerHTML += cardString;
      };