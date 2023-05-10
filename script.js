const boxes = document.querySelectorAll(".container > div");

console.log(boxes);
const xShape = "X";
const yShape = "O";
const textChange = document.querySelector("h2");
let shape;
let counter = 0;
// haschildnodes
for (let box of boxes) {
  box.addEventListener("click", function () {
    const shape = document.createElement("h3");
    if (box.hasChildNodes()) {
      return;
    } else {
      if (counter % 2 == 0) {
        shape.textContent = xShape; // "X"
      } else {
        shape.textContent = yShape; // "O"
      }
      box.appendChild(shape);
      console.log(box);
      console.log(shape);
      counter++;
      if (counter % 2 == 0) {
        textChange.textContent = "Player X Turn";
      } else {
        textChange.textContent = "Player O Turn";
      }
      console.log(counter);
      // check win condition function here
    }
    if (winner()) {
      alert("You win");
      clearBoard();
    }
  });
  // if (
  //   boxes[0].hasChildNodes() &&
  //   boxes[1].hasChildNodes() &&
  //   boxes[2].hasChildNodes() &&
  //   boxes[0].firstElementChild.textContent ==
  //     boxes[1].firstElementChild.textContent &&
  //   boxes[1].firstElementChild.textContent ==
  //     boxes[2].firstElementChild.textContent
  // ) {
  //   alert("You win");
  //   clearBoard();
  // } else if (
  //   boxes[3].hasChildNodes() &&
  //   boxes[4].hasChildNodes() &&
  //   boxes[5].hasChildNodes() &&
  //   boxes[3].firstElementChild.textContent ==
  //     boxes[4].firstElementChild.textContent &&
  //   boxes[4].firstElementChild.textContent ==
  //     boxes[5].firstElementChild.textContent
  // ) {
  //   alert("You win");
  // } else if (
  //   boxes[6].hasChildNodes() &&
  //   boxes[7].hasChildNodes() &&
  //   boxes[8].hasChildNodes() &&
  //   boxes[6].firstElementChild.textContent ==
  //     boxes[7].firstElementChild.textContent &&
  //   boxes[7].firstElementChild.textContent ==
  //     boxes[8].firstElementChild.textContent
  // ) {
  //   alert("You win");
  // } else if (
  //   boxes[0].hasChildNodes() &&
  //   boxes[3].hasChildNodes() &&
  //   boxes[6].hasChildNodes() &&
  //   boxes[0].firstElementChild.textContent ==
  //     boxes[3].firstElementChild.textContent &&
  //   boxes[3].firstElementChild.textContent ==
  //     boxes[6].firstElementChild.textContent
  // ) {
  //   alert("You win");
  //   clearBoard();
  // } else if (
  //   boxes[1].hasChildNodes() &&
  //   boxes[4].hasChildNodes() &&
  //   boxes[7].hasChildNodes() &&
  //   boxes[1].firstElementChild.textContent ==
  //     boxes[4].firstElementChild.textContent &&
  //   boxes[4].firstElementChild.textContent ==
  //     boxes[7].firstElementChild.textContent
  // ) {
  //   alert("You win");
  //   clearBoard();
  // } else if (
  //   boxes[2].hasChildNodes() &&
  //   boxes[5].hasChildNodes() &&
  //   boxes[8].hasChildNodes() &&
  //   boxes[2].firstElementChild.textContent ==
  //     boxes[5].firstElementChild.textContent &&
  //   boxes[5].firstElementChild.textContent ==
  //     boxes[8].firstElementChild.textContent
  // ) {
  //   alert("You win");
  //   clearBoard();
  // } else if (
  //   boxes[0].hasChildNodes() &&
  //   boxes[4].hasChildNodes() &&
  //   boxes[8].hasChildNodes() &&
  //   boxes[0].firstElementChild.textContent ==
  //     boxes[4].firstElementChild.textContent &&
  //   boxes[4].firstElementChild.textContent ==
  //     boxes[8].firstElementChild.textContent
  // ) {
  //   alert("You win");
  //   clearBoard();
  // } else if (
  //   boxes[2].hasChildNodes() &&
  //   boxes[4].hasChildNodes() &&
  //   boxes[6].hasChildNodes() &&
  //   boxes[2].firstElementChild.textContent ==
  //     boxes[4].firstElementChild.textContent &&
  //   boxes[4].firstElementChild.textContent ==
  //     boxes[6].firstElementChild.textContent
  // ) {
  //   alert("You win");
  //   clearBoard();
  // }

  // haschildnodes
}
// we can make an array of arrays for win conditions
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// boxes
function winner() {
  for (let winCond of win) {
    if (
      boxes[winCond[0]].firstChild &&
      boxes[winCond[1]].firstChild &&
      boxes[winCond[2]].firstChild &&
      boxes[winCond[0]].firstChild.textContent ==
        boxes[winCond[1]].firstChild.textContent &&
      boxes[winCond[0]].firstChild.textContent ==
        boxes[winCond[2]].firstChild.textContent
    ) {
      return true;
    }
  }
  return false;
}

// create function to check win conditions
// if (boxes[win[0].]) {
//   console.log("you win");
// }

function clearBoard() {
  for (let box of boxes) {
    if (box.firstElementChild) {
      box.removeChild(box.firstElementChild);
    }
  }
}
