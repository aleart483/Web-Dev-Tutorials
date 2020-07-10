let firstName = prompt("Hello, what is your first name?");
let lastName = prompt("Cool! what is your last name?");
let age = prompt("Sweet! How old are you?");
let fullName = firstName + " " + lastName;
console.log("Your full name is " + fullName + ".");
console.log("You are " + age + " years old.");
let ageInDays = age * 365.25;
alert("Hi " + fullName + ", you are roughly " + ageInDays + " days old.");