const profitableGamble = (prob, prize, pay) => {
    return (prob * prize > pay);
}

const output = profitableGamble(0.2,50,9);
console.log(output);