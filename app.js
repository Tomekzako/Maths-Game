document.addEventListener('DOMContentLoaded', function () {

    let playing = false;
    let score;
    const startBtn = document.querySelector('.startreset');
    const gameOver = document.querySelector('.gameOver');
    const timer = document.querySelector('.timer');
    const wrong = document.querySelector('.wrong');
    const correct = document.querySelector('.correct');
    const question = document.querySelector('.question');
    let action;
    let timeremaining;
    let correctAnswer;


    startBtn.addEventListener('click', function () {

        if (playing == true) {
            location.reload();
        } else {
            playing = true;
            score = 0;
            document.querySelector('#scoreValue').innerHTML = score;
            show(timer);
            startBtn.innerHTML = "Reset Game";
            timeremaining = 10;
            startCounting();
            hide(gameOver);
            createQuestion();
        }
    });

    function startCounting() {
        action = setInterval(function () {
            timeremaining -= 1;
            document.querySelector('.timerValue').innerHTML = timeremaining;

            if (timeremaining == 0) {
                stopCounting();
                show(gameOver);
                gameOver.innerHTML = "<p>Game Over!!!</p><p>Your Score is " + score + ".</p>";
                hide(timer);
                hide(correct);
                hide(wrong);
                playing = false;
                startBtn.innerHTML = "Start Game";
            }
        }, 1000)
    }

    function stopCounting() {
        clearInterval(action);
    }

    function show(name) {
        name.style.display = "block";
    }

    function hide(name) {
        name.style.display = "none";
    }

    function createQuestion() {
        let x = (Math.round(Math.random() * 9) + 1);
        let y = (Math.round(Math.random() * 9) + 1);
        let correctPosition = (Math.round(Math.random() * 3) + 1);
        correctAnswer = x * y;
        question.innerHTML = x + "x" + y;
        document.querySelector("#box" + correctPosition).innerHTML = correctAnswer;

    }
});