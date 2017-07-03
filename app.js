document.addEventListener('DOMContentLoaded', function () {

    let playing = false;
    let score;
    const startBtn = document.querySelector('.startreset');
    const gameOver = document.querySelector('.gameOver');
    const timer = document.querySelector('.timer');
    let action;
    let timeremaining;


    startBtn.addEventListener('click', function () {

        if (playing == true) {
            location.reload();
        } else {
            playing = true;
            score = 0;
            document.querySelector('#scoreValue').innerHTML = score;
            timer.style.display = 'block';
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
                gameOver.style.display = "block";
                gameOver.innerHTML = "<p>Game Over!!!</p><p>Your Score is " + score + ".</p>";
                timer.style.display = 'none';
            }
        }, 1000)
    }

    function stopCounting() {
        clearInterval(action);
    }

});