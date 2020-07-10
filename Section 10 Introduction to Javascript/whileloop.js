// While Loop Problem Set

// Problem 1: Print all numbers between -10 and 19
let count = -10;
while (count <= 19) {
    console.log(count);
    count++;
}

// Problem 2: Print all even numbers between 10 and 40
count = 10;
while (count <= 40) {
    console.log(count);
    count += 2;
}

// Problem 3: Print all odd numbers between 300 and 333
count = 300;
while (count <= 333) {
    if (count % 2 === 1)
        console.log(count);
    count++;
}

// Problem 4: Print all numbers divisible by 5 and 3 between 5 and 50
count = 5;
while (count <= 50) {
    if (count % 15 === 0)
        console.log(count);
    count++;
}