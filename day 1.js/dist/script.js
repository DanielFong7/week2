console.log("Hello World");
var name="Muzaffar";
console.log(name);

var greeting = "Hello "+name;
console.log(greeting);

var a= 10;
var b= 3;
console.log(a);
console.log(b);

var sum = a+b;
console.log(sum);
var minus = a-b;
console.log(minus);
var product = a*b;
console.log(product);
var division = a/b;
console.log(division);
// This is the remainder of a division operation a / b = 3 with (1) remainder
var modulus = a%b;
console.log(modulus);

// 4 ) boolean,there are only 2 values true or false

var hungry = true;
var tired = false;
console.log(hungry);
console.log(tired);
// Important operation ! , && or ||

// Exclamation mark always give the reverse
console.log(!hungry);

// Or is || ,one of it needs to be true for it to be true
var breakfast = hungry || tired;
console.log(breakfast);

// AND is &&, both need to be true for it to be true
var longbreak = hungry&& tired;
console.log(longbreak);

//You are going to use all the data type: , string, number, boolean, array, object, its operation and control flow(if else, for loop), and combine with control flow to solve a question or a logic/buisness rules

// 1) Procedural (from top to bottom).
// 2) Conditional , depend - you might need to ignore and jump certain steps, if els
// 3) Repetition : you keep doing it until it reach a certain condition, X times - for loop, while (FCC)


//Scenario 1 using == sign
if (tired == true){
  console.log("Let's have a break");
}
else {
  console.log("Let's continue the class");
}

//Scenario 2 - using < or > sign

var age = 20;
if (age > 18){
  console.log("You can see the movie");
}




//Scenario 2 -more than 1 conditions
if (age < 13){
  console.log("You cannot see the movie");
}
else if (age < 18){
  console.log("You can see with parental guidance");
}
else {
  console.log("You can see the movie");
 
}

// 1) Create the statement to check if a number is odd or even

var testnum = 10
if (testnum % 2 ==0){
  console.log(testnum+'is an even number');
}
else {
  console.log(testnum+'is an odd number');
}

// 2 ) Exersice

var ticketprice = 100;
var age = 56;
if (age < 18){
  console.log(ticketprice* 0.5+' is your price');
}
else if (age < 40){
  console.log(ticketprice+ ' is your price');
}
else if(age < 65){
  console.log(ticketprice * 0.75 + ' is your price');
}
else {
  console.log(ticketprice * 0.5+ ' is your price');
}


/// Repetition
// For loop (repeat X times)
// From ; until / ; every iteration add by 1// i++ i =i+1
for (var i = 0; i < 10; i++){
  console.log(i);
}

// From 10; until 0; but every iteration minus by 1 // i-- =i-1
for (var i = 10;i > 0; i--){
  console.log(i);
}
// From 1; until 10; but every interation time by 2 //  i+= =i*2
for (var i = 1; i<10; i+=2){
  console.log(i);
}
// 2) Exercise

var lines = 12;
var multiplier = 5
for (var i = 1; i <= lines; i++){
  console.log(i+' x '+multiplier+ ' = '+ i*multiplier);
}


// 3) Exercise

for (var X = 1; X<100; X++){
  if (X % 3 == 0){
    console.log('Fizz')
  }
  if (X % 5 == 0){
    console.log('Buzz')
  }
  if ( (X % 3 !=0) && (X % 5 !=0) ){
    console.log(X)
  }
}