

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

var userluckynumber = prompt("enter your lucky number?", "14")
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
} else if (useryear < 1986) {
  alert("welcome")
} else {
  alert("hi")
}






var favAnimal = prompt(" what is your favorite animal from : tiger, lion, jaguar");

while (favAnimal != "tiger" && favAnimal != "lion" && favAnimal != "jaguar") {
  favAnimal = prompt("please enter on of :tiger , lion , jaguar");
}

document.write("<img src='ltj.jpg'/>");



var x = prompt("how many stars do you rate my website from 0-5?"); {
  for (var i = 0; i < 5; i++) {
    var output =''
    while (x != "1" && x != "2" && x != "3" && x != "4" && x != "5") {
      x = prompt("please enter from 0-5");
      output = output + "<img src='star.png' />";
       console.log(i, "hi", x);
    }

  }
  
  
}


var x = prompt("how many times do you want to see a star image ?")

var starsFun = function () {
  var output = '';
  var i = 0;
  while (i < x) {

    output = output + "<img src='star.png' />";

    console.log(i, output);

    i++;
  }

  return output;

}


for(var i=0 ;i<5;i++){
    console.log(i)
   console.log(i<5);
    document.write("<<img src='star.png' />");
 }

var pressabutton;
var r = confirm("Press a button!");
if (r == true) {
  pressabutton = "You pressed OK!";
} else {
  pressabutton = "You pressed Cancel!";

}







console.log(add(4,1));
//result will be 5
function add(x,y){
  var result = x+y;
  return result;
}


console.log(add(1,1));
//result will be 2
  var sub = function(x,y){
    
    var result = x-y;
    //result will be 0
    return result; 
  } 

var firstNum = 10;
var secondNum = 5 ;

var addOutput= add(firstNum,secondNum);
//10+5=10
var subOutput = sub(firstNum,secondNum);
//10-5=5
console.log(addOutput,subOutput);
//in console will display 15 & 5




