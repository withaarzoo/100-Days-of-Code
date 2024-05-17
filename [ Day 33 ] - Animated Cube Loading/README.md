# Animated Cube Loader

This project is part of Day 33 of the #100DaysOfCode Challenge.

This repository contains the code for a simple yet visually appealing animated cube loader that can be used to indicate loading progress on a website.

## Preview

<div style="display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 0.6rem;">
    <img src="preview.gif" alt="preview GIF" width="100%" height="100%" style="overflow: none; border-radius: inherit;"/>
</div>

This preview showcases the animated cube loader in action.

## Download Full Source Code

You can download the full source code for this project from the following link: [Download Source Code](https://t.me/CodeWithAarzoo)

## Features:

- Eight rotating cubes arranged in a 3D cube formation.
- Two levels of depth for a dynamic appearance.
- Smooth animation with easing for a pleasant user experience.
- Customizable styles (colors, dimensions, etc.) through CSS.

## Usage:

1. Clone or download this repository.
2. Copy the `index.html` and `style.css` files to your project directory.
3. Customize the styles in `style.css` to match your project's aesthetics (optional).
4. Include the HTML file in your web page as needed.

## Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Cube Loader</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>Loading...</p>
  <div class="assembly">
    </div>
  <script src="script.js"></script>  </body>
</html>
```

## How it Works:

The animation is achieved using HTML to define the structure of the cubes and CSS to apply 3D transformations and animations. The CSS includes:

- **General setup:** Sets the viewport, background, and positioning for the loader.
- **Assembly and animation:** Defines styles for the main container and animations for the inner and outer cube groups.
- **Cube positioning:** Positions each cube in 3D space using `scale3d` and `translate3d`.
- **Cube faces:** Styles each face of the cube with dimensions, shadows, and background colors.
- **Cube movement animation:** Anims specific cubes within the positioned elements.

## Customization:

- You can modify the colors, dimensions, and animation timing in the `style.css` file to customize the appearance of the loader.

## License:

This project is licensed under the MIT License. See the LICENSE file for details.

I hope this README provides a clear and informative overview of the animated cube loader code!

## Credits

This code snippet has been crafted by [Aarzoo](https://twitter.com/withaarzoo).

## Support and Contact

For any inquiries or assistance regarding this project, feel free to reach out to the developer, Aarzoo, via [Bento](https://bento.me/withaarzoo).

Enjoy coding and have fun with your animated cube loader 🟦✨

---

Enjoy using the animated cube loader! If you have any questions or suggestions, please feel free to reach out.
