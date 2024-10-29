// FUNCTIONS FOR EACH OPERATOR 

function addNumbers(myArray)
{
    myNewArray = myArray.slice(0, -1);

    const plusIndex = myNewArray.indexOf("+");
    const firstPart = myNewArray.slice(0, plusIndex).join('');
    const secondPart = myNewArray.slice(plusIndex + 1).join('');

    const numResult = parseInt(firstPart, 10) + parseInt(secondPart, 10);
    return(numResult);
}

function subNumbers(myArray)
{
    myNewArray = myArray.slice(0, -1);

    const plusIndex = myNewArray.indexOf("-");
    const firstPart = myNewArray.slice(0, plusIndex).join('');
    const secondPart = myNewArray.slice(plusIndex + 1).join('');

    const numResult = parseInt(firstPart, 10) - parseInt(secondPart, 10);
    return(numResult);
}


function mulNumbers(myArray)
{
    myNewArray = myArray.slice(0, -1);

    const plusIndex = myNewArray.indexOf("x");
    const firstPart = myNewArray.slice(0, plusIndex).join('');
    const secondPart = myNewArray.slice(plusIndex + 1).join('');

    const numResult = parseInt(firstPart, 10) * parseInt(secondPart, 10);
    return(numResult);
}

function divNumbers(myArray)
{
    myNewArray = myArray.slice(0, -1);

    const plusIndex = myNewArray.indexOf("/");
    const firstPart = myNewArray.slice(0, plusIndex).join('');
    const secondPart = myNewArray.slice(plusIndex + 1).join('');

    const numResult = parseInt(firstPart, 10) / parseInt(secondPart, 10);
    return(numResult);
}

let clickedButtonId = [];
let myResult = 0;

const buttons = document.querySelectorAll('.button');

buttons.forEach(button =>{button.addEventListener('click',function(){
    clickedButtonId.push(this.id);
    console.log('Clicked Button ID:', this.id);
    const display = document.querySelector(".display");
    let displayConverted = clickedButtonId.join('');
    display.textContent = `${displayConverted}`;

    if (clickedButtonId[clickedButtonId.length - 1] === "=")
        {
            if (clickedButtonId.includes("+"))
            {
                myResult = addNumbers(clickedButtonId);
                display.textContent = `${myResult}`;
            }
            if (clickedButtonId.includes("-"))
            {
                myResult = subNumbers(clickedButtonId);
                display.textContent = `${myResult}`;
            }
            if (clickedButtonId.includes("x"))
            {
                myResult = mulNumbers(clickedButtonId);
                display.textContent = `${myResult}`;
            }
            if (clickedButtonId.includes("/"))
            {
                myResult = divNumbers(clickedButtonId);
                display.textContent = `${myResult}`;
            }
            clickedButtonId = [];
        }
    if (clickedButtonId[clickedButtonId.length - 1] === "AC")
        {
            clickedButtonId = [];
            display.textContent = "0";
        }
    if (clickedButtonId[clickedButtonId.length - 1] === "%")
        {
            let percentage = clickedButtonId.join('');
            let resultPercentage = parseInt(percentage, 10);
            let finalResult = resultPercentage / 100;
            display.textContent = `${finalResult}`;        
        }
        
});
});



