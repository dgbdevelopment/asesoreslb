/* ----- Desplegar y recoger menu responsive ------------- */
let btnMenu = document.querySelector(".btn-menu");
let menuLinksBar = document.querySelector(".menu-links");

btnMenu.addEventListener("click", () => {
  menuLinksBar.classList.toggle("show");
});

/* ------ Botón arriba ----------------------------------- */
let btnUp = document.getElementById("go-up-btn");

let previousScrollPosition = window.pageYOffset;

btnUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  previousScrollPosition = 0;
});

/* ------- Botón Abajo ------------------------------------- */

document.querySelector("#abajo").addEventListener("click", () => {
  document.querySelector(".sobre-nosotros").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

/* ------ Adjudicar clase active en menus ----------------- */
let menuLinks = document.querySelectorAll(".menu-links-items li a");

menuLinks.forEach((item) => {
  item.addEventListener("click", (event) => {
    menuLinks.forEach((elemento) => {
      elemento.classList.remove("active");
    });
    event.target.classList.add("active");
    // console.log(event.target.dataset.scroll);
    console.log(event.target);
    document.querySelector(event.target.dataset.scroll).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/* Hacer desaparecer o reaparecer menú y botón arriba al hacer scroll */
let navMenu = document.querySelector(".menu");

window.onscroll = () => {
  let currentScrollPosition = window.pageYOffset;

  if (previousScrollPosition > currentScrollPosition) {
    navMenu.style.top = "0";
    btnMenu.style.top = "0";
  } else {
    navMenu.style.top = "-50px";
    menuLinksBar.classList.remove("show");
    btnMenu.style.top = "-50px";
  }

  if (previousScrollPosition > window.innerHeight) {
    btnUp.style.bottom = "100px";
  } else {
    btnUp.style.bottom = "-60px";
  }

  previousScrollPosition = currentScrollPosition;
};

const aviso = document.querySelector(".aviso-cookies");

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("cookies-accepted")) return false;
  setTimeout(() => {
    console.log("Ahora sale el aviso de cookies");
    aviso.classList.add("aviso-cookies--show");
  }, 500);
  setTimeout(() => {
    aviso.classList.remove("aviso-cookies--show");
  }, 20000);
});

document.querySelector(".aviso-cookies__btn").addEventListener("click", () => {
  localStorage.setItem("cookies-accepted", "done");
  aviso.classList.remove("aviso-cookies--show");
});
