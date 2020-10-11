const colors = { blue: 3, green: 3, pink: 3 };

const BOX_SIZE = 4;

function boxToothBrushes(colors) {
  let result = [];
  let leftovers = [];
  initialBoxing(colors, result, leftovers);
  leftoverBoxing(result, leftovers);
  return result;
}

function initialBoxing(colors, result, leftovers) {
  //fills as many boxes using only 1 color per box, the remaining
  //brushes are stored in leftovers
  for (color in colors) {
    let count = colors[color];
    while (count > BOX_SIZE) {
      let completedBox = {};
      completedBox[color] = BOX_SIZE;
      result.push(completedBox);
      count -= BOX_SIZE;
    }
    if (count > 0) {
      leftovers.push({ color: color, count: count });
    }
  }
}

function leftoverBoxing(result, leftovers) {
  //fills the left over boxes

  //sorting the leftovers by ascending order
  let sortedLeftOvers = leftovers.sort((a, b) => {
    return a.count - b.count;
  });
  //smaller function
  let left = 0; //start of the array
  let right = sortedLeftOvers.length - 1; //end of the array
  let currTotal = 0;
  let currBox = {};
  while (left <= right) {
    let leftColor = sortedLeftOvers[left].color;
    let leftAmount = sortedLeftOvers[left].count;
    let rightColor = sortedLeftOvers[right].color;
    let rightAmount = sortedLeftOvers[right].count;

    if (currTotal === BOX_SIZE) {
      currTotal = 0;
      result.push(currBox);
      currBox = {};
    } else if (currTotal < BOX_SIZE) {
      if (currTotal + rightAmount <= BOX_SIZE) {
        currBox[rightColor] = rightAmount;
        currTotal += rightAmount;
        right -= 1;
      } else {
        currBox[leftColor] = Math.min(leftAmount, BOX_SIZE - currTotal);
        leftAmount -= currBox[leftColor];
        sortedLeftOvers[left].count = leftAmount;
        currTotal += currBox[leftColor];
        if (leftAmount === 0) {
          left += 1;
        }
      }
    }
  }

  //current box has brushes but was not able to be filled.
  //add it to resulting boxes
  if (currBox) {
    result.push(currBox);
  }
}

console.log(boxToothBrushes(colors));
