// Exercise 3
function reverseString(str){
  let revstr = "";
  for (var i = str.length-1; i>=0; i--){
    revstr = revstr + str[i];
  }
  return revstr;
}

console.log(reverseString("Hello"));