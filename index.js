// Exercise 1: Age Checker
// Ask the user to enter their age. If they are 18 or older, display "You are an adult." Otherwise, display "You are not an adult."
let age = prompt("Enter your age")
parseInt(age)
if (age >= 18){
  console.log("You are an adult")
} else if (age < 18){
  console.log("You are not an adult")
}

// Exercise 2: Simple Comparison
// Write a program that prompts the user to enter two numbers and displays whether the first number is greater, less than, or equal to the second number.
// Note: make sure you have the correct types!
let num1 = prompt("Enter a number")
parseInt(num1)
let num2 = prompt("Enter another number")
parseInt(num2)
if (num1 > num2){
  console.log("Your first number is greater than your second number.")
} else if (num1 < num2){
  console.log("Your second number is greater than your first number")
} else if (num1 === num2){
  console.log("Both your numbers are equal to each other")
}

// Exercise 3: Even or Odd
// Create a program that asks the user for an integer and then prints whether the number is even or odd. (Google how to check this!)
let evenorOdd = prompt("Enter a number")
parseInt(evenorOdd)
if (evenorOdd % 2 == 0){
  console.log("The number is even")
} else{
  console.log("The number is odd")
}

// Exercise 4: Day of the Week
// Prompt the user to enter a day of the week (e.g., "Monday"). Display a message that says whether it's a weekday or the weekend.
let dayofWeek = prompt("Enter a day of the week")
if (dayofWeek === "Monday" || dayofWeek === "monday"){
  console.log(`${dayofWeek} is a weekday`)
} else if (dayofWeek === "Tuesday" || dayofWeek === "tuesday"){
  console.log(`${dayofWeek} is a weekday`)
} else if (dayofWeek === "Wednesday" || dayofWeek === "wednesday"){
  console.log(`${dayofWeek} is a weekday`)
} else if (dayofWeek === "Thursday" || dayofWeek === "thursday"){
  console.log(`${dayofWeek} is a weekday`)
} else if (dayofWeek === "Friday" || dayofWeek === "friday"){
  console.log(`${dayofWeek} is a weekday`)
} else if (dayofWeek === "Saturday" || dayofWeek === "saturday"){
  console.log(`${dayofWeek} is the weekend`)
} else if (dayofWeek === "Sunday" || dayofWeek === "sunday"){
  console.log(`${dayofWeek} is the weekend`)
}

// Exercise 5: Age Group Classifier
// Prompt the user to enter their age and categorize them into different age groups:
// - 0-12: Child
// - 13-19: Teenager
// - 20-64: Adult
// - 65+: Senior Citizen
  
Age = prompt("Enter your Age")
parseInt(Age)
if (Age <= 12 && Age >= 0){
  console.log("You are a child")
} else if (Age <= 19 && Age >=13){
  console.log("You are a teenager")
} else if (Age <= 64 && Age >= 20){
  console.log("You are an adult")
} else if (Age >= 65){
  console.log("You are a senior citizen")
}

// Exercise 6: Rock, Paper, Scissors Game
// Create a simple rock, paper, scissors game. Prompt the user to enter their choice (rock, paper, or scissors) and then randomly generate the computer's choice. Determine the winner and display the result.





