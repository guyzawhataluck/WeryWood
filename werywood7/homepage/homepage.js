const text = document.querySelector(".built-for-safety");
const rating = document.querySelector(".rating");
const second = document.querySelector(".secondpage");
const first = document.querySelector(".firstpage");
const lineSelector = document.querySelectorAll(".big-line");
const Bottom = first.getBoundingClientRect().bottom;
const Top = first.getBoundingClientRect().top;
const topSecond = second.getBoundingClientRect().top;
const bars = document.getElementById("toggle-and-close");
const navYo = document.getElementById("navyo-id");
const toggle = document.getElementById("toggle-id");
const sideNav = document.querySelector(".main-nav");

window.addEventListener("scroll", checkBoxes);
window.addEventListener("scroll", sideNavHover);

function popUpNavBar() {
  toggle.style.display = "none";
  navYo.style.display = "block";
}

function closeNavBar() {
  toggle.style.display = "block";
  navYo.style.display = "none";
}

function checkBoxes() {
  if (window.scrollY > Bottom) {
    text.classList.add("show");
    rating.classList.add("show");
    lineSelector.forEach((line) => {
      line.classList.add("show");
    });
  } else if (window.scrollY < Bottom) {
    text.classList.remove("show");
    rating.classList.remove("show");
    lineSelector.forEach((line) => {
      line.classList.remove("show");
    });
  }
}

function sideNavHover() {
  if (window.scrollY > Bottom) {
    sideNav.classList.add("show");
  } else if (window.scrollY < Bottom) {
    sideNav.classList.remove("show");
  }
}
