var line = 7;

for (var i = 0; i < line; i ++){
  
  for(var j =0; j < i+1; j++){
    document.write("#");
  }
  document.write("<br/>") 
}
for (var i = 0; i < line; i++){
  for (var j = 0; j < line-i-1; j++){
    document.write("#");
  }
  
  document.write("<br/>")
}