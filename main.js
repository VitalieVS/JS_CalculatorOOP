class Calculator {
    constructor() {
        this.flag = false;
        this.first = 0;
        this.second = 0;
        this.operator = '';
    }

    clearInput() {
        this.operator = '';
        this.first = 0;
        this.second = 0;
        this.flag = false;
        input.value = '';
    }

    writeNumber(number) {
        if (!this.flag) {
            this.first += number;
            input.value += number;
        } else {
            input.value += number;
            this.second += number;
        }
    }

    writeOperator(operator) {
        this.operator = operator;
        if (!this.flag && input.value.length !== 0) {
            input.value += operator;
            this.flag = true;
        }
    }

    equal() {
       switch (this.operator){
           case this.operator = "+":
               input.value = '';
               input.value = parseInt(this.first) + parseInt(this.second);
               this.flag = false;
               this.first = parseInt(this.first) + parseInt(this.second);
               this.second = 0;
               break;
           case this.operator = "-":
               input.value = '';
               input.value = parseInt(this.first) - parseInt(this.second);
               this.flag = false;
               this.first = parseInt(this.first) - parseInt(this.second);
               this.second = 0;
               break;
           case this.operator = "*":
               input.value = '';
               input.value = parseInt(this.first) * parseInt(this.second);
               this.flag = false;
               this.first = parseInt(this.first) * parseInt(this.second);
               this.second = 0;
               break;
           case this.operator = "/":
               input.value = '';
               input.value = parseInt(this.first) / parseInt(this.second);
               this.flag = false;
               this.first = parseInt(this.first) / parseInt(this.second);
               this.second = 0;
               break;
       }
    }
}


const input = document.querySelector(".calculator-screen");
let calculator = new Calculator();

const addListener = () => {
    const keys = document.querySelectorAll("button");
    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", () => {
            if (keys[i].classList.contains("number")) {
                calculator.writeNumber(keys[i].value);
            } else if (keys[i].classList.contains("operator")) {
                calculator.writeOperator(keys[i].value);
            } else if (keys[i].classList.contains("all-clear")) {
                calculator.clearInput();
            }
            else if (keys[i].classList.contains("equal-sign")){
                calculator.equal();
            }
        });
    }
};

addListener();