class NewNode{
  constructor(value){
    this.value=value
    this.next=null
  }
}
class Queue{
  constructor(value){
    this.head={
     value:value,
     next:null
    };
    this.tail=this.head;
    this.length=0;
  }

  enqueue(value){
    let currentnode=this.head;
    let newnode=new NewNode(value)
    this.head=newnode
    this.head.next=currentnode;
    this.length++;
  }
  dequeue(){
    let currentnode=this.head;
    this.head=currentnode.next;
    return this
  }
    printlist(){
    let list=[]
    let currentnode=this.head
    while (currentnode){
      
      list.push(currentnode.value)
      currentnode=currentnode.next;

    }
    return list;
  }
}


queue=new Queue(12)
//queue.enqueue(100)
//queue.enqueue(101)
//queue.enqueue(1010)
//queue.dequeue()
//queue.dequeue()
//console.log(queue.printlist())
//console.log(queue)
