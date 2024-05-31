# Animated Loader

This project is part of day 40 of the #100DaysOfCode Challenge.

This project is a 3D animated loader created using HTML and CSS. The loader consists of multiple boxes moving and transforming in 3D space, providing a visually appealing loading animation.

## Table of Contents

- [Preview](#preview)
- [Download Full Source Code](#download-full-source-code)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Preview

<div style="display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 0.6rem;">
    <img src="preview.gif" alt="preview GIF" width="100%" height="100%" style="overflow: none; border-radius: inherit;"/>
</div>

This preview showcases the animted loder in action.

## Download Full Source Code

You can download the full source code for this project from the following link: [Download Source Code](https://t.me/CodeWithAarzoo)

## Features

- 3D animated loader using pure CSS
- Responsive design with media query for smaller screens
- Customizable colors and animation duration

## Installation

To use this animated loader in your project, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/witharzoo/animated-loader.git
    ```

2. Navigate to the project directory:

    ```sh
    cd animated-loader
    ```

## Usage

Include the HTML and CSS in your project as shown below:

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Animated Loader</title>
</head>
<body>
    <div class="loader">
        <div class="box box0"><div></div></div>
        <div class="box box1"><div></div></div>
        <div class="box box2"><div></div></div>
        <div class="box box3"><div></div></div>
        <div class="box box4"><div></div></div>
        <div class="box box5"><div></div></div>
        <div class="box box6"><div></div></div>
        <div class="box box7"><div></div></div>
        <div class="ground"><div></div></div>
    </div>
</body>
</html>
```

### CSS

```css
body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.loader {
    --duration: 3s;
    --primary: rgba(39, 94, 254, 1);
    --primary-light: #2f71ff;
    --primary-rgba: rgba(39, 94, 254, 0);
    width: 200px;
    height: 320px;
    position: relative;
    transform-style: preserve-3d;
}

@media (max-width: 480px) {
    .loader {
        zoom: 0.44;
    }
}

/* Additional CSS for the loader animation */
```

Copy the CSS from the provided `style.css` file into your project's stylesheet.

## Customization

You can customize the loader by modifying the following CSS variables:

- `--duration`: Animation duration
- `--primary`: Primary color for the boxes
- `--primary-light`: Lighter shade of the primary color
- `--primary-rgba`: Transparent version of the primary color

To change these variables, update their values in the `.loader` class:

```css
.loader {
    --duration: 4s; /* Example of changing the duration */
    --primary: rgba(255, 0, 0, 1); /* Example of changing the primary color to red */
    /* Other properties */
}
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code adheres to the project's coding standards and include relevant tests.

## Credits

This project was created by [Aarzoo](https://x.com/withaarzoo).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own purposes.

## Feedback and Contributions

Feedback, bug reports, and contributions are welcome! Please submit them via [GitHub Issues](https://github.com/withaarzoo/100-Days-of-Code/tree/main/%5B%20Day%2036%20%5D%20-%20Animated%20Compress%20File%20Button/issues) or create a pull request with your proposed changes.

## Support and Contact

For any inquiries or assistance regarding this project, feel free to reach out to the developer, Aarzoo, via [Bento](https://bento.me/withaarzoo).

Enjoy coding and have fun with your animted loder 🔼✨
