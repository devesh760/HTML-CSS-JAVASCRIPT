const quizData = [{
        question:"who is the first president of india?",
        a:"v.v Giri",
        b:"Rajendra Prasad",
        c:"Rajiv Ghandi",
        d:"Pt. Jawahar lal nehru",
        correct:'b'
    },{
        question:"Full form of HTTP",
        a:"Hyper Text Markup Language",
        b:"Hybrid Transaction Analytical Processing",
        c:"Hyper Text Transfer Protocol",
        d:"Cascading style sheet",
        correct:'c'
    },{
        question:"who is the current president of America?",
        a:"Donald duck",
        b:"Donald Trump",
        c:"Ivan seldon",
        d:"Mark Zukerburg",
        correct:"b"
    },{
        question:"Correct Javascript Date Of Invention",
        a:"1999",
        b:"1980",
        c:"1992",
        d:"1995",
        correct:'d'
    }
] 
// let currentQuestion = 0;
const answerEls = document.querySelectorAll('.answer');
const submitBtn = document.querySelector('#submitBtn');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deSelected();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;   
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected (){
    let answer = undefined;
    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
function deSelected(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}
submitBtn.addEventListener('click' , ()=>{
      const answer = getSelected();
      if(answer){
          if(answer === quizData[currentQuiz].correct){
              score++;
          }
          currentQuiz++;
          if(currentQuiz < quizData.length)
            loadQuiz();
          else{
              const quiz = document.getElementById('quiz');
              quiz.innerHTML = '<h2>your score ' + score +'/'+ quizData.length;
              submitBtn.innerText ='Retry';
              submitBtn.addEventListener('click',()=>{
                  location.reload();
              })
          }
      }
})

