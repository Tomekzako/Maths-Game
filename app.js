document.addEventListener('DOMContentLoaded', function () {

    let playing = false;
    let score;
    const startBtn = document.querySelector('.startreset');

    startBtn.addEventListener('click', function () {

        if (playing == true) {
            location.reload();
        } else {
            score = 0;
            document.querySelector('#scoreValue').innerHTML = score;
            document.querySelector('.timer').style.display = 'block';
            startBtn.innerHTML = "Reset Game";
        }
    });

});