function fromGridToArray(grid) {
    let arrayOfCells = [];

    for(const rowOfCells of grid){
        for(const cell of rowOfCells){
            arrayOfCells.push(cell);
        }
        arrayOfCells.push("split");
    }

    return arrayOfCells;
}