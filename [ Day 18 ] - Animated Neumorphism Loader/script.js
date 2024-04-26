// Selecting the loading number element by its ID
const loadingNumber = document.querySelector("#loadingNumber");

// Selecting the loading circle element by its class
const loadingCircle = document.querySelector(".loading-circle");

// Initializing the load variable to 0
let load = 0;

// Setting up an interval to call the updateLoader function every 150 milliseconds
setInterval(updateLoader, 150);

// Function to update the loader
function updateLoader() {
  // Incrementing load by 1 if it's less than 100
  load += load < 100;

  // Updating the innerHTML of the loading number element with the current load value
  loadingNumber.innerHTML = load;

  // Updating the background of the loading circle with a conic gradient based on the current load value
  loadingCircle.style.background =
    "conic-gradient(from 0deg at 50% 50%, rgba(111, 123, 247, 1) 0%, rgba(155, 248, 244, 1) " +
    load +
    "%, #101012 " +
    load +
    "%)";
}
