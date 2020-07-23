function main() {
    let scores = [90, 98, 89, 100, 100, 86, 94];
    console.log("Average score for environmental science");
    console.log(average(scores)); // should return 94

    let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
    console.log("Average score for organic chemistry");
    console.log(average(scores2)); //should return 68
}

function average(scores) {
    let res = 0;
    scores.forEach(function (score) {
        res += score;
    });
    res /= scores.length;
    return Math.round(res);
}

main();
