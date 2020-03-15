class Calculator {
    constructor() {
        this.flag = false;
        this.first = '';
        this.second = '';
        this.operator = '';
    }

    clearInput() {
        this.operator = '';
        this.first = 0;
        this.second = 0;
        this.flag = false;
        input.value = '';
        history.innerHTML = '';
    }

    writeDecimal() {
        if (this.operator === '') {
            if (!this.first.includes('.') && this.first.length > 0) {
                this.first += '.';
                this.addDot();
            }
        } else {
            if (!this.second.includes('.') && this.second.length > 0) {
                this.second += '.';
                this.addDot();
            }
        }
    }

    addDot() {
        history.innerHTML += '.'
        input.value += '.';
    }

    writeNumber(number) {
        if (!this.flag) {
            this.first += number;
            this.writeHistoryNumber(number);
        } else {
            this.second += number;
            this.writeHistoryNumber(number);
        }
    }

    writeHistoryNumber(number) {
        input.value += number;
        history.innerHTML += number;
    }

    writeOperator(operator) {
        this.operator = operator;
        if (!this.flag && input.value.length !== 0) {
            input.value += operator;
            history.innerHTML += operator;
            this.flag = true;
        } else {
            this.operator = operator;
            input.value = input.value.substring(0, input.value.length - 1);
            history.innerHTML = history.innerHTML.substring(0, history.innerHTML.length - 1);
            history.innerHTML += operator;
            input.value += operator;
            this.flag = true;
        }
    }

    historyWrite() {
        history.innerHTML += '=' + input.value + '<br>';
        this.flag = false;
        this.first = input.value;
        this.second = 0;
    }

    equal() {
        input.value = '';
        switch (this.operator) {
            case this.operator = "+":
                input.value = parseFloat(this.first) + parseFloat(this.second);
                this.historyWrite();
                break;
            case this.operator = "-":
                input.value = parseFloat(this.first) - parseFloat(this.second);
                this.historyWrite();
                break;
            case this.operator = "*":
                input.value = parseFloat(this.first) * parseFloat(this.second);
                this.historyWrite();
                break;
            case this.operator = "/":
                if (this.second === '0') {
                    this.clearInput();
                } else {
                    input.value = parseFloat(this.first) / parseFloat(this.second);
                    this.historyWrite();
                }
                break;
        }
        history.scrollTop = history.scrollHeight - history.clientHeight;
        history.innerHTML += this.first;
        this.operator = '';
    }
}