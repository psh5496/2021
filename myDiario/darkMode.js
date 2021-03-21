const body = document.getElementsByTagName("body");
const light = document.querySelector("#light");
const yet = document.querySelector("#yet");

light.style.opacity = 1;
light.addEventListener('click', function() {
    if(light.style.opacity == 1) {
        light.style.opacity = 0;
        body[0].style.backgroundColor = "#302F2F";
        yet.style.color = "#DCD6F7";
    }
    else {
        light.style.opacity = 1;
        body[0].style.backgroundColor = "#FFFFFF";
        yet.style.color = "#424874";
    }
})