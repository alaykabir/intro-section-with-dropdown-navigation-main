const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const body = document.querySelector('body');
const feature = document.querySelector('.feature');
const company = document.querySelector('.company');

const dropDown1 = document.querySelector('.drop-down-list-1');
const dropDown2 = document.querySelector('.drop-down-list-2');

navToggle.addEventListener("click", () => {
  const visible = primaryNav.getAttribute("data-visible");
  console.log(visible);
  if (visible === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    body.setAttribute("black-out", true);
    // dropDown1.setAttribute("data-visible", true);
  } else if (visible === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    body.setAttribute("black-out", false);
    // dropDown1.setAttribute("data-visible", false);
  }
});

feature.addEventListener('click', () => {
  const visible = dropDown1.getAttribute("drop-list-visible");
  console.log(visible);
  if(visible === "false"){
    dropDown1.setAttribute("drop-list-visible", true);
  } else {
    dropDown1.setAttribute("drop-list-visible", false);
  }
});

company.addEventListener('click', () => {
  const visible = dropDown2.getAttribute("drop-list-visible");
  console.log(visible);
  if(visible === "false"){
    dropDown2.setAttribute("drop-list-visible", true);
  } else {
    dropDown2.setAttribute("drop-list-visible", false);
  }
});