var score = 32;

if (score >= 80) {
    console.log('You got an A+')
}
else if (score >= 70 && score<= 79){
    console.log("You got an A");
}
else if (score >= 60 && score<= 69){
    console.log("You got an A-");
}
else if (score >= 50 && score<= 59){
    console.log("You got a B");
}
else if (score >= 40 && score<= 49){
    console.log("You got a C");
}
else if (score >= 33 && score<= 39){
    console.log("You got a D");
}
else {
    console.log("You Failed!");
}
