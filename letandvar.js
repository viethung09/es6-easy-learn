"use strict"

function greet() {

  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  // i visible here.
  console.log("i = " + i);

}

greet()

console.log("----------------------------");


// let is scoped to the nearest enclosing block ( the for loop )
function letKeywordScope() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  //console.log(i); // error: i is not define in here.
}

letKeywordScope()
