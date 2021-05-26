'use strict';


const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('saveScoreBtn')
const finalScore = document.getElementById('finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})
let textParagraph = document.getElementById('paragraph')
function saveHighScore(e) {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('#')
    textParagraph.textContent = `Thank you  ${score.name} Your Score is ${score.score}`
    let audiob = document.getElementById('audio');

    audiob.innerHTML = '<audio src = "Al Manahel Children program (mp3cut.net) (1).mp3" controls autoplay id="audiobox"> </audio>'




    // audio.src='mixkit-small-group-cheer-and-applause-518.wav';


    username.value = '';
}
let imageShow = document.getElementById('imageid');
// let audio= document.getElementById('audio');
imageShow.src = '../img/javabook.PNG'
