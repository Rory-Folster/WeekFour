let red = 0;
let yellow = 2;
let green = 1;
let light = 1;

// if (condition) {   
//     // Do something 
//   } else {   
//     // Do some other thing 
//   }

  
//   // Note: This example doesn't contain valid code yet 
// if (light is red) {
//     stop walking 
//   } else {
//     continue walking 
//   }

  
//   if (light is red) { 
//     // Stop walking 
//   } else if (cars around) { 
//     // Stop walking 
//   } else if (yet another condition) { 
//     // Do yet another thing 
//   } else { 
//     // Do the final thing 
//   }

  if (light === red) {
      console.log("STOP")
  }else if (light === green) {
      console.log("GO")
  } else if (light === yellow) {
      console.log("WAIT")
  } else console.log("BROKEN");


let a=5
let b=3

if (a > b) {
    console.log(a)
}else if (b < a) {
    console.log(b)
}
  
// '24' === 24 // False 
// '24' == 24 // True '24' !== 24 // True 
// '24' != 24 // False

// const x = { isHavingFun: true } 
// const y = { isHavingFun: true } console.log(x === y) // false 
// console.log(y == x) // false

let apple = 3; {
if (apple > 0){
    console.log("u have apples")
} else console.log("no apples");
}
const person = 'Jane';
switch (person) {
  case 'Jane':
    console.log('Hi Jane');
    break;
  case 'John':
    console.log('Hi John');
    break;
  case 'Joe':
    console.log('Hi Joe');
    break;
  case 'Mary':
    console.log('Hi Mary');
    break;
  default:
    console.log('Hi');
    break;
}

const foo = 1;
let output = '';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'How ';
    output += 'Old ';
  case 2:
    output += 'Are ';
  case 3:
    output += 'You';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}