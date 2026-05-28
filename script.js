const questions = [

{
    question: "Which country is known as the Land of Festivals?",
    answers: [
        { text: "Sri Lanka", correct: false },
        { text: "India", correct: true },
        { text: "Singapore", correct: false },
        { text: "Philippines", correct: false },
    ]
},

{
    question: "Who won Oscar awards 36 times?",
    answers: [
        { text: "James Bond", correct: false },
        { text: "Walt Disney", correct: true },
        { text: "Ronaldo", correct: false },
        { text: "Virat Kohli", correct: false },
    ]
},

{
    question: "Which city is known for the Golden Gate Bridge?",
    answers: [
        { text: "Singapore", correct: false },
        { text: "San Francisco", correct: true },
        { text: "Ahmedabad", correct: false },
        { text: "Los Angeles", correct: false },
    ]
},

{
    question: "Which is considered the busiest city in India?",
    answers: [
        { text: "Mumbai", correct: true },
        { text: "Bengaluru", correct: false },
        { text: "Ahmedabad", correct: false },
        { text: "Los Angeles", correct: false },
    ]
},

{
    question: "Which country is the leading producer of tea?",
    answers: [
        { text: "India", correct: false },
        { text: "China", correct: true },
        { text: "USA", correct: false },
        { text: "Papua New Guinea", correct: false },
    ]
}

];


let ques = document.querySelector(".here");

let opt1 = document.querySelector(".opt1");
let opt2 = document.querySelector(".opt2");
let opt3 = document.querySelector(".opt3");
let opt4 = document.querySelector(".opt4");

let next = document.querySelector(".next");
let scores=0;
let sc=document.querySelector(".score");

let currentQuestion = 0;

function showQuestion(){

    let q = questions[currentQuestion];

    ques.innerHTML = q.question;

    opt1.innerHTML = q.answers[0].text;
    opt2.innerHTML = q.answers[1].text;
    opt3.innerHTML = q.answers[2].text;
    opt4.innerHTML = q.answers[3].text;

    // resets background color
    opt1.style.backgroundColor = "";
    opt2.style.backgroundColor = "";
    opt3.style.backgroundColor = "";
    opt4.style.backgroundColor = "";




    // enable buttons again
    opt1.disabled = false;
    opt2.disabled = false;
    opt3.disabled = false;
    opt4.disabled = false;
}

showQuestion();

next.addEventListener("click", function(){

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    }
    else{

    alert("Quiz has been finished");
    resetGame();
}

});


opt1.addEventListener("click", function(){

    let q = questions[currentQuestion];

    if(q.answers[0].correct === true){
        scores++;
         opt1.style.backgroundColor="green";
    
        sc.innerHTML=scores;
    }
    else{
        opt1.style.backgroundColor="red";
       
    }
    sc.innerHTML = scores + "/5";

    disableButtons();

});
opt2.addEventListener("click", function(){

    let p = questions[currentQuestion];

    if(p.answers[1].correct === true){
        scores++;
          opt2.style.backgroundColor="green";
    
         sc.innerHTML=scores+"/5";
    }
     else{
        opt2.style.backgroundColor="red";
       
    }
    sc.innerHTML = scores + "/5";

    disableButtons();

});
opt3.addEventListener("click", function(){

    let r = questions[currentQuestion];

    if(r.answers[2].correct === true){
        scores++;
         opt3.style.backgroundColor="green";
   
        sc.innerHTML=scores;
    }
     else{
        opt3.style.backgroundColor="red";
       
    }
    sc.innerHTML = scores + "/5";

    disableButtons();

});
opt4.addEventListener("click", function(){

    let s = questions[currentQuestion];

    if(s.answers[3].correct === true){
        scores++;
        opt4.style.backgroundColor="green";
    
         sc.innerHTML=scores;
    }
     else{
        opt4.style.backgroundColor="red";
     }
     sc.innerHTML = scores + "/5";

    disableButtons();
        
        

});
function disableButtons(){

    opt1.disabled = true;
    opt2.disabled = true;
    opt3.disabled = true;
    opt4.disabled = true;

}




function resetGame(){

    currentQuestion = 0;

    scores = 0;

    sc.innerHTML = "0/5";

    showQuestion();

}