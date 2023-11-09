const calcFactorial = (num) => {
    let factorial;
    if(num === 1){
        factorial = 1;
    }else {
        factorial = num * calcFactorial(num - 1);
    }
    return factorial;
}

window.addEventListener("load", () => {
    const inputUser = document.querySelector("input");
    const button = document.querySelector("button");
    const pResult = document.getElementById("result");

    button.addEventListener("click", () => {
        const number = inputUser.valueAsNumber;
        const factorial = calcFactorial(number);
        pResult.innerHTML = `The factorial of ${number} is ${factorial}`
    });
})