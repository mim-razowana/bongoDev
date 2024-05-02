const score1 = document.getElementById('score');
const btn = document.getElementById('calculate');
const result = document.getElementById('result');

function grade() {
    const score = parseInt(score1.value);
    console.log(typeof score);

    if (score <= 100 && score >= 80) {
        result.innerHTML = '<h1>A+</h1>';
    } else if (score <= 79 && score >= 70) {
        result.innerHTML = '<h1> A </h1>';
    } else if (score <= 69 && score >= 60) {
        result.innerHTML = '<h1> A- </h1>';
    } else if (score <= 59 && score >= 50) {
        result.innerHTML = '<h1> B </h1>';
    } else if (score <= 49 && score >= 33) {
        result.innerHTML = '<h1> C </h1>';
    } 
    else {

        result.innerHTML = '<h1> F </h1>';
    }
};

btn.addEventListener('click', grade);