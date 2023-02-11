async function addNavBar() {
    const resp = await fetch("../html/navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}

addNavBar();