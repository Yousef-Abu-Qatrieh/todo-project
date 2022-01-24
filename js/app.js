var name = prompt("enter your name :")
var gender = prompt("enter your gender :")
var age = prompt("enter your age ")
if (gender == "male") {
    alert("Welcome Mr " + name)
} else if (gender == "female") {
    alert("Welcome Ms " + name)
}
else {
    alert("Welcome")

}




if (age > 0) {
    console.log(age)

}
else {
    alert("Invalid Input")
}

function answers(){
    let resultsAnswers=[]

let question1 = prompt("are you graduated ?? ")
question1.toLowerCase();
while (question1 != "yes" && question1 != "no" && question1 != "y" && question1 != "n") {
    
    if(!""){
        alert("invalid")
   }
    question1 = prompt("are you graduated ?? Hint : yes or y / no or n ")
}
resultsAnswers.push(question1);
  
   
    
let question2 = prompt("are you working ?? ")
question2.toLowerCase();
while (question2 != "yes" && question2 != "no" && question2 != "y" && question2 != "n") {
    
    if(!""){
        alert("invalid")
   }
    question2 = prompt("are you working ?? Hint : yes or y / no or n ")
}
resultsAnswers.push(question2);



let question3 = prompt("are you single ??")
question3.toLowerCase();
while (question3 != "yes" && question3 != "no" && question3 != "y" && question3 != "n") {
    
    if(!""){
        alert("invalid")
   }
    question3 = prompt("are you single ?? Hint : yes or y / no or n ")
}
resultsAnswers.push(question3);

console.log(resultsAnswers)
}
answers()