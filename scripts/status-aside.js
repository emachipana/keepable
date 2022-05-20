const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".aside-link").
    forEach(link => {
        if(link.href.includes(`${activePage}`)){
            link.classList.toggle("selected");
        }
    })
