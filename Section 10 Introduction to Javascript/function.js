function factorial(n) {
    if (isNaN(n) || n < 0) {
        return false;
    }
    n = Number(n);
    if (n <= 1) {
        return 1;
    } else return n * factorial(n - 1);
}

let answer = prompt("Enter a non negative number");

while (!answer || isNaN(answer) || answer < 0) {
    answer = prompt("Please enter a non negative number");
}

alert(answer + "! = " + factorial(answer));