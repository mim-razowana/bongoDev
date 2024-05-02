let count = 0;
const displayElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener('click', incrementCount);
decrementButton.addEventListener('click', decrementCount);

function incrementCount() {
    if (count < 10) {
        count += 1;
        displayElement.innerText = count;
    } else {
        alert("The count is already at 10!");
    }
}

function decrementCount() {
   
    if (count > 0) {
        count -= 1;
        displayElement.innerText = count;
    } else {
        alert("The count cannot be less than 0!");
    }
}

