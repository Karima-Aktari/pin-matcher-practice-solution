function getPin() {
    const pin = Math.round(Math.random() * 100000);
    const pinString = pin + '';
    if (pinString.length == 5) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
// pin matching calculation:-
document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const number = event.target.innerText;
        const calcInput = document.getElementById('typed-numbers');
        if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = '';
            }
        }
        else {
            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number;
            calcInput.value = newNumber;
        }

    })

//submit button setting
document.getElementById('submit-btn').addEventListener('click', function () {
    const pin = document.getElementById('display-pin').value;
    const calcInput = document.getElementById('typed-numbers').value;

    if (pin == calcInput) {
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-fail').style.display = 'none';
    }
    else {
        document.getElementById('notify-fail').style.display = 'block';
        document.getElementById('notify-success').style.display = 'none';
    }
})
