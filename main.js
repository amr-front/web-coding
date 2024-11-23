const bar = document.querySelector(".bars");
const links = document.querySelector(".link-holder");

bar.addEventListener("click", () => {
  links.classList.toggle("view");
  if (links.classList.contains("view")) {
    bar.children[0].style.transform = "rotate(45deg)";
  } else {
    bar.children[0].style.transform = "rotate(0deg)";
  }
});

document.addEventListener("click", (e) => {
  if (!bar.contains(e.target) && !links.contains(e.target)) {
    links.classList.remove("view");
    bar.children[0].style.transform = "rotate(0deg)";
  }
});

let copy = document.querySelector(".copyr");
let year = document.createTextNode(new Date().getFullYear());
copy.after(year);
