var evalExpression = '';
var lastChar = null;

var buttons = document.getElementsByTagName('button');
// keyboard event
document.addEventListener('keydown', keyAction);

for(var i=0 ; i<buttons.length; i++){
    buttons[i].addEventListener('click', buttonAction)
}

function buttonAction(){
    // Numbers 1-9

    if (this.getAttribute('class') == 'number'){
        evalExpression = evalExpression + this.getAttribute('data-value');
        lastChar = this.getAttribute('data-value');
        document.getElementById('display').innerText = evalExpression;
    }

    // Decimal 

    else if (this.getAttribute('id') == 'decimal'){
        if (lastChar == null || lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/' || lastChar == '%' ){
            evalExpression = evalExpression + '0.';
        }
    
        else{
            evalExpression = evalExpression + '.';
        }
    
        lastChar = '.'
        document.getElementById('display').innerText = evalExpression;
    }

    // Zero
    else if (this.getAttribute('id') == 'zero'){
        if (lastChar == null){
            return;
        }
        evalExpression = evalExpression + buttonzero.getAttribute('data-value');
        lastChar = buttonzero.getAttribute('data-value');
        document.getElementById('display').innerText = evalExpression;
    }

    // Sign
    
    else if (this.getAttribute('id') == 'sign'){
        lastTolastChar = lastChar;
        if (lastChar == '+/-'){
            evalExpression  = evalExpression.slice(0,-1);
            lastChar = lastTolastChar;
        }
        else{
            evalExpression = evalExpression + '-';
            lastChar = '+/-';
        }
        document.getElementById('display').innerText = evalExpression;
    }

    // Oprators

    else if (this.getAttribute('class') == 'operator' || this.getAttribute('class') == 'operator redButton'){
        if (lastChar == null || lastChar == this.getAttribute('data-value')){
            return;
        }
    
        else if (lastChar == '.') {
            evalExpression  = evalExpression.slice(0,-1) + ' ' + this.getAttribute('data-value') + ' ';
        }
    
        else if (lastChar == '-' || lastChar == '*' || lastChar == '/' || lastChar == '%' || lastChar == '+'){

            evalExpression  = evalExpression.slice(0,-2) + this.getAttribute('data-value') + ' ';
        }
    
        else{
            evalExpression = evalExpression + ' ' + this.getAttribute('data-value') + ' ';
        }
    
        lastChar = this.getAttribute('data-value');
        document.getElementById('display').innerText = evalExpression;
    }


    // AC Clear Console
    else if (this.getAttribute('id') == 'clearAC'){
        evalExpression = '';
        lastChar = null;
        document.getElementById('display').innerText = '0';
    }

    // Equals

    else if(this.getAttribute('id') == 'equals'){
        if (lastChar == null || lastChar == '+'  || lastChar == '-'  || lastChar == '*'  || lastChar == '/'  || lastChar == '%'){
            return 
        }
    
        else if(lastChar == '.') {
            evalExpression  = evalExpression.slice(0,-1);
        }
    
        try {
            evalExpression = eval(evalExpression);
            lastChar = evalExpression % 10;
            document.getElementById('display').innerText = evalExpression;
        } catch (error) {
            evalExpression = '';
            lastChar = null;
            document.getElementById('display').innerText = 'Invalid Expression';
        }
    }
}


// Keyboard events :
// -----------------------------------

function keyAction(ev){


    // Numbers 1-9

    if (ev.key == '1' || ev.key == '2' || ev.key == '3' || ev.key == '4' || (ev.key == '5') || ev.key == '6'
        || ev.key == '7' || ev.key == '8' || ev.key == '9'){

        evalExpression = evalExpression + ev.key;
        lastChar = ev.key
        document.getElementById('display').innerText = evalExpression;

    }

    // Decimal 

    else if (ev.key == '.'){
        if (lastChar == null || lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/' || lastChar == '%' ){
            evalExpression = evalExpression + '0.';
        }
    
        else{
            evalExpression = evalExpression + '.';
        }
    
        lastChar = '.'
        document.getElementById('display').innerText = evalExpression;
    }

    // Zero
    else if (ev.key == '0'){
        if (lastChar == null){
            return;
        }
        evalExpression = evalExpression + ev.key;
        lastChar = ev.key;
        document.getElementById('display').innerText = evalExpression;
    }

    // Oprators

    else if (ev.key == '+' || ev.key == '-' || ev.key == '*' || ev.key == '/' || ev.key == '%'){
        if (lastChar == null || lastChar == ev.key){
            return;
        }
    
        else if (lastChar == '.') {
            evalExpression  = evalExpression.slice(0,-1) + ' ' + ev.key + ' ';
        }
    
        else if (lastChar == '-' || lastChar == '*' || lastChar == '/' || lastChar == '%' || lastChar == '+'){

            evalExpression  = evalExpression.slice(0,-2) + ev.key + ' ';
        }
    
        else{
            evalExpression = evalExpression + ' ' + ev.key + ' ';
        }
    
        lastChar = ev.key;
        document.getElementById('display').innerText = evalExpression;
    }


    //  Clear Console : Delete button on keyboard
    // Same as 'AC' button on calculator

    else if (ev.key == 'Delete'){
        evalExpression = '';
        lastChar = null;
        document.getElementById('display').innerText = '0';
    }

    // Backspace : Single character deletion
    // else if(ev.key == 'Backspace'){
    //     evalExpression  = evalExpression.slice(0,-1);
     
    // } 


    // Equals

    else if(ev.key == '=' || ev.key == 'Enter'){
        if (lastChar == null || lastChar == '+'  || lastChar == '-'  || lastChar == '*'  || lastChar == '/'  || lastChar == '%'){
            return 
        }
    
        else if(lastChar == '.') {
            evalExpression  = evalExpression.slice(0,-1);
        }
    
        try {
            evalExpression = eval(evalExpression);
            lastChar = evalExpression % 10;
            document.getElementById('display').innerText = evalExpression;
        } catch (error) {
            evalExpression = '';
            lastChar = null;
            document.getElementById('display').innerText = 'Invalid Expression';
        }
    }
}