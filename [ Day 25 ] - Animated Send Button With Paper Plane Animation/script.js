// Select all elements with the class "button" and apply event listeners and animations
document.querySelectorAll(".button").forEach((button) => {
  // Function to get computed CSS variable values
  let getVar = (variable) =>
    getComputedStyle(button).getPropertyValue(variable);

  // Add click event listener to each button
  button.addEventListener("click", (e) => {
    // Check if the button is not already active
    if (!button.classList.contains("active")) {
      // Add the "active" class to the button
      button.classList.add("active");

      // Animation using GSAP library
      gsap.to(button, {
        // Keyframes for animation
        keyframes: [
          {
            "--left-wing-first-x": 50,
            "--left-wing-first-y": 100,
            "--right-wing-second-x": 50,
            "--right-wing-second-y": 100,
            duration: 0.2,
            // Function executed after completing this keyframe
            onComplete() {
              // Set new CSS variables for paper plane transformation
              gsap.set(button, {
                "--left-wing-first-y": 0,
                "--left-wing-second-x": 40,
                "--left-wing-second-y": 100,
                "--left-wing-third-x": 0,
                "--left-wing-third-y": 100,
                "--left-body-third-x": 40,
                "--right-wing-first-x": 50,
                "--right-wing-first-y": 0,
                "--right-wing-second-x": 60,
                "--right-wing-second-y": 100,
                "--right-wing-third-x": 100,
                "--right-wing-third-y": 100,
                "--right-body-third-x": 60,
              });
            },
          },
          {
            "--left-wing-third-x": 20,
            "--left-wing-third-y": 90,
            "--left-wing-second-y": 90,
            "--left-body-third-y": 90,
            "--right-wing-third-x": 80,
            "--right-wing-third-y": 90,
            "--right-body-third-y": 90,
            "--right-wing-second-y": 90,
            duration: 0.2,
          },
          {
            "--rotate": 50,
            "--left-wing-third-y": 95,
            "--left-wing-third-x": 27,
            "--right-body-third-x": 45,
            "--right-wing-second-x": 45,
            "--right-wing-third-x": 60,
            "--right-wing-third-y": 83,
            duration: 0.25,
          },
          {
            "--rotate": 60,
            "--plane-x": -8,
            "--plane-y": 40,
            duration: 0.2,
          },
          {
            "--rotate": 40,
            "--plane-x": 45,
            "--plane-y": -300,
            "--plane-opacity": 0,
            duration: 0.375,
            // Function executed after completing this keyframe
            onComplete() {
              // Remove inline styles added during animation
              setTimeout(() => {
                button.removeAttribute("style");
                // Fade in button after animation completes
                gsap.fromTo(
                  button,
                  {
                    opacity: 0,
                    y: -8,
                  },
                  {
                    opacity: 1,
                    y: 0,
                    clearProps: true,
                    duration: 0.3,
                    // Function executed after completing this animation
                    onComplete() {
                      // Remove the "active" class from the button
                      button.classList.remove("active");
                    },
                  }
                );
              }, 1800);
            },
          },
        ],
      });

      // Additional animation for button appearance change
      gsap.to(button, {
        // Keyframes for animation
        keyframes: [
          {
            "--text-opacity": 0,
            "--border-radius": 0,
            "--left-wing-background": getVar("--primary-dark"),
            "--right-wing-background": getVar("--primary-dark"),
            duration: 0.11,
          },
          {
            "--left-wing-background": getVar("--primary"),
            "--right-wing-background": getVar("--primary"),
            duration: 0.14,
          },
          {
            "--left-body-background": getVar("--primary-dark"),
            "--right-body-background": getVar("--primary-darkest"),
            duration: 0.25,
            delay: 0.1,
          },
          {
            "--trails-stroke": 171,
            duration: 0.22,
            delay: 0.22,
          },
          {
            "--success-opacity": 1,
            "--success-x": 0,
            duration: 0.2,
            delay: 0.15,
          },
          {
            "--success-stroke": 0,
            duration: 0.15,
          },
        ],
      });
    }
  });
});
