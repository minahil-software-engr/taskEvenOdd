* This project checks whether a given number is Even or Odd using three different methods in JavaScript.
* First, I planned the basic logic on paper: a number is Even if it divides completely by 2, otherwise it is Odd.
* I used prompt() to take input from the user and converted it into a number using Number().
* I added validation checks so empty inputs and non-numeric values are rejected with proper alerts.
* In Method 1, I used the Modulo operator (%) to divide the number by 2 and check if the remainder is 0.
* Method 1 was very simple, readable, and easy to write.
* In Method 2, I researched and used the Bitwise AND operator (&) by checking the last binary bit of the number.
* I learned that if the last binary bit is 0, the number is Even, and if the last binary bit is 1, the number is Odd.
* In Method 3, I used Repeated Subtraction (-2) without using % or & operators.
* For Method 3, the code repeatedly subtracts 2 from the number until 0 or 1 remains (0 means Even, 1 means Odd).
* To handle negative numbers in Method 3, I used Math.abs() to convert negative values into positive ones so the loop does not run infinitely.
* One challenge I faced was that decrementing the variable inside the loop overwrote the user's original number.
* I solved this challenge by creating a separate variable named original_number to store the initial input safely.
* I tested all three methods with different test cases like positive numbers (8, 7), negative numbers (-8, -7), and zero (0).
* In terms of time complexity, Modulo (%) has O(1) time complexity because it runs in a single step.
* Bitwise (&) also has O(1) time complexity because it directly evaluates the last binary bit.
* Repeated Subtraction (-2) has O(n) time complexity because the loop runs multiple times depending on how large the number is.
* Through this project, I learned that Modulo is best for readability, Bitwise is best for raw speed, and Repeated Subtraction is great for building loop logic.
