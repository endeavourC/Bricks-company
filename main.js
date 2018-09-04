window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.preloader').classList.add('loaded');

    let takenQuest = [];
    let currentQuest = [];

    let img = document.querySelector('.category-image');
    let question = document.querySelector('.question');

    function sortArray(array) {
        return array.sort(function () {
            return Math.random() - 0.5;
        });
    }

    function showAnswer(currentAnswer) {
        document.querySelector('.first-answer').innerHTML = currentAnswer[0];
        document.querySelector('.second-answer').innerHTML = currentAnswer[1];
        document.querySelector('.third-answer').innerHTML = currentAnswer[2];
        document.querySelector('.four-answer').innerHTML = currentAnswer[3];
    }
    let currentAnswer;
    let prices = [100, 500, 1000, 2000, 4000, 8000, 16000, 32000, 125000, 250000, 500000, 1000000];
    let value = 0;
    let winPrize;

    function showQuestion() {
        let rand = Math.floor(Math.random() * questions.length);
        if (takenQuest.length < questions.length) {
            for (i = 0; i < takenQuest.length; i++) {
                if (takenQuest[i] === questions[rand]) {
                    return showQuestion();
                }
            }
            console.log(currentQuest)
            console.log(takenQuest);
            takenQuest.push(questions[rand]);
            currentQuest.push(questions[rand]);
            question.innerHTML = currentQuest[0].name;
            img.setAttribute('src', `images/${currentQuest[0].category}.jpg`);
            currentAnswer = [currentQuest[0].correctAnswer, currentQuest[0].answers[0], currentQuest[0].answers[1], currentQuest[0].answers[2]];
            winPrize = prices[value];
            document.querySelector('.prize').innerHTML = "Twoja wygrana: " + winPrize;
            sortArray(currentAnswer);
            showAnswer(currentAnswer);
        }

    };
    showQuestion();
    document.querySelectorAll('.answer').forEach(el => {
        el.addEventListener('click', checkAnswer)
    })
    document.querySelector('.half').addEventListener('click', removeHalf);
    let halfClicked = false;

    function removeHalf() {
        if (!halfClicked) {
            let x = Math.floor(Math.random() * 4);
            let y = Math.floor(Math.random() * 4);
            if (currentQuest[0].correctAnswer === currentAnswer[x] || currentQuest[0].correctAnswer === currentAnswer[y]) {
                return removeHalf();
            } else {
                if (currentAnswer[x] != currentAnswer[y]) {
                    currentAnswer[x] = '';
                    currentAnswer[y] = '';
                    halfClicked = true;
                    showAnswer(currentAnswer)
                    document.querySelector('.half').classList.add('clicked');
                } else {
                    return removeHalf();
                };
            }
        }
        console.log(currentAnswer)
    }
    document.querySelector('.ok').addEventListener('click', function () {
        this.parentElement.classList.remove('on');
    })
    document.querySelector('.friend').addEventListener('click', askFriend);
    let friendAsked = false;
    document.querySelector('.change').addEventListener('click', changeQuestion);
    let questionChanged = false;

    function changeQuestion() {
        if (!questionChanged) {
            currentQuest.length = 0;
            showQuestion();
            questionChanged = true;
            this.classList.add('clicked');
        }
    };

    function askFriend() {
        if (!friendAsked) {
            this.classList.add('clicked');
            let modal = document.querySelector('.friend-modal');
            let modalAnswer = document.querySelector('.friend-modal-answer');
            modalAnswer.innerHTML = currentQuest[0].correctAnswer;
            friendAsked = true;
            modal.classList.add('on');
        }

    }
    let priceDOM = document.querySelectorAll('.price');


    function delayThat(callback, time) {
        return setTimeout(function () {
            callback();
        }, time);
    }

    function doWhenWin() {
        if (value === 10) {
            document.querySelector('.lost-modal').classList.add('on');
            document.querySelector('.lost-modal p').innerHTML = "Wygrałeś 1 000 000 zł!"
        } else {
            currentQuest.length = 0;
            value++;
            priceDOM[value].classList.add('have');
            showQuestion();
            document.querySelectorAll('.answer').forEach(el => {
                el.classList.remove('good')
            })
        }
    }

    function showGreen() {
        document.querySelectorAll('.answer').forEach(el => {
            el.classList.remove('checking')
        })
        this.classList.add('good');
    }

    function showRed() {
        document.querySelectorAll('.answer').forEach(el => {
            el.classList.remove('checking')
        })
        this.classList.add('wrong');
    }

    function doWhenLose() {
        document.querySelector('.lost-modal p').innerHTML = "Przegrałeś twoja wygrana to: " + winPrize;
        document.querySelector('.lost-modal').classList.add('on')
    };

    function replayGame() {
        currentQuest.length = 0;
        winPrize;
        value = 0;
        takenQuest.length = 0;
        friendAsked = false;
        questionChanged = false;
        document.querySelectorAll('.answer').forEach(el => {
            el.classList.remove('checking')
            el.classList.remove('wrong');
            el.classList.remove('good');
        })
        priceDOM.forEach(el => {
            el.classList.remove('have');
        })
        priceDOM[0].classList.add('have');
        this.parentElement.classList.remove('on');
        showQuestion();

    }
    document.querySelector('.replay').addEventListener('click', replayGame);

    function checkAnswer() {

        this.classList.add('checking');
        if (this.innerHTML === currentQuest[0].correctAnswer) {

            delayThat(showGreen.bind(this), 1000)
            delayThat(doWhenWin, 1500);

        } else {
            delayThat(showRed.bind(this), 1000);
            delayThat(doWhenLose, 1100);
        }
    }

});