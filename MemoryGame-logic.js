//Define counter for levels, conditional statement
//On incorrect answer reset, conditional statement
//Random function for boxes
//Once a box is shown, remove from array
//On reset push boxes back into the array
//Highlight boxes that have been clicked, to prevent clicking again
//Move to next level after correct answer

//Variables:
var possibleSquares=["Box1","Box2","Box3","Box4","Box5","Box6","Box7","Box8","Box9","Box10","Box11","Box12","Box13","Box14","Box15","Box16"];
var randomSquares=possibleSquares
var winCount = 0;
var levelNumber = 1;
var boxLevel = 0;
var index = 0;
var clickedItem = 0;
var counter = 0;
function checkClick(clickedItem){
    if (clickedItem === randomSquares[index]) {
        index++;
        counter++;
        if(counter===levelNumber){
            index=0;
            levelNumber++;
            counter=0;
            setTimeout(game,1000);
        }
        document.getElementById("level").innerHTML="Level:"+levelNumber;
    } 
    else {
        reset(); 
    }
}
// ask for help on if statement
//Functions:
function reset(){
    randomSquares=possibleSquares.sort(()=>Math.random() - 0.5)
    winCount = 0;
    levelNumber = 1;
    boxLevel = 0;
    index = 0;
    clickedItem = 0;
    document.getElementById("level").innerHTML="Level:" + levelNumber;
}
function start(){
    randomSquares=possibleSquares.sort(()=>Math.random() - 0.5)
    document.getElementById("level").innerHTML="Level:" + levelNumber;
    game();
}
function game(){
    pickBox();
    setTimeout(pickBoxStop,1000);
}
function pickBox(){
    for (let i = 0; i<levelNumber; i++)
        document.getElementById(randomSquares[i]).style.backgroundColor="white"
    }  

    

function pickBoxStop(){
    var boxElements = document.getElementsByClassName("box")
    console.log(boxElements)
    for (var i=0; i<boxElements.length; i++){
        boxElements[i].style.backgroundColor="cornflowerblue"
    }
    //document.getElementsByClassName("box").style.backgroundColor="cornflowerblue"
} 

   //function increaseBLevel(){x;{
    //boel++;

    ////testing to see if it registers when a box is clicked.
    ////creating some scratch to see if it can match the white tile's box.
    ////this section will be commented out soon.
    $("#Box1").click(function() {
        console.log ("you clicked box1");
        clickedItem = "Box1"
        checkClick(clickedItem);
    });
    $("#Box2").click(function() {
        console.log ("you clicked box2");
        clickedItem = "Box2"
        checkClick(clickedItem);
    });
    $("#Box3").click(function() {
        console.log ("you clicked box3");
        clickedItem = "Box3"
        checkClick(clickedItem);
    });
    $("#Box4").click(function() {
        console.log ("you clicked box4");
        clickedItem = "Box4"
        checkClick(clickedItem);
    });
    $("#Box5").click(function() {
        console.log ("you clicked box5");
        clickedItem = "Box5"
        checkClick(clickedItem);
    });
    $("#Box6").click(function() {
        console.log ("you clicked box6");
        clickedItem = "Box6"
        checkClick(clickedItem);
    });
    $("#Box7").click(function() {
        console.log ("you clicked box7");
        clickedItem = "Box7"
        checkClick(clickedItem);
    });
    $("#Box8").click(function() {
        console.log ("you clicked box8");
        clickedItem = "Box8"
        checkClick(clickedItem);
    });
    $("#Box9").click(function() {
        console.log ("you clicked box9");
        clickedItem = "Box9"
        checkClick(clickedItem);
    });
    $("#Box10").click(function() {
        console.log ("you clicked box10");
        clickedItem = "Box10"
        checkClick(clickedItem);
    });
    $("#Box11").click(function() {
        console.log ("you clicked box11");
        clickedItem = "Box11"
        checkClick(clickedItem);
    });
    $("#Box12").click(function() {
        console.log ("you clicked box12");
        clickedItem = "Box12"
        checkClick(clickedItem);
    });
    $("#Box13").click(function() {
        console.log ("you clicked box13");
        clickedItem = "Box13"
        checkClick(clickedItem);
    });
    $("#Box14").click(function() {
        console.log ("you clicked box14");
        clickedItem = "Box14"
        checkClick(clickedItem);
    });
    $("#Box15").click(function() {
        console.log ("you clicked box15");
        clickedItem = "Box15"
        checkClick(clickedItem);
    });
    $("#Box16").click(function() {
        console.log ("you clicked box16");
        clickedItem = "Box16"
        checkClick(clickedItem);
    });
       //end section. 
//}}
