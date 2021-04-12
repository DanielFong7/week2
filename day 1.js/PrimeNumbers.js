function Prime(num) {
  for (var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}
function displa(n) {
  var arr = [2];
  for (var i = 3;i < n; i+= 2) {
    if (Prime(i) ) {
      arr.push(i);
    }
  }
  console.log(arr);
}
display(1000);
