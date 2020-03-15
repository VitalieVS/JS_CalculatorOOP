const addListener = () => {
    const keys = document.querySelectorAll("button");
    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", () => {
            switch (true) {
                case keys[i].classList.contains('number'):
                    calculator.writeNumber(keys[i].value);
                    break;
                case keys[i].classList.contains('operator'):
                    calculator.writeOperator(keys[i].value);
                    break;
                case keys[i].classList.contains('all-clear'):
                    calculator.clearInput();
                    break;
                case keys[i].classList.contains('equal-sign'):
                    calculator.equal();
                    break;
                case keys[i].classList.contains('decimal'):
                    calculator.writeDecimal();
                    break;
            }
        });
    }
};