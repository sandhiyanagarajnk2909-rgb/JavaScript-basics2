/* function greet(name) {
    console.log('Hello ' + name);

}

greet('John');
 */

let num = 9;

function OddOrEven(num){
    if (num % 2 == 0) {
       return 'Even'; 
    }
    else{
        return 'Odd';
    }
}
console.log (OddOrEven(num))