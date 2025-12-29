//JavaScript Basics

let tried = false;

if(tried) {
    console.log('The Best time is do it is NOW!');
} else {
    console.log('Sometimes later becomes never, So Do it now');
}
    
//2.Function

function neverGiveUp(name) {
    return `I belive in you, ${name}`;

}

console.log(neverGiveUp("Sandy"));

//3. Loop

for(let day = 1; day <= 3; day++ ){
    console.log(` Day ${day}: I'm still trying.`)
}