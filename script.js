let one = document.querySelector(".one");
let btn = document.querySelector("button");
let hed = document.querySelector(".hed");

function changcolorone() {
  btn.style.background = "green";
  hed.style.background = "green";
}

function changcolortwo() {
  btn.style.background = "rgb(57, 3, 253)";
  hed.style.background = "rgb(57, 3, 253)";
}

function changcolorthree() {
  btn.style.background = "rgb(16, 164, 223)";
  hed.style.background = "rgb(16, 164, 223)";
}

// main page
let sidbar = document.getElementById("tside");

function change() {
  if (sidbar.style.display == "flex") {
    sidbar.style.display = "none";
  } else {
    sidbar.style.display = "flex";
  }
}
