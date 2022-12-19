let stringinput = document.getElementById("evaluatedText");
let count = document.getElementById("letterCount");

stringinput.addEventListener("keyup", ()=>{
    let str = stringinput.value;
    count.innerHTML = str.length;
})