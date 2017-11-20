/**
 * initialize your data structure here.
 */
function MinStack(){
    this.arr = [];
    this.min = null;
}

MinStack.prototype.push = function(val){
    if (!this.min && this.min !== 0){
        this.min = val;
    }else if (this.min > val){
        this.min = val;
    }
    this.arr.push(val);
}

MinStack.prototype.pop = function(){
    var ans = this.arr.pop();
    if (this.min === ans){
        this.min = null;
    }
    for (var i=0; i < this.arr.length; i++){
        if (!this.min && this.min !== 0){
            this.min = this.arr[i];
        }else if(this.min > this.arr[i]){
            this.min = this.arr[i];
        }
    }
}

MinStack.prototype.top = function(){
    return this.arr[this.arr.length-1];
}

MinStack.prototype.getMin = function(){
    return this.min;
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
