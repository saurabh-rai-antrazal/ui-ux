const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobileNav");
const body = document.body;


function toggleDrawer() {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  mobileNav.classList.toggle("openDrawer");
  

  if (mobileNav.classList.contains("openDrawer")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
}


function closeDrawer() {
  bar1.classList.remove("animateBar1");
  bar2.classList.remove("animateBar2");
  bar3.classList.remove("animateBar3");
  mobileNav.classList.remove("openDrawer");
  body.style.overflow = "";
}

hamburger.addEventListener("click", toggleDrawer);

const mobileNavLinks = document.querySelectorAll(".mobileNav a");
mobileNavLinks.forEach(link => {
  link.addEventListener("click", closeDrawer);
});

window.addEventListener("scroll", () => {
  if (mobileNav.classList.contains("openDrawer")) {
    closeDrawer();
  }
});