let selectedCell;
let selectedRow;
let numberOfSelectedCells;
let numberOfSelectedRows;

function paintGrid() {
    if (document.querySelector('.selector') !== null) {
        document.querySelector('.selector').remove();
        return;
    }

    let divOfSelector = document.createElement('div');
    let tableOfSelector = document.createElement('table');

    setupSelector(divOfSelector);
    setupTemplate(tableOfSelector);

    divOfSelector.append(tableOfSelector);

    document.body.append(divOfSelector);
}

function setupSelector(selector) {
    let coordsOfTemplateButton = document.querySelector('.btn-choose').getBoundingClientRect();

    selector.className = 'selector';
    selector.onclick = () => {
        selector.remove();
        repaintGridOnPage(generateGrid(numberOfSelectedCells, numberOfSelectedRows));
    }
    selector.style.left = coordsOfTemplateButton.right / 2 + 'px';
    selector.style.top = coordsOfTemplateButton.bottom + 'px';
}

function setupTemplate(template) {
    let rowOfTable;
    let cellOfRow;

    for (let i = 0; i < 10; i++) {
        rowOfTable = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            cellOfRow = document.createElement('td');
            cellOfRow.className = 'cell';
            rowOfTable.append(cellOfRow);
        }
        template.append(rowOfTable);
    }

    template.className = 'template';
    template.onmouseover = addHighlight;
    template.onmouseout = removeHighlight;
}

function addHighlight(event) {
    selectedCell = event.target.closest('.cell');

    if (selectedCell === null) return;

    selectedRow = selectedCell.parentElement.previousElementSibling;
    numberOfSelectedCells = 1;
    numberOfSelectedRows = 1;

    selectedCell.classList.add('selected');

    while (selectedCell.previousElementSibling !== null) {
        selectedCell = selectedCell.previousElementSibling;
        selectedCell.classList.add('selected');
        numberOfSelectedCells++;
    }

    while (selectedRow !== null){
        selectedCell = selectedRow.firstChild;

        for (let i = 0; i < numberOfSelectedCells; i++) {
            selectedCell.classList.add('selected');
            selectedCell = selectedCell.nextElementSibling;
        }

        selectedRow = selectedRow.previousElementSibling;
        numberOfSelectedRows++;
    }
}

function removeHighlight(event) {
    selectedCell = event.target.closest('.cell');

    if (selectedCell === null) return;

    selectedRow = selectedCell.parentElement.previousElementSibling;
    numberOfSelectedCells = 1;

    selectedCell.classList.remove('selected');

    while (selectedCell.previousElementSibling !== null) {
        selectedCell = selectedCell.previousElementSibling;
        selectedCell.classList.remove('selected');
        numberOfSelectedCells++;
    }

    while (selectedRow !== null){
        selectedCell = selectedRow.firstChild;

        for (let i = 0; i < numberOfSelectedCells; i++) {
            selectedCell.classList.remove('selected');
            selectedCell = selectedCell.nextElementSibling;
        }

        selectedRow = selectedRow.previousElementSibling;
    }
}

