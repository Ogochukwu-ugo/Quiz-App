const initials = document.getElementById('initials');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 4;
// console.log(highScores);

finalScore.innerText = mostRecentScore;

initials.addEventListener('keyup', () => {
    // console.log(initials.value);
    saveScoreBtn.disabled = !initials.value; //If there is a value in the initials input, the btn will be enabled else it will be disabled.
});

const saveHighScore = e => {
    e.preventDefault();
    console.log("Clicked saveHighScore");

    const score = {
        score: Math.floor(Math.random() * 100),
        name: initials.value
    };
    highScores.push(score);

    highScores.sort( (a, b) => b.score - a.score);//If the second score is higher than the first, then the b will move higher than a.
    
    highScores.splice(4); //This is saying at index 4, remove anything after that.

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('./index.html');
    // console.log(highScores);
};

saveScoreBtn.addEventListener('click', saveHighScore);