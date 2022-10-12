const convertHoursMinutesIntoSeconds = (hours,minutes) => {

    return (hours*60+minutes)*60;
}

const output = convertHoursMinutesIntoSeconds(1,45);
console.log(output);