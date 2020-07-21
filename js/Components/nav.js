import RoutingPage from "../Core/Route.js";

const content = document.querySelector("content-web");

const getContentByFetch = (content = "") => {

    const page404 = `<h6>Halaman Tidak Ditemukan!!</h6>`;

    return fetch(content)
        .then(response => (response.status === 200) ? response.text() : page404)
        .then(response => response)
        .catch(_error => page404);
}

const renderLinkNav = (navContent = "") => {

    // Muat daftar tautan menu
    document.querySelectorAll(".topnav, .sidenav").forEach(function (elm) {
        elm.innerHTML = navContent;
    });

    // Daftarkan event listener untuk setiap menu
    document.querySelectorAll(".sidenav a, .topnav a").forEach(function (elm) {
        elm.addEventListener("click", async function (event) {
            // Tutup Sidenav
            let sidenav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sidenav).close();

            // Muat Konten Halaman yg Dipanggil
            const page = event.target.getAttribute("href").substr(1);
            content.innerHTML = await getContentByFetch(`pages/${page}.html`);
            RoutingPage(page);

        });
    });
}

const NavbarInit = async _ => {
    
    // Load Page Content
    let page = window.location.hash.substr(1);
    if (page === "" || page == "top") page = "about";
    
    content.innerHTML = await getContentByFetch(`pages/${page}.html`);
    RoutingPage(page);
    
    // active sidebar nav
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    const navbar = await getContentByFetch('navbar.html');

    renderLinkNav(navbar);

} 

export default NavbarInit;