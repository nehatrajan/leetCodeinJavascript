/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows, rows) {
    if(numRows === 0) {
        return [];
    } if (numRows < 2) {
        return [[1]]
    }
    if (!rows || rows.length === 0) {
        return generate(numRows, [[1]]);
    }
    var row = [];
    var lastRow = rows[rows.length-1];
    
    for (var i=1; i < lastRow.length; i++) {
        row.push(lastRow[i-1] + lastRow[i]);
    }
    
    row.push(1);
    row.unshift(1);
    rows.push(row);
    
    if(rows.length === numRows) {
        return rows;
    } else {
        return generate(numRows, rows);
    }
};
