"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const menuBtn = document.querySelectorAll(".menu-btn");
  const body = document.body;

  // Open Menu
  hamburgerBtn.addEventListener("click", () => {
    hamburgerMenu.classList.add("active");
    body.classList.add("no-scroll"); // Prevent scrolling
  });

  menuBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      hamburgerMenu.classList.remove("active");
      body.classList.remove("no-scroll"); // Enable scrolling
    });
  });
});
