// Select all elements with the class 'button'
document.querySelectorAll(".button").forEach((button) => {
  // Add a 'click' event listener to each button
  button.addEventListener(
    "click",
    (event) => {
      // Check if the button does not have the class 'compress'
      if (!button.classList.contains("compress")) {
        // Add the 'compress' class to initiate the compression animation
        button.classList.add("compress");

        // Set a timeout to remove the 'compress' class after 4 seconds (4000 milliseconds)
        setTimeout(() => {
          button.classList.remove("compress");
        }, 4000);
      }

      // Prevent the default action of the event (useful if the button is within a form)
      event.preventDefault();
    },
    { passive: true }
  ); // The event listener does not call preventDefault, so it's marked as passive for potential performance benefits
});
