function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}



ready(() => {

    this.answer = [];

    this.yesSymbols = ["😘","👏","💖","😋","✌️"]

    Array.from(document.getElementsByTagName("button")).forEach((element) => {
        element.addEventListener('click', (clicked) => {
            this.answer.push(element.dataset.number);

            if(this.answer.length > this.correntAnswer.length) {
                no();
            }
            else if(this.answer.length === this.correntAnswer.length) {
                if(this.answer.join("") === this.correntAnswer.join("")) {
                    yes();
                } else {
                    no();
                }
            }

            answerElement.innerText = this.answer.join("");
        });
    });
    
    
    const numberElement = document.getElementById("number");
    const answerElement = document.getElementById("answer");
    const resultElement = document.getElementById("result");

    

    function no() {
        resultElement.innerText = "❌"
        
        

        setTimeout(thinking, 1000);
    }

    function yes() {
        resultElement.innerText = this.yesSymbols[Math.floor(Math.random() * this.yesSymbols.length)];
        setTimeout(() => thinking(true), 1000);
        
    }

    function thinking(correct) {
        resultElement.innerText = "🤔"

        if(correct) {
            next();
        } else {
            this.answer = [];
            answerElement.innerText = ""
        }
    }

    function rnd() {
        return Math.floor(Math.random() * 8) + 2;
    }
    
    function next() {
        console.log("new")
        const a = rnd();
        const b = rnd();
        this.correntAnswer = (a*b).toString().split("");

        numberElement.innerText = `${a}×${b} = `

        this.answer = [];
        answerElement.innerText = ""
    }

    next();


});