// Exercise 2
var fibo = [];

fibo[0] = 0;
fibo[1] = 1;
for (var i = 2; i <= 11; i++) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
  console.log(fibo[i]);
}