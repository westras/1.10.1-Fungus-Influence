function result(character){

    const results={
    ellie:"You are Ellie — brave, smart, and determined.",
    joel:"You are Joel — protective and strong.",
    abby:"You are Abby — powerful and relentless."
    }

    const resultBox = document.getElementById("result");
    resultBox.innerText = results[character];
    resultBox.classList.add("show");
}