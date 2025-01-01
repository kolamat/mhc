const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const windowPathname = window.location.pathname;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

navMenu.forEach((navLinkEL) => {
  if (navLinkEL.href.includes(windowPathname)) {
    navLinkEL.classList.add("actives");
  }
});
