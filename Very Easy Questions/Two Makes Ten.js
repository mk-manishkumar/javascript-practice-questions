//to check if one of them is 10 or if their sum is 10

const makesTen = (a,b) => {
    return ((a==10) || (b == 10) || (a+b==10))
}

const output = makesTen(3,2);
console.log(output);