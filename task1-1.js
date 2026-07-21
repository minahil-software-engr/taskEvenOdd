/*
  Step 1: Get input from the user using prompt.
  Step 2: Validate if the input is a non-empty, valid number.
  Step 3: Pass the number to checkBitwise function to evaluate the least significant bit (& 1).
  Step 4: Display the result (Even or Odd) using an alert message.
*/
const checkBitwise = (num) => {
    if ((num & 1) === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};
const input = prompt("Enter a number:");
const num = Number(input);
if (input !== null && input.trim() !== "" && !isNaN(num)) {
    const result = checkBitwise(num);
    alert(`Number: ${num}\nResult (Bitwise Method): ${result}`);
} else {
    alert("Please enter a valid number!");
}