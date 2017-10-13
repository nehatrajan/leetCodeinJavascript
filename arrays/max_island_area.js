/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var maxArea = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, findMaxArea(grid, i, j))
            }
        }
    }
    return maxArea
};

function findMaxArea(grid, i, j) {
    if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] === 1) {
        grid[i][j] = 0;
        return 1 + findMaxArea(grid, i + 1, j) + findMaxArea(grid, i - 1, j) + findMaxArea(grid, i, j - 1) + findMaxArea(grid, i, j + 1);
    }
    return 0;
}
