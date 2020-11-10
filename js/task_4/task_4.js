function fromArrayToGrid(arrayOfCells) {
    const grid = [];
    let rowOfCells = [];

    if(checkForValidArrayOfCells(arrayOfCells)) {
        for (const cell of arrayOfCells) {
            if (cell === 'split') {
                grid.push(rowOfCells);
                rowOfCells = [];
                continue;
            }

            rowOfCells.push(cell);
        }
    }

    return grid;
}

function checkForValidArrayOfCells(arrayOfCells) {
    if(typeof(arrayOfCells) != 'object' || arrayOfCells.length === undefined || arrayOfCells.length === 0){
        alert('Invalid format of array of cells');
        return false;
    }

    return true;
}