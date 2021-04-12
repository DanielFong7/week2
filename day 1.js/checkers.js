var lines = 9;

for (var a = 0; a < lines; a++){  
for (var b = 0; b < lines; b++){
  if((b % 2==0 && a % 2 == 0 ) || (b % 2 == 1 && a %2 == 1)){
    document.write('#');
  }
  else {
    document.write("0");
  }
}
 document.write("<br/>")
}
