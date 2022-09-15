const prompt = require('prompt-sync')({sigint: true});

let num_of_students = Number(prompt('Enter the number of students you have: '));

let groups_of_3_count = 0
let groups_of_2_count = 0
let left_over_count = 0
result = ''

if (num_of_students % 3 === 0){
    groups_of_3_count = num_of_students / 3
}   else{
    left_over_count = num_of_students % 3
    groups_of_3_count = Number(String(num_of_students / 3).split('.')[0])
}


if(left_over_count === 0){
    result += `You have ${groups_of_3_count} groups of 3 and ${groups_of_2_count} groups of 2.`
}   else if(left_over_count === 2){
    groups_of_2_count = 1
    result += `You have ${groups_of_3_count} groups of 3 and ${groups_of_2_count} group of 2.`
}   else{
    groups_of_2_count = 2
    groups_of_3_count -= 1
    result += `You have ${groups_of_3_count} groups of 3 and ${groups_of_2_count} groups of 2.`
}

console.log(result)