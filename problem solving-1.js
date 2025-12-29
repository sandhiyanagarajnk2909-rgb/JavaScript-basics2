/* let x;
let num = -5
x = (num > 0)?'Possitive Number':(num < 0)?'Negative':'Equal';

console.log(x); */

let year = 2000;

if(year % 4 == 0){
    if(year % 100 == 0){
        if (year % 400 == 0){
            console.log('Its Leap Year')
        }
        else{
            console.log('Its not a Leap Year')
        }
    }    
    else{
        console.log('Leap Year')
    }
}
else{
       console.log('Its not a Leap Year')
}

