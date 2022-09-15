const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt('Enter a number from 1-7: '));

result = ''

if (num1 === 1){
    result += 'Monday'
} else if (num1 === 2){
    result += 'Tuesday'
}else if (num1 === 3){
    result += 'Wednesday'
}else if (num1 === 4){
    result += 'Thursday'
}else if (num1 === 5){
    result += 'Friday'
}else if (num1 === 6){
    result += 'Saturday'
}else if (num1 === 7){
    result += 'Sunday'
}else{
    result += 'Error'
}

console.log(result)


