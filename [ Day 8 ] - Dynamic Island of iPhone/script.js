// Selecting the island popup element
let popup = document.querySelector(".island_popup");

// Adding click event listener to toggle active class on the island popup
popup.onclick = function () {
  popup.classList.toggle("active");
};
