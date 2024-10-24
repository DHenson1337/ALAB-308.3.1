/* 
================================Types of Loops that we will cover ===========================
    -for
    - for. . in
    - for . . of
    - while
    -do . . .while
    - labeled statements
*/

/* 
=============================for loops ===============

*/

// for (let i =0;  i< 5; i++){
//     console.log(i);
// }

for(let count =10; count >0; count--){
    console.log(count);
}

console.log("");
for(let count =1; count <10; count+= 2){
    console.log(count);
}

console.log("");
for(let count =2; count <=10; count+= 2){
    console.log(count);
}

console.log("");
for(let count =6; count <=60; count+= 3){
    console.log(count);
}

/* console.log("");
for(let count =1; count <=7; count+= 1){
    console.log("#");
    if (count ==2){
        console.log("##");
    }
    else if (count ==3){
        console.log("###");
    }
    else if (count =4){
        console.log("####");
    }
    else if (count ==5){
        console.log("#####");
    }
    else if (count ==6){
        console.log("######");
    }
    else {
        console.log('#######');
    }

} */

    // output an increasing number of symbols
// ***** we need to declare outString outside of the for loop
//          so that it persists after an individual iteration.
let outString = '';
for(let i=0; i<7; i++) {
    outString = outString + '#';
    console.log(outString);
}

// iteratates 1 to 20

for (i=1; i<=20; i++) {
    // prints even for even numbers
    if (i%2 === 0) {
        console.log('even');
    }
    // prints odd for odd numbers
    if (i%2 === 1) {
        console.log('odd');
    }
    // print out prime for all prime numbers
    //  5, 7, 11, 13, 17, 19
    if (i === 5 || i === 7 || i === 11 || i === 13 || i === 17 || i === 19) {
        console.log("prime");
    }
}

console.log('===== another way =====');

// modifying the above to only print out one statement per number/iteration
for (i=1; i<=20; i++) {
    // print out prime for all prime numbers
    //  5, 7, 11, 13, 17, 19
    if (i === 5 || i === 7 || i === 11 || i === 13 || i === 17 || i === 19) {
        // console.log(i, "is prime");
    }
    // prints even for even numbers
    else if (i%2 === 0) {
        // console.log(i, 'is even');
    }
    // prints odd for odd numbers
    else if (i%2 === 1) {
        // console.log(i, 'is odd');
    }

}

/*
    ========== Looping through iteratables  ==========
    for .. in
    for .. of
*/
// what is an iterable?
//  something where you can go through each element individually
//      examples are strings, arrays, objects...

// ***** str.length this length property is a part of string, and it also is a part of arrays
//          it is useful because we don't always know the length of the array
//          so we can use this property
// const testStr = 'this will work for any length string';
// console.log(`__${testStr}__ has a length of ${testStr.length}`);
// ***** the [] notation is used when we want to access a specific element within a variable
//          remember that counting starts at 0
// console.log(testStr[5])

const str = "Hello World";
for (let i=0; i<str.length; i++) {
    // console.log(str[i]);
}

// ***** for .. in 
// like a for loop from above, where the built in condition is the length fo the string (or iterable we are using)
// and we go up by one each time
// ***** general syntax
//      for (const i in _iterable_variable_) { do some things }
//          this works with arrays and string but not objects
for (const i in str) {
    // console.log(str[i]);
}


// ********* for .. of
for (const char of str) {
    console.log(char);
}
 
/* 

        =================== continue =================
*/
//*****                   continues ends the current iteration of the loop but continues the loop
for (let i=0; i<str.length; i++) {
    console.log("in the loop", i);
    if (str[i] == 'l'){
        continue;
    }
    console.log(str[i]);
}

/* 
    ==================== while loop =============
 */

    let x = 30;
    while (x > 0){
     x /= 2;
     x--;
        
     console.log(x);
    }

    console.log("");
    console.log("");
    console.log("Excercise Part 2");

//Count down to 0 from a given number.

let num1 = 3;
while(num1 > 0){
    num1-=1;
    console.log(num1);
}

// Log integers in multiples of 3 as long as they are less than 35.
while(num1 < 35){
    console.log(num1);
    num1+=3;
}
// +=3   num1 = num1 +3
//Print integers in multiples of 5 as long as they are less than 100.

let num2 =5;
while(num2 <100){
    console.log(num2);
    num2 +=5;
}
console.log("");

//Print integers between 0 and 20 with the following conditions:
/* All numbers divisible by 2 should be multiplied by 3 before they are output.
All other integers should not be output. */

let num3 = 1;
while(num3 < 20){
    if (num3%2 === 0){
        console.log("*",num3 * 3)
    }
    num3++;
}

/*  ====================================d0 . . while loop =====================*/ 
x =10;
do {
    x--;
    console.log(x)
   }   while (x>50)
