function fromArrayToGrid(arrayOfCells) {
    const grid = [];
    let rowOfCells = [];
    let indexOfCurrentCellFromArray = 0;
    let selectedCellFromArray;
    let numberOfColumns;
    let numberOfRows;

    if (checkForValidArrayOfCells(arrayOfCells)) {
        numberOfColumns = Math.max(...arrayOfCells.map(cell => cell.left + cell.width));
        numberOfRows = Math.max(...arrayOfCells.map(cell => cell.top + cell.height));

        arrayOfCells.sort(compareCells);

        for (let row = 0; row < numberOfRows; row++) {
            for (let column = 0; column < numberOfColumns; column++) {
                selectedCellFromArray = arrayOfCells[indexOfCurrentCellFromArray];

                if ((selectedCellFromArray.left !== column) || (selectedCellFromArray.top !== row)) {
                    rowOfCells.push(null);
                    continue;
                }

                rowOfCells.push(selectedCellFromArray);
                if (indexOfCurrentCellFromArray < arrayOfCells.length - 1) {
                    indexOfCurrentCellFromArray++;
                }
            }

            grid.push(rowOfCells);
            rowOfCells = [];
        }
    }

    return grid;
}

function checkForValidArrayOfCells(arrayOfCells) {
    if (typeof (arrayOfCells) != 'object' || !arrayOfCells.length) {
        alert('Invalid format of array of cells');
        return false;
    }

    return true;
}

function compareCells(firstCell, secondCell) {
    if (firstCell.top < secondCell.top) {
        return -1;
    }

    if (firstCell.top === secondCell.top && firstCell.left < secondCell.left) {
        return -1;
    }

    if (firstCell.top === secondCell.top && firstCell.left === secondCell.left) {
        return 0;
    }

    if (firstCell.top > secondCell.top) {
        return 1;
    }

    if (firstCell.top === secondCell.top && firstCell.left > secondCell.left) {
        return 1;
    }
}