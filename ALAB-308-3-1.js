//Part Uno

/* For loop  Psuedo Code
1 - 100

num%3 == 0 && num%5 == 0
Fizz Buzz

num%3 == 0
fizz

num%5 == 0
buzz

else */

for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("Fizz Buzz");
    } else if (num % 3 == 0) {
        console.log("Fizz");
    } else if (num % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

// Part NI
/* declare n (check if its prime)
declare count 
count = n -1

Loop Count--
count > 1

 */
console.log("============Part NI! ===================");

let n = 49;

while (n) {
    //Check if n is a prime number
    n += 1
    let count = n - 1;
    let isPrime = true;
    while (count > 1) {
 
        if (n % count == 0) {
            isPrime = false;
            break;
        }
        count-=1
    }
    if (isPrime){
        console.log(n, "is a Prime number");
        break;
    } 
}


/* let up = 12;


while (count > 1) {
    // console.log(n+"%"+count);
    if (n % count == 0) {
        console.log(n, " is not a Prime number");
        break;
    }
    console.log(n, " is a prime number");
    count -= 1;
} */