class NewNode{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}
class Tree{
  constructor(value){
    this.node={
      value:value,
      left:null,
      right:null
      
    }
    this.length=0;

  }
  append(value){
    let currentnode=this.node
    let newnode=new NewNode(value)
     while (currentnode){
    if (value<currentnode.value){
      if (!currentnode.left){
      currentnode.left=newnode
      this.length++;
      return this
      }
      else{
      currentnode=currentnode.left
      }
      }
      
      else{
      if (!currentnode.right){
       currentnode.right=newnode;
       return this;
      }
       else{
       currentnode=currentnode.right}
      
    }
    }}

    lookup(value){
      let currentnode=this.node;
      while(currentnode){
      if (value<currentnode.value){
        currentnode=currentnode.left
      }
       
        else if(value>currentnode.value){
            currentnode=currentnode.right
          }
          else if(currentnode.value===value){
           return currentnode;
        
        }
        }
        return "None"
      }
    

   
  
  }


tree=new Tree(12)
tree.append(2)
tree.append(1)
tree.append(13)


