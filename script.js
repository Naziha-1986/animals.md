alert("welcome every one,nice to meet you")

var userName;
userName = "Naziha Qawasmeh";

console.log(userName);

document.write("<p style='color:brown;'> this is " + userName + " from JS </p>")
var x = "10";
var y = 20;

console.log(y == x)
//y and x are not equal in value (20>10)so the result will be false
console.log(y === x);
//y and xare not equal in value and type so the result will be false
console.log(y == 10);
// y is not = 10 

console.log(y == 20);
// y is = 20 in value

console.log(y !== x);
// show the opposite answer

var userluckynumber =prompt("enter your lucky number?","14")
// i wrote "14" to display in the msg as a default number
;
if (userluckynumber == 14) {
  alert("meeee too")
} else {
  alert("that's a good one")
}

var useryear = prompt("enter your year of birth?");

if (useryear == 1986) {
  alert("just like me")
} else if(useryear < 1986) {
  alert("welcome")
} else{
  alert("hi")
}


  var pressabutton;
var r = confirm("Press a button!");
if (r == true) {
  pressabutton = "You pressed OK!";
} else {
  pressabutton = "You pressed Cancel!";
}