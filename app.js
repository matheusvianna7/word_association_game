const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 1
    },
    {
        quiz: ['close', 'near', 'next'],
        options: ['trace', 'adjacent'],
        correct: 1
    },
    {
        quiz: ['foreign', 'national', 'ethnic'],
        options: ['mad', 'country'],
        correct: 1
    },
    {
        quiz: ['assume', 'insight', 'weather'],
        options: ['forecast', 'sustainable'],
        correct: 0 
    },
    {
        quiz: ['fast', 'quick', 'prompt'],
        options: ['charity', 'rapid'],
        correct: 1 
    }
]

let score = 0
let clicked = []
scoreDisplay.textContent = score

function populateQuestions(){
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = '✒ Question'
        questionBox.append(logoDisplay)
        
        question.quiz.forEach(tip => {
            const tipText = document.createElement('p')
            tipText.textContent = tip
            questionBox.append(tipText)
        })

        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        question.options.forEach((option, optionIndex) => {
            const questionBtn = document.createElement('button')
            questionBtn.classList.add('question-btn')
            questionBtn.textContent = option
            questionButtons.append(questionBtn)
            questionBtn.addEventListener('click', () => checkAnswer(answerDisplay, questionBtn, option, optionIndex, question.correct))

        })
        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display')
        questionBox.append(answerDisplay)

        questionDisplay.append(questionBox)
    })
}
populateQuestions()

function checkAnswer(answerDisplay, questionBtn, option, optionIndex, correctAnswer){
    if(optionIndex === correctAnswer){
        score += 10
        scoreDisplay.textContent = score
        addResult(answerDisplay, 'Correct!')
    } else {
        score -= 10
        scoreDisplay.textContent = score
        addResult(answerDisplay, 'Wrong!')
    }

    clicked.push(option)
    questionBtn.disabled = clicked.includes(option)
}

function addResult(answerDisplay, answer){
    answerDisplay.textContent = answer
}