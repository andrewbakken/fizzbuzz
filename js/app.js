$(document).ready(function () {

   //one to twenty
for ( i = 1; i < 101; i++) {
  
  //if divisible by three and five, write fizzbuzz
  if ( i % 3===0 && i % 5===0) {
    document.write("FIZZBUZZ ");
  }
  
  //if divisible by five, write BUZZ
  else if (i % 5===0) {
    document.write("BUZZ ");
  }
  
  //if divisible by three, write fizz
  else if (i % 3===0) {
    document.write("FIZZ ");
  }
  
  else {
    document.write(i );
  }
  
}

});
