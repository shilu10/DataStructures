class NewNode{
  constructor(value){
    this.value=value
    this.next=null
  }
}
class Queue{
  constructor(){
    this.first={
    value:null,
    next:null
    };
    this.last=this.first;
    this.length=0;
  }

  enqueue(value){
   let newnode=new NewNode(value)
   if (this.length===0){
     this.first.value=value;

     this.length++
     return this
   }
   this.last.next=newnode;
   this.last=newnode;
   this.length++;
   return this;
  }
  dequeue(){
    let currentnode=this.first;
    this.first=currentnode.next;
    this.length--;
    return this
  }
    printlist(){
    let list=[]
    let currentnode=this.first
    while (currentnode){
      
      list.push(currentnode.value)
      currentnode=currentnode.next;

    }
    return list;
  }
  peek(){
    if (this.length>0){
    return this.first.value
    }
    return "None"
  }
  isempty(){
    if (this.length===0){
      return "True"
    }
    return "False"
  }
}


queue=new Queue()
queue.enqueue(100)
queue.enqueue(101)
queue.enqueue(1010)
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.isempty())
console.log(queue.peek())
//console.log(queue)
//console.log(queue.printlist())
