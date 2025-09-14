const x = Math.floor(Math.random()*11);;
console.log(x);

while (true) {
  let n = prompt("Input a number from 0 to 10 or any symbol for exit");
  //   if (){
  //     alert("Input a number from 0 to 10!");
  //     continue;
  //   }
  if (isNaN(n)) {
    alert("Bye!!!");
    break;
  }
  // To DO: Add if (n < x) 
  if (n > x) {
    alert("Too big!!!");
  }
  else if (n == x) {
    alert("You win!");
    break;
  }
}
