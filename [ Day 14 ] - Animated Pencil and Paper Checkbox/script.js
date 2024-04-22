// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "cb" (checkboxes) and iterate over them
  document.querySelectorAll(".cb").forEach(function (checkbox) {
    // Add a click event listener to each checkbox
    checkbox.addEventListener("click", function (e) {
      // Get the classList of the clicked checkbox
      let checkboxCL = e.target.classList,
        // Define a constant for the pristine state class
        pState = "pristine";

      // If the checkbox contains the pristine state class, remove it
      if (checkboxCL.contains(pState)) checkboxCL.remove(pState);
    });
  });
});
