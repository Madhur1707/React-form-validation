# React Form Validation

### This project is a React-based user registration form with client-side validation. It utilizes React hooks, specially useState, to manage form input values and validation state. The **main component is App** (containing the form structure and logic) and **FormInput** (responsible for rendering individual input fields).

# Features

## Dynamic Input Configuration:
The form inputs are dynamically configured through the inputs array in the App component. This allows for easy modification or addition of input fields without changing the core logic.

## Real-time Validation: 
The form provides real-time feedback to users as they input data. Validation messages are displayed under each input field, and the input border turns red for invalid entries.

## Pattern Validation:
Inputs such as username and password have specific patterns defined to ensure they meet certain criteria. This is implemented using the HTML pattern attribute.

## Password Matching: 
The "Confirm Password" input checks if it matches the original password input.

### To extend or modify the form, update the inputs array in the App component or adjust the styling in the CSS files.

***Happy Coding!***
