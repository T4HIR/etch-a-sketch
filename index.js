const body = document.body;
const container = document.querySelector('.container');
const newGrid = document.querySelector('.new-grid');

getDefaultGrid();

newGrid.addEventListener('click', () => {
  let gridNumber = parseInt(prompt('Enter the length/width of your new grid in terms of box number.', '0'));

  while (gridNumber > 100) {
    gridNumber = parseInt(prompt('Your previous number was too high, please enter another one.', '0'));
  }

  removeGrid(getOldGridNumber());
  getFlexBoxes(gridNumber);
});


function getDefaultGrid() {
  getFlexBoxes(16);
}

function removeGrid(oldGridNumber) {
  console.log(oldGridNumber);
  for (let i = 1; i < (oldGridNumber + 1); i++) {
    const flexBox = document.querySelector(`.flex-box-${i}`);
    flexBox.remove();
  }
}

function getOldGridNumber() {
  let oldGridNumber = 0;
  let leftSide = document.querySelector('.left-side');

  if (leftSide !== null) {
    leftSide.querySelectorAll('.grid-box').forEach(() => {
      oldGridNumber++;
    });
  }

  return oldGridNumber;
}

function getFlexBoxes(gridNumber) {
  for (let i = 1; i < (gridNumber + 1); i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.toggle(`flex-box-${i}`);

    const flexBox = document.querySelector(`.flex-box-${i}`);

    if (i === 1) {
      flexBox.classList.toggle('left-side');
    }
    else if (i === gridNumber) {
      flexBox.classList.toggle('right-side');
    }

    if (gridNumber === 1) {
      flexBox.style.border = 'none';
    }

    function createBoxes(gridNumber) {
      for (let i = 1; i < (gridNumber + 1); i++) {
        const div = document.createElement('div');
        flexBox.appendChild(div);
        div.classList.toggle('grid-box');

        div.addEventListener('mouseover', () => {
          div.classList.toggle('draw');
        })

        if (i === 1) {
          div.classList.toggle('top-row');
        }
        else if (i === gridNumber) {
          div.classList.toggle('bottom-row');
        }

        if (gridNumber === 1) {
          div.style.border = '2px solid black';
        }
      }
    }
    createBoxes(gridNumber);
  }
}









