//last in first out
class NewNode{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class Stacks{
  constructor(){
    this.top={
      value:null,
      next:null,

    }
    this.bottom=this.top;
    this.length=0;
  }

  push(value){
    let currentnode=this.top;
    let newnode=new NewNode(value)
    if (this.length===0){
      currentnode.value=value;
      this.length++;
      return this;

    }
    this.top=newnode;
    this.top.next=currentnode;
    this.length++;
    return this;
  }
  pop()
  {
    if (this.length>1){
    let currentnode=this.top;
    for (let i=0;i<this.length;i++){
      if (i===this.length-2){
        let leader=currentnode
        console.log(leader.value)
        this.bottom=leader
        this.bottom.next=null;
        this.length--;
        return this

      }
      
      else{
        currentnode=currentnode.next
      }
    }}
    else{
      let currentnode=this.top
      this.top.value=null;
      this.length--;
      return this;
    }
  }
  isempty(){
    if (this.length===0){
      return "True"

    }
    return "false"
  }


    printlist(){
    let list=[]
    let currentnode=this.top
    while (currentnode){
      
      list.push(currentnode.value)
      currentnode=currentnode.next;

    }
    return list;
  }
}

stack=new Stacks()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log(stack.isempty())
console.log(stack)
