function LinkedList(){
    this.head = null;
}

function node(val){
    this.value = val;
    this.next = null;
}

LinkedList.prototype.push = function(val){
    var nn = {
        value: val,
        next: null
    };
    if(!this.head){
        this.head = nn;
    }
    else{
        current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = nn;
    }
};

function kthNodeFromLast(list, k) {
    var i =1;
    if (!this.head) {
        return null;
    }
    var kthNode;
    var currentNode = list.head;
    while (currentNode) {
        if(i===k) {
            kthNode = list.head;
        }else if(i-k>0) {
            kthNode = kthNode.next;
        }
        i++;
        currentNode = currentNode.next;
    }
    return kthNode;
}


var sll = new LinkedList();

//push node
sll.push(2);
sll.push(4);x
sll.push(3);
sll.push(5);
sll.push(6);
sll.push(9);
sll.push(8);
console.log(kthNodeFromLast(sll, 3));