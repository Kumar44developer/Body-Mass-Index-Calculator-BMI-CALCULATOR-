<div align="center">

# BMI Calculator

### Check your Body Mass Index in seconds

A clean web app that calculates your Body Mass Index from your height and weight and classifies the result into a standard health category. Built with vanilla HTML, CSS, and JavaScript, with no dependencies and no build step.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [BMI Categories](#bmi-categories)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

BMI Calculator is a front-end only application that runs entirely in the browser. The user enters gender, age, height in feet and inches, and weight in kilograms. On submit, the app computes the Body Mass Index and displays the value along with its health category. Input is validated so incomplete or invalid entries prompt a clear message.

## Features

- Calculates BMI from height in feet and inches and weight in kilograms
- Classifies results into underweight, normal, overweight, and obese
- Input validation with a helpful message for missing or invalid values
- Instant results rendered without a page reload
- Clean, centered, responsive card layout
- Zero dependencies and no build tooling

## Tech Stack

| Technology | Role |
| --- | --- |
| HTML5 | Form structure and inputs |
| CSS3 | Styling and responsive layout |
| JavaScript | Calculation, validation, and rendering |

## How It Works

On form submission the app reads the height and weight, converts the height to meters, and applies the standard BMI formula of weight in kilograms divided by height in meters squared. The resulting value is matched against standard thresholds to determine the category, and both the value and category are shown in the result area.

## BMI Categories

| Category | BMI Range |
| --- | --- |
| Under Weight | Below 18.5 |
| Normal Weight | 18.5 to 24.9 |
| Over Weight | 25 to 29.9 |
| Obese | 30 and above |

## Project Structure

```
project32/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

No installation or server is required.

Clone the repository:

```bash
git clone https://github.com/Kumar44developer/Body-Mass-Index-Calculator-BMI-CALCULATOR-.git
```

Open `index.html` in any modern browser. For live reloading during development, the VS Code Live Server extension works well.

## Usage

1. Select your gender and enter your age.
2. Enter your height in feet and inches and your weight in kilograms.
3. Click Calculate BMI to see your index and category.

## Roadmap

- Metric and imperial unit toggle
- Visual BMI gauge and category color coding
- Age and gender aware interpretation
- Healthy weight range suggestions
- Result history with local storage

## Contributing

Contributions are welcome. Fork the repository, create a feature branch, commit your changes, and open a pull request with a clear description.

## License

This project is released under the MIT License.

## Author

Created by [Kumar44developer](https://github.com/Kumar44developer).
