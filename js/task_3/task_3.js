function fromGridToArray(grid) {
    let arrayOfCells = [];

    if(checkForValidGrid(grid)) {
        for (const rowOfCells of grid) {
            for (const cell of rowOfCells) {
                if(cell != null){
                    arrayOfCells.push(cell);
                }
            }
        }
    }

    return arrayOfCells;
}

function checkForValidGrid(grid) {
    if (typeof (grid) != "object" || !grid.length) {
        alert('Invalid format of grid');
        return false;
    }

    for (let row of grid) {
        if (typeof (row) != "object" || !row.length) {
            alert(`Invalid format of row at ${grid.indexOf(row) + 1} position`);
            return false;
        }
    }

    return true;
}