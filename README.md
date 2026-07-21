# Even or Odd Checker

This is a JavaScript project that takes a number input from the user and checks whether it is Even or Odd using three different methods.

## Project Files and Methods

1. Modulo Method
File: task1-1.js
Logic: Divides the number by 2 and checks the remainder. If the remainder is 0, the number is Even; otherwise, it is Odd.

2. Bitwise Method
File: task1-2.js
Logic: Checks the last bit of the number in binary format using the bitwise AND operator. If the last bit is 0, the number is Even; otherwise, it is Odd.

3. Subtraction Loop Method
File: Task1.js
Logic: Continuously subtracts 2 from the number until the remaining value is less than 2. If 0 remains, the number is Even; otherwise, it is Odd.

## Comparison: Which Method is Best?

1. Modulo Method (%): BEST FOR GENERAL USE
- Pros: Simple, easy to read, and standard practice in web development.
- Cons: Slightly slower than bitwise operations at a microchip level, but performance difference is negligible in JavaScript.

2. Bitwise Method (&): BEST FOR PERFORMANCE
- Pros: Extremely fast because it works directly at the binary level.
- Cons: Slightly harder for beginners to read.

3. Subtraction Loop Method (-2): WORST METHOD
- Pros: Good for understanding basic logic and loops.
- Cons: Very inefficient. For large numbers like 1,000,000, it runs 500,000 times, causing high memory and CPU usage.

Conclusion:
The Modulo Method is the best choice for clean and readable code. The Bitwise Method is best if maximum performance is needed.

## How to Run

1. Open any of the HTML files in a browser.
2. Enter a number in the prompt window.
3. View the result in the alert box.

## Key Features

1. Input Validation: Rejects empty inputs and non-numeric values.
2. Negative Numbers: Correctly handles positive and negative integers.
