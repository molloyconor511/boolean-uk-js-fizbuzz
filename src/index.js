/* Description
Print all numbers from 1 to 100. However, if a number is divisible by 3, print "Fizz" instead, if it is divisible by 5, print "Buzz", and if it is divisible by both 3 and 5, print "FizzBuzz".

Tips
As always, it's worth thinking about the problem for a while before you start coding. Some good questions to explore would be: How do I know if a number is divisible by another number? How can I check that with code?

Start by writing comments step by step before jumping to the code 
Challenge 1
Would you say this code is easy to extend? For example, let's try adding 2 new rules:
- Also add "Fish" if the number is divisible by 7
- And "Bus" if the number is divisible by 8

Can you think of any way to refactor your code to make it easier to add these rules?

Challenge 2
Print the first number that would result in "FizzBuzzFishBus"
*/

for (i = 1; i <= 100; i++) {

    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i%3 === 0) {
        console.log("Fizz");
    }
    else if (i%5 === 0) {
        console.log("Buzz");
    }
    else if (i%7 === 0) {
        console.log("Fish");
    }
    else if (i%8 === 0) {
        console.log("Bus");
    }
    else console.log(i);
}

/* Challenge 2
Print the first number that would result in "FizzBuzzFishBus"
*/

for (i = 1; i < Infinity; i++) {
    if (i%8 === 0 && i%7 === 0 && i%5 === 0 && i%3 === 0) {
        console.log(i);
        break;
    }
}