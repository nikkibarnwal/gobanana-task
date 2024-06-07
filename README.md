# react-api-material-ui

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Introduction

`react-api-material-ui` is a React application that utilizes Material-UI for the UI components and Axios for making API calls. The project is set up with essential tools for development, testing, and building the application.

## Installation

To get started with this project, you need to have Node.js installed. Follow the steps below to set up the project:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-repo/react-api-material-ui.git
    cd react-api-material-ui
    ```

2. **Install the dependencies:**
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Project Structure

The project's structure is as follows:

```
react-api-material-ui/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
    │    ├── Navbar.js
│   │    ├── PostList.js
│   │    └──  SearchBar.js
│   │   
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

- `public/`: This folder contains the public assets and the `index.html` file.
- `src/`: This folder contains the React components and other source files.
- `.gitignore`: This file specifies which files and directories to ignore in the Git repository.
- `package.json`: This file contains the project dependencies and scripts.
- `README.md`: This file contains information about the project.

## Dependencies

### Main Dependencies

- **@emotion/react**: ^11.11.4
- **@emotion/styled**: ^11.11.5
- **@mui/material**: ^5.15.19
- **axios**: ^1.7.2
- **react**: ^18.3.1
- **react-dom**: ^18.3.1
- **react-scripts**: 5.0.1

### Development Dependencies

- **@testing-library/jest-dom**: ^5.17.0
- **@testing-library/react**: ^13.4.0
- **@testing-library/user-event**: ^13.5.0
- **web-vitals**: ^2.1.4
- **ajv**: ^7.2.4


