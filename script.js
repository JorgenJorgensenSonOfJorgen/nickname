//Overly contrived nickname generator

//global variables
let names = []
let thenames = []
let fnInputEl = document.getElementById("first-name")
let lnInputEl = document.getElementById("last-name")
let containerEl = document.getElementById("container") 

//convert .txt data to string data
function convertData(rawData){
    return rawData.text();
}

//create array thenames
fetch("thenames.txt").then(convertData).then(processData);

function processData(stringData) {
    thenames = stringData.split(/\r?\n/)
}
//create array names (no the) 

fetch("names.txt").then(convertData).then(processData1)

function processData1(stringData) {
    names = stringData.split(/\r?\n/)
}

//event Listeners (buttons)
document.getElementById("random").addEventListener("click",genRand)
document.getElementById("all").addEventListener("click",genAll)

//generate random nicknames
function genRand(){
    //generate random name
    if (Math.random()*(names.length + thenames.length) < names.length) {
        containerEl.innerHTML = fnInputEl.value + ' "' + names[Math.floor(Math.random() * names.length)] +'" ' + lnInputEl.value
    //generate random thename
    } else {
        containerEl.innerHTML =fnInputEl.value + ' "the ' + thenames[Math.floor(Math.random() * thenames.length)] +'" ' + lnInputEl.value
    }
}
//generate all nicknames
function genAll() {
    let outputStr = ""
    //generate names
    for(i = 0; i <names.length; i ++) {
        outputStr += `<div>${fnInputEl.value} "${names[i]}" ${lnInputEl.value}</div>`
    }
    outputStr += "<hr>"
    //generate thenames
    for(i = 0; i <thenames.length; i ++) {
        outputStr += `<div>${fnInputEl.value} "the ${thenames[i]}" ${lnInputEl.value}</div>`
    }
    containerEl.innerHTML = outputStr
}