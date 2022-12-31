let a = 7
a = Number.parseInt(a);
if (a < 0) {
  console.log("This is a valid age");
} else if (a<9) {
    console.log("This is a also an invalid age")
}  else if (a<18 && a>=9) {
    console.log("you are able to drive now")
}
else {
  console.log("This is invalid age");
}
console.log("Done")


// What is the use of switch case 
// the switch is used to perform different actions based on different conditions

switch(new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  }
