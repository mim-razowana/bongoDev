const number1Input = document.getElementById('startnum');
const number2Input = document.getElementById('endnum');
const generateButton = document.getElementById('generate');
const clearButton = document.getElementById('clear');
const tableContainerTopRow = document.getElementById('top-row');
const tableContainerBottomRow = document.getElementById('bottom-row');

function createTableFor(number) {
  const table = document.createElement('table');
  table.className = 'w-full  border-collapse text-center text-[16px] bg-[#fbcfe8] rounded-xl border-[6px]';


  for (let i = 1; i <= 10; i++) {
    const tableRow = document.createElement('tr');
    tableRow.className = 'border-b border-[#fb7185]';

    const leftCell = document.createElement('td');
    leftCell.innerText = `${number} * ${i}`;

    const rightCell = document.createElement('td');
    rightCell.innerText = number * i;

    tableRow.appendChild(leftCell);
    tableRow.appendChild(rightCell);

    table.appendChild(tableRow);
  }

  return table;
}

generateButton.addEventListener('click', function () {
  // Clear any previous tables
  forClearDisplay();

  // Read starting and ending values from input fields
  const startValue = parseInt(number1Input.value);
  const endValue = parseInt(number2Input.value);

  // Calculate the midpoint
  const midpoint = Math.ceil((startValue + endValue) / 2);

  // Calculate the number of tables for each row
  const tablesPerRow = Math.ceil((endValue - startValue + 1) / 2);

  // Generate multiplication tables for the specified range
  for (let number = startValue; number <= endValue; number++) {
    const className = number <= midpoint ? 'table-top' : 'table-bottom'; // Choose class name based on the midpoint
    const table = createTableFor(number, className);

    // Determine which row container to append the table to
    const targetRow = number <= midpoint ? tableContainerTopRow : tableContainerBottomRow;
    
    // Append tables to the appropriate row container
    targetRow.appendChild(table);

    // If the number of tables appended to the top row exceeds the limit, move the excess tables to the bottom row
    if (targetRow.children.length > tablesPerRow) {
      tableContainerBottomRow.appendChild(targetRow.lastChild);
    }
  }
});

function forClearDisplay() {
  tableContainerTopRow.innerHTML = '';
  tableContainerBottomRow.innerHTML = '';
  
};

clearButton.addEventListener('click', function () {
  console.log('clicked');
  forClearDisplay();
  
  return;
});

