const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const compareButton = document.getElementById('compare');
const result = document.getElementById('result');

function compare() {
  const number1 = parseInt(number1Input.value);
  const number2 = parseInt(number2Input.value);

  console.log(typeof number1, typeof number2);

  if (number1 === number2) {
    result.innerHTML = '<h1>Equal</h1>';
  } else if(number1>number2) {
    result.innerHTML = '<h1> number1 is grater than number2 </h1>';
  }else{

    result.innerHTML = '<h1> number2 is grater than number1 </h1>';
  }
}

compareButton.addEventListener('click', compare);