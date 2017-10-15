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
        for (var row = 0; row < 9; row++) {
            data[row].sort();
            for (var col = 0; col < 9; col++) {
                var value = data[row][col];
                var nextValue = data[row][col + 1];
                if (!(value && value > 0 && value < 10)) {
                    return false;
                }
                if (col !== 8 && value === nextValue) {
                    return false;
                }
            }
        }
        return true;
    }


    function transformData(data) {
        for (var i = 0; i < 9; i++) {
            this._cols.push([]);
            this._grids.push([]);
        }

        for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
                this._cols[col][row] = data._rows[row][col];
                var rowGrid = Math.floor(row / 3);
                var colGrid = Math.floor(col / 3);
                var gridIndex = rowGrid * 3 + colGrid;
                this._grids[gridIndex].push(this._rows[row][col]);
            }
        }
    }
};


