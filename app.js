let counterH1 = document.getElementById("counter");
let counter = 0;

function minus() {
  counter -= 10;
  counterH1.innerHTML = counter;
}

function add() {
  counter += 10;
  counterH1.innerHTML = counter;
}
