const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navLinkEls = document.querySelectorAll(".nav-link");
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

navLinkEls.forEach((navLinkEl) => {
  const navLinkPathname = new URL(navLinkEl.href).pathname;

  if (
    windowPathname === navLinkPathname ||
    (windowPathname === "/index.html" && navLinkPathname === "/")
  ) {
    navLinkEl.classList.add("active-link");
  }
});

/* // THE FIRST WAY YOU USE IN SETTING AN ACTIVE LINK

// navLinkEls.forEach((navLinkEl) => {
//   const navLinkPathname = new URL(navLinkEl.href).pathname;

//   if (navLinkEl.href.includes(windowPathname)) {
//     navLinkEl.classList.add("active-link");
//   }
// }); */
