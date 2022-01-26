const circleArea = (radius) => {
    let r = Number(radius);
    if (!isNaN(r)) {
        if (r < 0)
            console.log(`Radius: ${r} and radius can't be negative.`);
        else
            console.log(`Radius: ${r} and circle area: ${Math.PI * r * r}.`);
    }
    else {
        console.log(`Radius: ${radius} is Not a Number`);
    }
}

const circleCircumference = (radius) => {
    let r = Number(radius);
    if (!isNaN(r)) {
        if (r < 0)
            console.log(`Radius: ${r} and radius can't be negative.`);
        else
            console.log(`Radius: ${r} and circle circumference: ${2 * Math.PI * r}.`);
    }
    else {
        console.log(`Radius: ${radius} is Not a Number`);
    }
}

module.exports = { circleArea, circleCircumference }
