/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1];
    }
    return generate(rowIndex, [[1]]);
};

function generate(rowIndex, rows) {
    var row = [];
    var lastRow = rows[rows.length - 1];

    for (var i = 1; i < lastRow.length; i++) {
        row.push(lastRow[i - 1] + lastRow[i]);
    }
    row.push(1);
    row.unshift(1);
    rows.push(row);
    if (rowIndex === rows.length - 1) {
        console.log(rows)
        return rows[rows.length - 1];
    } else {
        return generate(rowIndex, rows);
    }
}
