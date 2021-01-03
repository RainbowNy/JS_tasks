function repaintGridOnPage(grid) {
    const gridOnPage = document.getElementById('grid');
    let rowOfGrid;
    let cellOfGrid;

    clearGridOnPage(gridOnPage);

    if (checkGridForValidData(grid)) {
        for (let row of grid) {
            rowOfGrid = document.createElement('tr');
            for (let elem of row) {
                if (elem) {
                    cellOfGrid = document.createElement('td');
                    cellOfGrid.colSpan = elem.width;
                    cellOfGrid.rowSpan = elem.height;
                    rowOfGrid.appendChild(cellOfGrid);
                }
            }
            gridOnPage.appendChild(rowOfGrid);
        }
    }
}

function checkGridForValidData(grid) {
    if (typeof grid != 'object' || !grid.length) {
        alert('Invalid grid');
        return false;
    }

    return true;
}

function clearGridOnPage(gridOnPage) {
    gridOnPage.innerHTML = '';
}