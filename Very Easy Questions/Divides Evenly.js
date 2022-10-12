// to check if the number is divided without leaving any remainder

const dividesEvenly = (a,b) => {
    return a % b == 0;
}

const output = dividesEvenly(98,7);
console.log(output);