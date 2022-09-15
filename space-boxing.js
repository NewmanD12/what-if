const prompt = require('prompt-sync')({sigint: true});

planet_array = ['Venus', 'Mars', 'Jupitor', 'Saturn', 'Uranus', 'Neptune']

let weight = Number(prompt('Enter your Earth weight: '));
let planet = Number(prompt('Enter which planet you would like to fight: \n1. Venus\n2. Mars\n3. Jupitor\n4. Saturn\n5. Uranus\n6. Neptune\n'))
let result = 0

if (planet === 1){
    result = weight * .78
}   else if (planet === 2){
    result = weight * .39
}   else if (planet === 3){
    result = weight * 2.65
}   else if (planet === 4){
    result = weight * 1.17
}   else if (planet === 5){
    result = weight * 1.05
}   else if (planet === 6){
    result = weight * 1.23
}   else {
    result = 'Incorrect input, please try again'
}

if (typeof result === 'number'){
    console.log(`Your weight on ${planet_array[planet - 1]} is ${result}`)
}else {
    console.log(result)
}
