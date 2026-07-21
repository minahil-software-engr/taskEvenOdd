/*
  Step 1: Get input from the user using prompt.
  Step 2: Validate if the input is a non-empty, valid number.
  Step 3: Convert the number to absolute value and pass it to checkLoop function.
  Step 4: Repeatedly subtract 2 until the number is less than 2.
  Step 5: Check if the remaining value is 0 (Even) or 1 (Odd).
  Step 6: Display the result using an alert message.
*/

const checkLoop = (num) => {
    let n = Math.abs(num);
    while (n >= 2) {
        n -= 2;
    }
    if (n === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

const input = prompt("Enter a number:");
const num = Number(input);

if (input !== null && input.trim() !== "" && !isNaN(num)) {
    const result = checkLoop(num);
    alert(`Number: ${num}\nResult (Loop Method): ${result}`);
} else {
    alert("Please enter a valid number!");
}