let display = document.getElementById('display');

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteValue(){
    display.value = display.value.toString().slice(0,-1);
}

function calculate(){
    display.value = Number(eval(display.value).toFixed(3));
}
