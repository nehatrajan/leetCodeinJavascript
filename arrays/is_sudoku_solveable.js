/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    this._rows = board;
    this._cols = [];
    this._grids = [];
    transformData(this);
    return isValid();
    
    function isValid() {
        return _validate(this._rows) && _validate(this._cols) && _validate(this._grids)
    }
    
    function _validate(data) {
        for (var row=0; row < 9; row++) {
            var set = new Set();
            for(var col=0; col < 9; col++) {
                var value = data[row][col];
                if (value === '.') {
                    continue;
                } else if (!(value !== '.' && value > 0 && value < 10 && !set.has(value))) {
                    return false;
                } else {
                    set.add(value);
                }
            }
        }
        return true;
    }
    
    
    function transformData(data) {
        for (var i=0; i<9; i++) {
            this._cols.push([]);
            this._grids.push([]);
        }
        
        for (row=0; row < 9; row++) {
            for (col=0; col < 9; col++) {
                this._cols[col][row] = data._rows[row][col];
                var rowGrid = Math.floor(row/3);
                var colGrid = Math.floor(col/3);
                var gridIndex = rowGrid*3 + colGrid;
                this._grids[gridIndex].push(this._rows[row][col]);  
            }
        }
    }
};

