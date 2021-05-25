

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question:
            " Which of the following is correct to write “Hello World” on the web page?",
        choice1: "document.write(“Hello World”)",
        choice2: "print(“Hello World”)",
        choice3: "System.out.println(“Hello World”)",
        choice4: "response.write(“Hello World”)",
        answer: 1,
    },
    {
        question: " Which of the following is not a valid JavaScript variable name?",
        choice1: " _java_and_ java _names",
        choice2: "javaandjava%",
        choice3: "2java",
        choice4: "None of the above",
        answer: 3,
    },
    {
        question: "What is negative infinity in Java script?",
        choice1: " number in JavaScript, derived by dividing negative number by zero ",
        choice2: "number in JavaScript, derived by dividing number by zero",
        choice3: "number in JavaScript, derived by dividing number by a negative number.",
        choice4: " Any of below",
        answer: 4,
    },
    {
        question: 'What are JavaScript Data Types?',
        choice1: 'Number',
        choice2: 'String',
        choice3: 'Boolean',
        choice4: 'Object',
        answer: 2,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()