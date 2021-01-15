// Result Variables;

var studentname = prompt('Enter Your Name');
var id = prompt('Enter your Student ID.');
var obtMarks = 0;
var questionAttempt = 0;
var correctAns = 0;
var obtMarks_p = document.getElementById('obtMarks');
var attemptQuestions = document.getElementById('attemptQues');
var correctAns_p = document.getElementById('correctAns');

// =============XX============XX======

// Question 1 Variables;

var choice1;
var answer1 = "Hyper Text Markup Language";
var q1o1 = document.getElementById('question1-opt1');
var q1o2 = document.getElementById('question1-opt2');
var q1o3 = document.getElementById('question1-opt3');
// ==========XX=====XX========

// Question 2 Variables;

var q2o1 = document.getElementById('question2-opt1');
var q2o2 = document.getElementById('question2-opt2');
var q2o3 = document.getElementById('question2-opt3');
var choice2;
var answer2 = "W3C";
// ============XX===XX========= 

// Question 3 Variables;

var q3o1 = document.getElementById('question3-opt1');
var q3o2 = document.getElementById('question3-opt2');
var q3o3 = document.getElementById('question3-opt3');
var choice3;
var answer3 = "<h1>";
// ============XX===XX========= 
// Question 4 Variables;

var q4o1 = document.getElementById('question4-opt1');
var q4o2 = document.getElementById('question4-opt2');
var q4o3 = document.getElementById('question4-opt3');
var choice4;
var answer4 = "<br>";
// ============XX===XX========= 
// Question 5 Variables;

var q5o1 = document.getElementById('question5-opt1');
var q5o2 = document.getElementById('question5-opt2');
var q5o3 = document.getElementById('question5-opt3');
var choice5;
var answer5 = "<body style='background-color:yellow;'>";
// ============XX===XX========= 

// Question 6 Variables;

var choice6;
var answer6 = "<em>";
var q6o1 = document.getElementById('question6-opt1');
var q6o2 = document.getElementById('question6-opt2');
var q6o3 = document.getElementById('question6-opt3');
// ==========XX=====XX========

// Question 7 Variables;

var choice7;
var answer7 = "/";
var q7o1 = document.getElementById('question7-opt1');
var q7o2 = document.getElementById('question7-opt2');
var q7o3 = document.getElementById('question7-opt3');
// ==========XX=====XX========

// Question 8 Variables;

var choice8;
var answer8 = "<ol>";
var q8o1 = document.getElementById('question8-opt1');
var q8o2 = document.getElementById('question8-opt2');
var q8o3 = document.getElementById('question8-opt3');
// ==========XX=====XX========

// Question 9 Variables;

var choice9;
var answer9 = "<ul>";
var q9o1 = document.getElementById('question9-opt1');
var q9o2 = document.getElementById('question9-opt2');
var q9o3 = document.getElementById('question9-opt3');
// ==========XX=====XX========

// Question 10 Variables;

var choice10;
var answer10 = "<title>";
var q10o1 = document.getElementById('question10-opt1');
var q10o2 = document.getElementById('question10-opt2');
var q10o3 = document.getElementById('question10-opt3');
// ==========XX=====XX========

// Question 1 :
function question1(){
    // q1o1.addEventListener('click', function(){
    //     choice1 = q1o1.value;
    // });
    // q1o2.addEventListener('click', function(){
    //     choice1 = q1o2.value;
    // });
    // q1o3.addEventListener('click', function(){
    //     choice1 = q1o3.value;
    // });
    if(q1o1.checked==true){
        choice1 = q1o1.value;
    }
    else
    if(q1o2.checked==true){
        choice1 = q1o2.value;
    }
    else
    if(q1o3.checked==true){
        choice1 = q1o3.value;
    }
    else{console.log("question 1 is not selected");}

    console.log(choice1);

    if(choice1===answer1){
        obtMarks+=2;
        correctAns++;
        questionAttempt++;
    }
    else{
        questionAttempt++;
    }
}

// ======XX=====XX===========

// Question 2:

function question2(){
    if(q2o1.checked==true){
        choice2 = q2o1.value;
    }
    else
    if(q2o2.checked==true){
        choice2 = q2o2.value;
    }
    else
    if(q2o3.checked==true){
        choice2 = q2o3.value;
    }
    else{console.log("question 2 is not selected");}

    console.log(choice2);

    if(choice2===answer2){
        obtMarks+=2;
        correctAns++;
        questionAttempt++;
    }
    else{
        questionAttempt++;
    }
}

// =============XX====XX=============

// Question 3:
function question3(){
    if(q3o1.checked==true){
        choice3 = q3o1.value;
    }
    else
    if(q3o2.checked==true){
        choice3 = q3o2.value;
    }
    else
    if(q3o3.checked==true){
        choice3 = q3o3.value;
    }
    else{console.log("question 3 is not selected");}

    console.log(choice3);

    if(choice3===answer3){
        obtMarks+=2;
        correctAns++;
        questionAttempt++;
    }
    else{
        questionAttempt++;
    }
}
// ==========XX====XX================


// Question 4:

function question4(){
    if(q4o1.checked==true){
        choice4 = q4o1.value;
    }
    else
    if(q4o2.checked==true){
        choice4 = q4o2.value;
    }
    else
    if(q4o3.checked==true){
        choice4 = q4o3.value;
    }
    else{console.log("question 4 is not selected");}

    console.log(choice4);

    if(choice4===answer4){
        obtMarks+=2;
        correctAns++;
        questionAttempt++;
    }
    else{
        questionAttempt++;
    }
}

// =============XX====XX=============
// Question 5:

function question5(){
    if(q5o1.checked==true){
        choice5 = q5o1.value;
    }
    else
    if(q5o2.checked==true){
        choice5 = q5o2.value;
    }
    else
    if(q5o3.checked==true){
        choice5 = q5o3.value;
    }
    else{console.log("question 5 is not selected");}

    console.log(choice5);

    if(choice5===answer5){
        obtMarks+=2;
        correctAns++;
        questionAttempt++;
    }
    else{
        questionAttempt++;
    }
}

// =============XX====XX=============

// Question 6:

function question6(){
    if(q6o1.checked==true){
        choice6 = q6o1.value;
    }
    else
    if(q6o2.checked==true){
        choice6 = q6o2.value;
    }
    else
    if(q6o3.checked==true){
        choice6 = q6o3.value;
    }
    else{console.log("question 6 is not selected");}

    console.log(choice6);

    if(choice6===answer6){
        obtMarks+=2;
        correctAns++;
        questionAttempt++;
    }
    else{
        questionAttempt++;
    }
}

// =============XX====XX=============

// Question 7:

function question7(){
    if(q7o1.checked==true){
        choice7 = q7o1.value;
    }
    else
    if(q7o2.checked==true){
        choice7 = q7o2.value;
    }
    else
    if(q7o3.checked==true){
        choice7 = q7o3.value;
    }
    else{console.log("question 7 is not selected");}

    console.log(choice7);

    if(choice7===answer7){
        obtMarks+=2;
        correctAns++;
        questionAttempt++;
    }
    else{
        questionAttempt++;
    }
}

// =============XX====XX=============

// Question 8:

function question8(){
    if(q8o1.checked==true){
        choice8 = q8o1.value;
    }
    else
    if(q8o2.checked==true){
        choice8 = q8o2.value;
    }
    else
    if(q8o3.checked==true){
        choice8 = q8o3.value;
    }
    else{console.log("question 8 is not selected");}

    console.log(choice8);

    if(choice8===answer8){
        obtMarks+=2;
        correctAns++;
        questionAttempt++;
    }
    else{
        questionAttempt++;
    }
}

// =============XX====XX=============

// Question 9:

function question9(){
    if(q9o1.checked==true){
        choice9 = q9o1.value;
    }
    else
    if(q9o2.checked==true){
        choice9 = q9o2.value;
    }
    else
    if(q9o3.checked==true){
        choice9 = q9o3.value;
    }
    else{console.log("question 9 is not selected");}

    console.log(choice9);

    if(choice9===answer9){
        obtMarks+=2;
        correctAns++;
        questionAttempt++;
    }
    else{
        questionAttempt++;
    }
}

// =============XX====XX=============

// Question 6:

function question10(){
    if(q10o1.checked==true){
        choice10 = q10o1.value;
    }
    else
    if(q10o2.checked==true){
        choice10 = q10o2.value;
    }
    else
    if(q10o3.checked==true){
        choice10 = q10o3.value;
    }
    else{console.log("question 10 is not selected");}

    console.log(choice10);

    if(choice10===answer10){
        obtMarks+=2;
        correctAns++;
        questionAttempt++;
    }
    else{
        questionAttempt++;
    }
}

// =============XX====XX============7

// Result Function:

function result(){
    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    question7();
    question8();
    question9();
    question10();
    document.getElementById('name').innerHTML = studentname;
    document.getElementById('studentid').innerHTML = id;
    obtMarks_p.innerHTML = obtMarks + "/20";
    attemptQuestions.innerHTML= questionAttempt ;
    correctAns_p.innerHTML = correctAns + "/10";
    // to find the percentage;
    var percentage = parseInt(obtMarks)/20*100;
    document.getElementById('percent').innerHTML = percentage +"%";
    // TO find that student is Pass or Fail and print it;
    var status;
    if (percentage>=39){
        status = "Pass";
    }
    else{
        status = "Fail";
    }

    document.getElementById('status').innerHTML = status;
    //  to visible the Result & hide the MCQS
    document.getElementById('form').classList.add('in-visible');
    document.getElementById('result').classList.add('visible')
}
// ============XX====XX====================