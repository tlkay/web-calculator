//assign values to numOneEl and numTwoEl and operatorEl
function defineValues (){
    let numOneEl = Number(document.getElementById("numOne").value)
    let operatorEl = document.getElementById("operator")
    let operatorSel = operatorEl.options[operatorEl.selectedIndex].value
    let numTwoEl = Number(document.getElementById("numTwo").value)
    let finalAnswerEl = document.getElementById("finalAns")

    finalAnswerEl.innerHTML = calculate(numOneEl, numTwoEl, operatorSel)
}
function calculate(numOneEl, numTwoEl, operatorSel){
    switch(operatorSel){ 
        case "add":
            return (numOneEl) + (numTwoEl)
        case "subtract":
            return (numOneEl) - (numTwoEl)
        case "multiply":
            return (numOneEl) * (numTwoEl)
        case "divide":
            return (numOneEl) / (numTwoEl)
        default:
            return ""
    }
}

//clear the calculator
function clearForm(){
    let numOneEl = document.getElementById("numOne")
    let operatorEl = document.getElementById("operator")
    let numTwoEl = document.getElementById("numTwo")
    let finalAnswerEl = document.getElementById("finalAns")

    numOneEl.value = ""
    numTwoEl.value = ""
    operatorEl.value = ""
    finalAnswerEl.innerHTML = ""
}
