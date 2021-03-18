const myNumber = document.getElementById("myNumber");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const colorBtns = document.getElementsByClassName("color-btn");

increase.onclick = () => {
  const current = parseInt(myNumber.innerText, 10);
  myNumber.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(myNumber.innerText, 10);
  myNumber.innerText = current - 1;
};

for (let btn of colorBtns) {
  btn.onclick = () => {
    myNumber.style.color = btn.dataset.color;
  };
}
