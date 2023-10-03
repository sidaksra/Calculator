function clearCal(){
    const input = document.getElementById("display")
    input.value="0"
  
}



function appendToDisplay(text){
    const display=document.getElementById("display");
    if (display.value=="0"){
        display.value = ""
    }
    // if(display.value.includes("=") || display.value.includes("Invalid Input")){
    //     display.value =""
    // }
    display.value += text
    
}
function mathToDisplay(value){
    const display=document.getElementById("display");
    // if(display.value.includes("=") || display.value.includes("Invalid Input")){
    //     display.value ="0"
    // }
    display.value += value;

}

const myresult =[]
function calculate(){
    let display=document.getElementById("display");
    try{
        let operation = display.value
        let result = eval(operation)
        display.value = result

        myresult.push({ expression: operation, result: result })
    }
    catch{
        display.value = "Invalid Input"
    }
}
function history() {
    const show = document.getElementById("showHistory");
    show.innerHTML = ""; // Clear the previous history

    myresult.forEach((value, index) => {
        const historyEntry = document.createElement("span");
        historyEntry.innerText = value.expression + " = " + value.result;
        show.appendChild(historyEntry);
    });
}
function backspace() {
    const display = document.getElementById("display");
    const currentValue = display.value;

    // Check if the display has content to delete
    if (currentValue.length > 0) {
        // Remove the last character from the display
        display.value = currentValue.slice(0, -1);
    }
}