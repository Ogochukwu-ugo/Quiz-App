// const highScoresList = document.getElementById(highScoresList);
const highScores =JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores
    .map(score => {
        return`<li class='highscores'>${score.name} - <span>${score.score}</span></li>`;
    })
    .join("");


const back = document.getElementById('back');

back.addEventListener('click', () => {
window.location.href = "./index.html";
});

const clearBtn = document.querySelector('#clearList');
clearBtn.addEventListener('click', () => {
    highScoresList.innerHTML = '';
});