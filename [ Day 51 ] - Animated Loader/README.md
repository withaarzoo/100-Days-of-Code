# Animated Loader

This project is part of day 51 of the #100DaysOfCode Challenge.

Welcome to the Animated Loader project! This project showcases a simple yet elegant loading animation using HTML and CSS. The loader consists of a series of circles that animate in a visually appealing sequence, providing a smooth loading experience for users.

## Preview

<div style="display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 0.6rem;">
    <img src="preview.gif" alt="preview GIF" width="100%" height="100%" style="overflow: none; border-radius: inherit;"/>
</div>

This preview showcases the animated loader in action.

## Download Full Source Code

You can download the full source code for this project from the following link: [Download Source Code](https://t.me/CodeWithAarzoo)

## Introduction

This project demonstrates how to create an animated loading spinner using HTML and CSS. The spinner is made up of five circles that move in a synchronized manner, creating a continuous loading effect. The animation is achieved through CSS keyframes, which define the movement and fade-in effects of the circles.

## Features

- **Responsive Design**: The loader adjusts to different screen sizes, ensuring a consistent appearance on all devices.
- **Smooth Animation**: The animation is smooth and visually appealing, providing a professional look to your loading screens.
- **Customizable**: Easily customize the size, color, and animation duration of the loader to fit your needs.

## Getting Started

### Prerequisites

To use this project, you'll need a basic understanding of HTML and CSS. No additional libraries or frameworks are required.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/withaarzoo/100-Days-of-Code/tree/main/%5B%20Day%2051%20%5D%20-%20Animated%20Loader.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd animated-loader
   ```

3. **Open the Project**

   Open the `index.html` file in your web browser to view the animated loader.

## Customization

The animated loader can be customized by modifying the CSS variables defined in the `.loadingspinner` class. Here are some options you can tweak:

- **Circle Size**: Change the size of the circles by updating the `--circle` variable.
- **Offset Distance**: Adjust the distance between circles by modifying the `--offset` variable.
- **Animation Duration**: Control the overall duration of the animation with the `--duration` variable.
- **Delay Between Animations**: Set the delay between each circle's animation using the `--delay` variable.
- **Background Color**: Change the background color of the circles by updating the `background` property in the `.loadingspinner div` selector.

Example:

```css
.loadingspinner {
    --circle: 30px;
    --offset: 35px;
    --duration: 3s;
    --delay: 0.3s;
    background: #ff6347;
}
```

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## Compatibility

The code is designed to work on modern web browsers that support HTML5 and CSS3 features. Compatibility may vary on older browsers or outdated versions.

## Credits

This project was created by [Aarzoo](https://x.com/withaarzoo).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own purposes.

## Support and Contact

For any inquiries or assistance regarding this project, feel free to reach out to the developer, Aarzoo, via [Bento](https://bento.me/withaarzoo).

Enjoy coding and have fun with your animated loader 🔵✨
