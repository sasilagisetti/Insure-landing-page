// import "./images/icon-close.svg"
const menu = document.querySelector("#menu");
const navBar = document.querySelector("#nav-bar");
const body = document.querySelector("body");
// console.log(body)  
let clickCount = 0;
menu.addEventListener("click", () => {
  console.log(menu.innerHTML);
  if (clickCount === 0) {
    navBar.classList.remove("-left-[120%]");
    navBar.classList.add("-left-[0%]");
    menu.src = "images/icon-close.svg"
    body.style.overflow = "hidden";
    body.style.scroll = "none";
    clickCount = clickCount + 1;
  }
  else{
      navBar.classList.remove("-left-[0%]");
    navBar.classList.add("-left-[120%]");
    menu.src = "images/icon-hamburger.svg"
    body.style.overflow = "auto";
    body.style.scroll = "auto";
    clickCount = clickCount - 1;
  }
});
