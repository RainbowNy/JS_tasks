function fromArrayToGrid(arrayOfCells) {
    const grid = [];
    let rowOfCells = [];
    let indexOfCurrentCellFromArray = 0;
    let selectedCellFromArray;
    let numberOfColumns;
    let numberOfRows;

    if (checkForValidArrayOfCells(arrayOfCells)) {
        numberOfColumns = arrayOfCells.reduce((max, cell) => (cell.left + cell.width) > max ? cell.left + cell.width : max, 0);
        numberOfRows = arrayOfCells.reduce((max, cell) => (cell.top + cell.height) > max ? cell.top + cell.height : max, 0);

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