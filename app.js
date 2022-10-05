const keys = document.querySelectorAll(".key")
let keyPressed = '';
let displayValue = '';
let value = 0;
let operator = '';
const display = document.querySelector(".display")
const numbers = ['0','1','2','3','4','5','6','7','8','9',',']
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", (e) => {
        keys[i].classList.add("pressed")
        keyPressed = e.target.textContent
       // display.innerHTML = keyPressed

        if (numbers.includes(keyPressed)) {
            displayValue += keyPressed
            display.innerHTML = displayValue
        }else{
            switch (keyPressed){
                case 'AC': 
                    clear();
                break
                case '+':
                    value = Number(displayValue);
                    operator = '+'
                    clear();
                break
                case '=':
                    const res = calculate(operator, value, Number(displayValue))
                    clear();
                    display.innerHTML = res;
                break
            }
        }
    })
    keys[i].addEventListener("transitionend", () => {
        if (keys[i].classList.contains("pressed")) {
            keys[i].classList.remove("pressed")
        }
    })
}

function clear(){
    displayValue = ''
    display.innerHTML= '0'
}

function calculate(op, n1, n2){
    let result = 0
    switch (op) {
        case '+':
            result = n1 + n2
        break
        //case '-'
    }
    return result
}


// detectar la 