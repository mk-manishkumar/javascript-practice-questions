// to input a mathematical expression as string but make it perform as mathematical calculation

const calculator = (str) => {
    return eval(str);
}

const output = calculator("49/7*2-3");
console.log(output);