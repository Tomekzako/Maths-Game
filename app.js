document.addEventListener('DOMContentLoaded', function () {

    let playing = false;
    let score;
    const startBtn = document.querySelector('.startreset');
    const gameOver = document.querySelector('.gameOver');
    const timer = document.querySelector('.timer');
    const wrong = document.querySelector('.wrong');
    const correct = document.querySelector('.correct');
    let action;
    let timeremaining;


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

});