function redirect(url) {
  window.location.href = url;
}

const names = ["Christian Andrei T. Arzadon", "Francis Kyle Navarro Gabriel", "Fritzjerald L. Domingo", "June Zyrus Castillo", "Karl Tristan Viloria", "Vincent Ruiz"];
const nameRotator = document.getElementById("name-rotator");
let currentIndex = 0;

function rotateNames() {
  nameRotator.textContent = names[currentIndex];
  currentIndex = (currentIndex + 1) % names.length;
}

setInterval(rotateNames, 2000); // Change name every 2 seconds


