
let input = document.getElementById('inputBox'); // Get the input box element
let buttons = document.querySelectorAll('button'); // Get all button elements

let currentInput = ""; // Variable to hold the current input value

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText === "=") {
            try {
                currentInput = eval(currentInput); // Evaluate the input expression
                input.value = currentInput; // Display the result in the input box
            } catch (error) {
                input.value = "Error"; // Display error if the expression is invalid
            }
        } else if (e.target.innerText === "AC") {
            currentInput = ""; // Clear the input
            input.value = currentInput;
        } else if (e.target.innerText === "DEL") {
            currentInput = currentInput.slice(0, -1); // Delete the last character
            input.value = currentInput;
        } else {
            currentInput += e.target.innerText; // Add the clicked button's value to the input
            input.value = currentInput;
        }
    });
});
