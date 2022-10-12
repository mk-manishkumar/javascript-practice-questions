const footballPoints = (wins,draws,losses) => {
    return (wins*3 + draws*1 + losses*0);
}

const output = footballPoints(3,4,2);
console.log(output);