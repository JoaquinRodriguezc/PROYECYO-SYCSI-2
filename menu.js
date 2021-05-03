'use strict'

let miBoton = document.getElementById("miBoton");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        miBoton.style.display = "block";
    } else {
        miBoton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/* MENU --------------*/
let navStatus = false;

function menuDesplegable() {

    const getNav = document.querySelector("#miNav");

    if (navStatus === false) {
        getNav.style.visibility = "visible"
        navStatus = true;
    } else if (navStatus === true) {

        getNav.style.visibility = "hidden"
        navStatus = false;
    }

}