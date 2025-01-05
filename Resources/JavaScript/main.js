
let nav = document.getElementById("navigation");
let toggle = false;

function toggleMenu() {
  if(toggle) {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
  toggle = !toggle;
}
