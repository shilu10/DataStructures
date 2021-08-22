class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  
  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  set(key,value){
    let address=this._hash(key)
    if (!this.data[address]){
      this.data[address]=[]
    }
    this.data[address].push([key,value])
    return this.data
  }
  get(key){
   let address=this._hash(key)
   let container=this.data[address]
   if (container){
     for (let i=0;i<address.length;i++){
        
       if(container[i][0]===key){
       return container[i][1]
       }
     }
   }
    
else{
  return "undefined"
}
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
myHashTable.set("shilu",21)
myHashTable.set("sachin",10)
console.log(myHashTable.get("grapes"))
