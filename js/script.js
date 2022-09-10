//script to be used in the hamburger menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

//we are listen for a click event
//when it happens, we will toggle the class , so if it's there it will be removed
//and if it isn't there it will be created
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
