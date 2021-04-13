const body = document.getElementsByTagName("body");
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");

light.style.opacity = 1;

const setMode = () => {
  if (localStorage.getItem("mode") == "black") {
    light.style.opacity = 0;
    body[0].style.backgroundColor = "#302F2F";
  } else {
    light.style.opacity = 1;
    body[0].style.backgroundColor = "#FFFFFF";
  }
};

setMode();

light.addEventListener("click", function () {
  if (light.style.opacity == 1) {
    light.style.opacity = 0;
    body[0].style.backgroundColor = "#302F2F";
    localStorage.setItem("mode", "black");
  } else {
    light.style.opacity = 1;
    body[0].style.backgroundColor = "#FFFFFF";
    localStorage.setItem("mode", "white");
  }
});
