'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function guessNumber(b) {
    let a = 0;
    function inputNumber() {
        a = prompt('Угадай число от 1 до 100?');
        console.log('a: ', typeof(a));
        if (a === null) {
            return alert('Игра окончена!');
        }
        if((!isNumber(a))) {
            alert('Введи число!');
            guessNumber();
        }
        function how(a, b) {
            if (a > b) {
                let ok = confirm ('Загаданное число меньше. Попробуем еще раз?');
                if(ok) {
                    return inputNumber();
                } else {
                    return alert('Ну и зря. Попробывал бы еще раз!');
                }
            } else if (a < b) {
                let ok2 = confirm ('Загаданное число больше. Попробуем еще раз?');
                if(ok2) {
                    return inputNumber();
                } else {
                    return alert('Ну и зря. Попробывал бы еще раз!');
                }
            } else {
                alert('Поздравляю, Вы угадали!!!');
                return;
            }
        }
        how(a, b);    
    }
    inputNumber();
}
guessNumber(5);



