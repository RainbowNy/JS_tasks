function enlargeCell(grid, location, width, height) {
    const cell = grid[location.top][location.left];
    const numberOfRows = grid.length;
    const numberOfColumns = grid[0].reduce((columns) => columns + 1, 0);
    const data = {
        location: location,
        width: width,
        height: height,
        rows: numberOfRows,
        columns: numberOfColumns
    };

    if (checkForInvalidData(data)) {
        return grid;
    }

    if (checkAbleToEnlargeCell(grid, cell, width, height)) {
        for (let column = cell.left; column < (cell.left + width); column++) {
            for (let row = location.top; row < (location.top + height); row++) {
                if (column === cell.left && row === location.top) {
                    continue;
                }
                grid[row][column] = null;
            }
        }
        cell.width = width;
        cell.height = height;
    }

    return grid;
}

function checkForInvalidData(data) {
    if (data.width === 0 || isNaN(data.width) || !isFinite(data.width)) {
        alert('Invalid width for new size of cell');
        return true;
    }

    if (data.height === 0 || isNaN(data.height) || !isFinite(data.height)) {
        alert('Invalid height for new size of cell');
        return true;
    }

    if (data.location.top < 0 || isNaN(data.location.top) || !isFinite(data.location.top)) {
        alert('Invalid location of cell (number of row)');
        return true;
    }

    if (data.location.left < 0 || isNaN(data.location.left) || !isFinite(data.location.left)) {
        alert('Invalid location of cell (number of column)');
        return true;
    }

    if ((data.location.top + data.height) > (data.rows)) {
        alert('New height out of range');
        return true;
    }

    if ((data.location.left + data.width) > (data.columns)) {
        alert('New width out of range');
        return true;
    }

    return false;
}

function checkAbleToEnlargeCell(grid, cell, width, height) {
    if (width > cell.width) {
        for (let column = cell.left + 1; column < (cell.left + width); column++) {
            if (grid[cell.top][column] === null) {
                alert('Unable to enlarge cell by this width');
                return false;
            }
        }
    }

    if (height > cell.height) {
        for (let row = cell.top + 1; row < (cell.top + height); row++) {
            if (grid[row][cell.left] === null) {
                alert('Unable to enlarge cell by this height');
                return false;
            }
        }
    }

    return true;
}