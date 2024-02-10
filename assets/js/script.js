'use strict';

/**
 * navbar variables
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

var copy = document.querySelector("aliados-img--container").cloneNode(true);
      document.querySelector(".carrusel").appendChild(copy);