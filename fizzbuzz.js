const prompt = require('prompt-sync')({sigint: true});

let user_num = Number(prompt('Enter your number: '));

let result = ''

if (user_num % 3 === 0 && user_num % 5 === 0){
    result += 'FizzBuzz'
}   else if(user_num % 3 === 0){
    result += 'Fizz'
}   else if(user_num % 5 === 0){
    result += 'Buzz'
}   else{
    result = user_num
}

console.log(result)
