function minMaxAvg(arr){

let min =arr[0];
let Max =arr[0];
let Avg =arr[0];

for (var i = 1; i < arr.length; i++){
  if (arr[i] > Max) {
    Max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
  Avg = Avg + arr[i];
}
  return [min, Max, Avg / arr.length]
}