console.log("Conditionals");

if(3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 45;

if (student1 == student2){
    console.log("The values are the same");
}

let isTrue = true;
if(isTrue){
    console.log("Yes");
}else{
    console.log("No");
}

//Challenge 1:



// if (age<21){
//     console.log("You are an adult");
// }else{
//     console.log("You are underage");
// }

//age=88;

function ticketCalculator(){
    let age = prompt("Enter your age: ");
    if(age<12){
        price=5;
    }else if(age>12 && age<18){
        price=8;
    }else{
        price=10;
    }
    console.log("Your ticket costs: $"+price+".00")
}