/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    var result = [];
    for (var i = 0; i < n; i++){
        result.push(0);
    }
    var prevTime = 0;
    var stack = [];
    for (var i=0; i < logs.length; i++){
        var value = logs[i].split(":");
        var time = parseInt(value[2]);
        var fn = parseInt(value[0]);
        if (value[1] === 'start'){
            if (stack.length > 0){
                result[stack[stack.length - 1]] += time-prevTime;
            }
            stack.push(fn);
            prevTime = time;
        }else {
            result[stack.pop()] += (time - prevTime) + 1;
            prevTime = time + 1
        }
    }
    return result;
    
};
