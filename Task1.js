/*
  Step 1: Get input from the user using prompt.
  Step 2: Validate if the input is a non-empty, valid number.
  Step 3: Pass the number to checkModulo function to check if remainder (% 2) is 0.
  Step 4: Display the result (Even or Odd) using an alert message.
*/

const checkModulo = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

const input = prompt("Enter a number:");
const num = Number(input);

if (input !== null && input.trim() !== "" && !isNaN(num)) {
    const result = checkModulo(num);
    alert(`Number: ${num}\nResult (Modulo Method): ${result}`);
} else {
    alert("Please enter a valid number!");
}