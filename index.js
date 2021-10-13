c9 //1
function sumOfFourAndSix() {
    let sum = 0
    for (let i = 1; i < 1001; i++) {
        if (i % 4 === 0 && i % 6 === 0)
            return sum += i
    };

};
return sum

//2
function oddAndEvenInFifteen() {
    for (let i = 0; i < 16; i++) {
        console.log(i)
        if (i % 2 === 0) {
            return i + "even"

        }
        else {
            if (i % 3 === 0) {
                return i + "odd"
            }
            else {
                return null
            }

        }
    }

}
//3
function assignGrade(grade) {
    if (grade > 90) {
        return "A"
    }
    else if (grade > 80) {
        return "B"
    }
    else if (grade > 70) {
        return "C"
    }
    else if (grade > 64) {
        return "D"
    }else {
        return "F"
    }
}