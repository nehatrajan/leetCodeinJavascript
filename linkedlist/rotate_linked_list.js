var NewNode = function(val) {
	this.val = val;
  this.next = null;
}

var linkedList = function(){
this.head = null;
}

linkedList.prototype.push = function(val){
	 var node = new NewNode(val);
   if (!this.head){
   		this.head = node;
   } else {
   		var current = this.head;
      while (current.next){
      		var temp = current;
      		current = current.next;
          current.prev = temp;
      }
      current.next = node;
      node.prev = current;
   }
}

function rotateLL(ss, k){
	var prev = ss.head;
  var prevHead = ss.head;
  var current = ss.head;
  i=1;
  while(current.next){
  		if (i === (k+1)){
      		ss.head = current;
          prev.next = null;
      }
      i++;
      prev = current;
      current = current.next;
  }
  current.next = prevHead;
  return ss;
}

var ll = new linkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);
console.log(rotateLL(ll, 3));
