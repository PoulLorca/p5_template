# p5_template

![Example Output](image1)

## Overview

**p5_template** is a powerful starter template for [p5.js](https://p5js.org/) projects, designed for rapid prototyping and creative coding with a layer-based workflow.

## Features

- **Layer-Based Drawing:** Organize your sketch into multiple layers, each managed by its own drawing function. Easily toggle visibility of layers.
- **Reference Images:** Add reference images to the `assets` folder and display them as an overlay.
- **Guide Grid & Axes:** Overlay a customizable grid and central axes to assist with alignment and composition.
- **Tooltip:** Dynamic tooltip displays mouse coordinates.
- **Keyboard Shortcuts:** Instantly show/hide features and layers with easy keyboard commands.

## Keyboard Shortcuts

| Key  | Action                          |
|------|---------------------------------|
| `r`  | Toggle reference image layer    |
| `g`  | Toggle grid layer               |
| `t`  | Toggle tooltip                  |
| `d`  | Toggle drawing layer            |
| `1`  | Set reference opacity to 50     |
| `2`  | Set reference opacity to 100    |
| `3`  | Set reference opacity to 150    |

## Layer System

Work in multiple layers: each layer is a function (e.g., `layer1`, `layer2`, ...) that you can implement to organize your drawing workflow. Toggle each layer’s visibility independently for maximum flexibility.

## Getting Started

1. **Clone this repository**:
   ```bash
   git clone https://github.com/PoulLorca/p5_template.git
   ```

2. **Add reference images** to the `assets` folder (default: `reference.png`).

3. **Open `index.html`** in your browser and start coding in `sketch.js`.

## Example Output

The image below shows a reference image, grid, axes, and tooltip in action:

![Example Output](image1)

## Folder Structure

```
p5_template/
├── assets/        # Place your reference images here
├── index.html     # Starter HTML file
├── sketch.js      # Main p5.js sketch file
├── style.css      # Styling for your project
└── README.md      # Project documentation
```

## Customization

- Add or edit drawing layers in `sketch.js` (e.g., `layer1`, `layer2`, ...).
- Adjust grid size, colors, or shortcut keys as needed.

## License

This project is provided as-is for educational and creative use.

---
Made with [p5.js](https://p5js.org/)