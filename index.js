// change clearup to oprt
const display = document.querySelector(".display")
const btn = document.querySelectorAll(".clearup");
const dot = document.querySelector("#dot");
const clearAll = document.querySelector(".clear");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const sqrt = document.querySelector(".sqrt");
const square = document.querySelector(".square");
const pi = document.querySelector(".pi");

btn.forEach((item)=>{
    item.addEventListener("click",()=>{
        if (display.innerText == "0") {
            display.innerText = item.innerText;
        } else {
            display.innerText += item.innerText;
        }
    });
});

dot.addEventListener("click", ()=>{
    display.innerHTML += dot.innerText;
});

clearAll.addEventListener("click", ()=>{
    display.innerText = "0";
});

del.addEventListener("click", ()=>{
    if (display.innerText != "" && display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0,-1)
    } else {
        display.innerText = "0"
    }
});

equal.addEventListener("click", ()=>{
    try {
        display.innerText = eval(display.innerText)
    } catch (error) {
        display.innerText = "syntax error"
    }
});

// eval automatically converts items to a javascript code

sqrt.addEventListener("click",()=>{
    let ansr = Math.sqrt(display.innerText);
    display.innerText = ansr.toFixed();
});

square.addEventListener("click",()=>{
    display.innerText = Math.pow(display.innerText, 2);
});

pi.addEventListener("click",()=>{
    display.innerText = Math.PI * display.innerText;
});