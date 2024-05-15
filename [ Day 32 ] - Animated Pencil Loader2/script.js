// Get elements from the DOM
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const counters = document.querySelectorAll(".counter");

// Toggle open/close menu
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

// Loop through all counters
counters.forEach((counter) => {
  // Set initial counter value to zero
  counter.innerText = 0;
  // Initialize count variable to track the count
  let count = 0;

  // Function to update count
  function updateCount() {
    // Get the target number to count to
    const target = parseInt(counter.dataset.count);
    // Increment count by 10 if it's below the target number
    if (count < target) {
      count += 10;
      // Display the count
      counter.innerText = count + "+";
      // Repeat every 10 milliseconds
      setTimeout(updateCount, 10); /* Count Speed */
    } else {
      // Set the counter text to the target number when target is reached
      counter.innerText = target + "+";
    }
  }
  // Initialize count update
  updateCount();
});
