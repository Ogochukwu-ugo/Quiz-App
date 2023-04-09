// const finalScore = localStorage.getItem('mostRecentScore');
// document.getElementById('final-score').textContent = finalScore;

const initials = document.getElementById('initials');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

initials.addEventListener('keyup', () => {
    // console.log(initials.value);
    saveScoreBtn.disabled = !initials.value; //If there is a value in the initials input, the btn will be enabled else it will be disabled.
});

const saveHighScore = e => {
    e.preventDefault();
    console.log("Clicked saveHighScore")
}