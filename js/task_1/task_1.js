function generateGrid(width, height) {
    width = Number(width);
    height = Number(height);
    const matrixOfCells = [];
    let rowOfCells;

    if(checkForInvalid(width) || checkForInvalid(height)){
        alert('Invalid data of size of grid');
        return [[]];
    }

    for (let row = 0; row < height; row++) {
        rowOfCells = [];
        for (let column = 0; column < width; column++) {
            rowOfCells.push({
                width: 1,
                height: 1,
                top: row,
                left: column,
            });
        }
        matrixOfCells.push(rowOfCells);
    }

    return matrixOfCells;
}

function checkForInvalid(data){
    return data === 0 || isNaN(data) || !isFinite(data);
}