const questions = [  //answers
  {
    question: "1. Where did the Battle of Karbala take place?",
    answer: [
      { text: "Medina", correct: false },
      { text: "Mecca", correct: false },
      { text: "Karbala", correct: true },
      { text: "Damascus", correct: false }
    ]
  },
  {
    question: "2. What is the primary theme of Imam Hussain’s stand at Karbala?",
    answer: [
      { text: "Wealth", correct: false },
      { text: "Justice", correct: true },
      { text: "Expansion", correct: false },
      { text: "Trade", correct: false }
    ]
  },
   {
    question: "3. How old was Ali Asghar (A.S.) when he was martyred in Karbala?",
    answer: [
      { text: "6 months old", correct: true },
      { text: "1 year old", correct: false },
      { text: "3 years old", correct: false },
      { text: "5 years old", correct: false }
    ]
  },
  {
    question: "4. On which Islamic date is the martyrdom of Imam Hussain (A.S.) commemorated?",
    answer: [
      { text: "10th of Ramadan", correct: false },
      { text: "10th of Muharram", correct: true },
      { text: "21st of Ramadan", correct: false },
      { text: "12th of Rabi’ al-Awwal", correct: false }
    ]
  },
  {
    question: "5. How many companions did Imam Hussain (A.S.) have with him in the Battle of Karbala?",
    answer: [
      { text: "72", correct: true },
      { text: "313", correct: false },
      { text: "1000", correct: false },
      { text: "10,000", correct: false }
    ]
  },
  {
    question: "6. What was the name of Imam Hussain’s (A.S.) brother who was martyred in Karbala?",
    answer: [
      { text: "Zaid ibn Ali", correct: false },
      { text: "Imam Hasan (A.S.)", correct: false },
      { text: "Abbas ibn Ali (A.S.)", correct: true },
      { text: "Muslim ibn Aqil", correct: false }
    ]
  },
  {
    question: "7. Who delivered the powerful sermon in the court of Yazid after the tragedy of Karbala?",
    answer: [
      { text: "Zainab bint Ali (A.S.)", correct: true },
      { text: "Fatimah Zahra (A.S.)", correct: false },
      { text: "Ruqayyah bint Hussain (A.S.)", correct: false },
      { text: "Umm Kulthum bint Ali (A.S.)", correct: false }
    ]
  },
  {
    question: "8. Who was the father of Imam Hussain (A.S.)?",
    answer: [
      { text: "Prophet Muhammad (PBUH)", correct: false },
      { text: "Imam Ali (A.S.)", correct: true },
      { text: "Imam Hasan (A.S.)", correct: false },
      { text: "Abu Talib", correct: false }
    ]
  },
  {
    question: "9. What is the significance of the 10th of Muharram in Islamic history?",
    answer: [
      { text: "The birth of Imam Ali (A.S.)", correct: false },
      { text: "The martyrdom of Imam Hussain (A.S.)", correct: true },
      { text: "The Hijra of Prophet Muhammad (PBUH)", correct: false },
      { text: "The conquest of Mecca", correct: false }
    ]
  },
   {
    question: "10. How old was Ali Akbar (A.S.) when he was martyred in Karbala?",
    answer: [
      { text: "18 years old", correct: true },
      { text: "25 years old", correct: false },
      { text: "30 years old", correct: false },
      { text: "40 years old", correct: false }
    ]
   }
  
];

  let QuestionElement = document.querySelector('.Question')
  let answerElement = document.querySelector(".ans-box")
 let nextButton = document.querySelector('.next-btn')
  let currentElementIndex = 0;
  let score = 0;
  function startQuiz(){
      currentElementIndex = 0 ;
      score = 0;
      showQuestion();
  }
  function showQuestion(){
      restate();
      let currentQuestion = questions[currentElementIndex]
      QuestionElement.innerHTML = currentQuestion.question;
      currentQuestion.answer.forEach(answer =>{
          let button = document.createElement("button")
          button.innerHTML = answer.text;
          button.classList.add('button');
          answerElement.appendChild(button);
          if(answer.correct){
              button.dataset.correct = answer.correct
          }
          button.addEventListener("click",selectAns)
      });
  }
  
  function restate(){
      nextButton.style.display = "none";
      while((answerElement.firstChild)){
          answerElement.removeChild(answerElement.firstChild);
      }
  }
  function selectAns(e){
      const selectbtn = e.target;
      const isCorrect = selectbtn.dataset.correct === "true"
    if(isCorrect){
        selectbtn.classList.add("correct")
        score++;
    }
    else{
        selectbtn.classList.add("inCorrect")
    }
    Array.from(answerElement.children).forEach( button =>
    {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct")
        }
        button.disabled ="true"
    });
    nextButton.style.display = "block"
  }
  nextButton.addEventListener("click",()=>
  {
      if(currentElementIndex<questions.length){
         handleNextButton();
      }
      else{
          startQuiz();
      }
  });
  
  
  function handleNextButton(){
      currentElementIndex++;
      if(currentElementIndex<questions.length){
          showQuestion();
      }
      else{
          showScore();
      }
  }
 function showScore(){
      restate();
      QuestionElement.innerHTML =`Your scored is ${score} out of 10 question.`
         nextButton.style.display = "block"
      nextButton.innerHTML = "play Again"
      if(score<5){
          let box = document.createElement('p')
          box.innerHTML = "you require more practice"
          box.classList.add("p")
          answerElement.appendChild(box)
      }
      else if(score===10){
          let box = document.createElement('p')
          box.innerHTML = "Congratulations, you got 1st Division!"
          box.classList.add("p")
          answerElement.appendChild(box)
      }
 }
  startQuiz();