function fromGridToArray(grid) {
    let arrayOfCells = [];

    if(checkForValidGrid(grid)) {
        for (const rowOfCells of grid) {
            for (const cell of rowOfCells) {
                arrayOfCells.push(cell);
            }
            arrayOfCells.push("split");
        }
    }

    return arrayOfCells;
}

function checkForValidGrid(grid) {
    if (typeof (grid) != "object" || grid.length === undefined || grid.length === 0) {
        alert('Invalid format of grid');
        return false;
    }

    for (let row of grid) {
        if (typeof (row) != "object" || row.length === undefined || row.length === 0) {
            alert(`Invalid format of row at ${grid.indexOf(row) + 1} position`);
            return false;
        }
    }

    return true;
}