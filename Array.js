//create a class

class ImplementingArray{
    constructor(){
      this.array={};
      this.length=0;

    }
    append(value){

      this.array[this.length]=value;
      this.length++;
      //return this
    }
    search(index){

      const value=this.array[index];
      if (value){
      return value;}
      else{
        //return "enter the correct index"
      }
    }
    insert(index,value){
      let current_value=this.array[index]
     
      for (let i=index;i<this.length;i++){
        let next_value=this.array[i+1]
        this.array[i+1]=current_value
        current_value=next_value
        
      }
      this.array[index]=value
      this.length++;
      return this;
    }
    pop(){

      delete this.array[this.length-1];
      this.length--;
      return this

    }
    remove(index)
    {
       delete this.array[index];
       for (let i=index;i<this.length;i++){
         console.log(i)
         let next_value=this.array[i+1]
         this.array[i]=next_value;
       }
       delete this.array[this.length-1]
       this.length--;
       return this
    }

}

const implement=new ImplementingArray()
//implement.append(0)
//implement.append(2)
//implement.append(3)
//implement.insert(1,1)
//implement.remove(2)

//console.log(implement.search(1))

