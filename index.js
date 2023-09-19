let constValue = document.querySelector(".value");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
increment.addEventListener("click", function () {
  let value = parseInt(constValue.innerText);
  value++;
  constValue.innerText = value;
});

decrement.addEventListener("click", function () {
  let value = parseInt(constValue.innerText);
  value--;
  constValue.innerText = value;
});
