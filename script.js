const inputOne = document.getElementById("Input1")
const inputTwo = document.getElementById("Input2")
const buttonAdd = document.getElementById("btnAdd")
const buttonSub = document.getElementById("btnSub")
const buttonMul = document.getElementById("btnMul")
const buttonDiv = document.getElementById("btnDiv")
const output = document.getElementById("result")



buttonAdd.onclick = function addition()
{
    valueOne = Number(inputOne.value)
    valueTwo = Number(inputTwo.value)
    const sum = valueOne + valueTwo
    output.innerText = `${sum}` 
}

buttonSub.onclick = function subtraction(){
    const valueOne = Number(inputOne.value)
    const valueTwo = Number(inputTwo.value)
    const sub = valueOne - valueTwo
    output.innerText = `${sub}`
}

buttonMul.onclick = function multiplication (){
    const valueOne = Number(inputOne.value)
    const valueTwo = Number(inputTwo.value)
    const mul = valueOne * valueTwo
    output.innerText = `${mul}`
}

buttonDiv.onclick = function division (){
    const valueOne = Number(inputOne.value)
    const valueTwo = Number(inputTwo.value)
    const div = valueOne / valueTwo
    output.innerText = `${div}`
}
