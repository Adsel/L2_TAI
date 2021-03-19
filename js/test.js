const DIMENSION = 10;
const SPACING_CHAR = ' ';

for (let y = 1; y <= DIMENSION; y++) {
    let row = '';
    for (let x = 1; x <= DIMENSION; x++) {
        row += x * y + SPACING_CHAR;
    }
    console.log(row);
}
