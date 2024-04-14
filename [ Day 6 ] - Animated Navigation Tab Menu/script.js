// Select all list items within the navigation menu
let list = document.querySelectorAll(".navigation li");

// Function to activate clicked link
function activeLink() {
  // Remove 'active' class from all list items
  list.forEach((item) => item.classList.remove("active"));
  // Add 'active' class to the clicked list item
  this.classList.add("active");
}

// Add click event listener to each list item to activate link
list.forEach((item) => item.addEventListener("click", activeLink));
