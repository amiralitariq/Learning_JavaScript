
const textBox = document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
let temp;



function convert(){

    if(toF.checked){
        temp =Number (textBox.value) * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";

    }
    else if(toC.checked){
        temp = (Number(textBox.value) - 32) * 5/9;
        result.textContent = temp.toFixed(1) + "°C";

    }
    else{
        result.textContent = "Select a unit";
    }
}