//linkedlist
class NewNode{
  constructor(value){
    this.value=value;
    this.next=null;
    

  }
}
class LinkedList{
  constructor(value){
    this.head={
      value:value,
      next:null
    }
    this.tail=this.head;
    this.length=0;
  }
  append(value){
    let newnode=new NewNode(value)
    let currentnode=this.head
    if (!currentnode){
      this.head=newnode
      this.length++;
    }
    this.tail.next=newnode;
    this.tail=newnode;
    this.length++;
    return this
  }
  insert(index,value){
    let currentnode=this.head
   // console.log(currentnode)
    let newnode=new NewNode(value)
    //console.log(newnode)
     while (currentnode){
       //console.log("yes")
       for (let i=0;i<=this.length;i++){
        // console.log(i)
       if (i===index-1){
         let leader=currentnode
        // console.log(leader)
         //console.log("leader",leader)
         let follower=leader.next
         //console.log(follower)
         leader.next=newnode;
         newnode.next=follower;
         
       }
       else{
       currentnode=currentnode.next;
       //console.log("next",currentnode)
       }
       }
       this.length++;
       return this
       
     }
  }
  
  prepend(value){
    let follower=this.head
    let newnode=new NewNode(value)
    this.head=newnode;
    this.head.next=follower;
    this.length++;
    return this;
  }

  remove(index){
    let currentnode=this.head
   // let newnode=new NewNode;
    while (currentnode){
      for (let i=0;i<this.length;i++){
        if (i===index-1){
          let leader=currentnode;
          var follower=leader.next
          leader.next=follower.next
         
          currentnode=currentnode.next
      }
      this.length--;
      return this;
    }

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

const linkedlist=new LinkedList(22)
linkedlist.append(12)
linkedlist.append(44)
linkedlist.append(30)
linkedlist.remove(1)
linkedlist.printlist()

