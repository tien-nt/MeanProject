class Person{
    constructor(name,age){

    };
    sayHello(){

    };
    //const teo = new Person('Teo Nguyen',10);
}
const people =[
    {name:'Teo',age:10,height:150},
    {name:'Ti',age:15,height:130},
    {name:'Tun',age:13,height:140},
];
//console.log(people.every(Person=>Person.age>9))
Array.prototype.show=function(fn){
    console.log(this[0]);
    
}
Array.prototype.myEvery=function(fn){
    for(let index=0;index<this.length;index++){
        const element = this[index];
        if(!fn(element)) return false;
    }
    return true;
}
//console.log(people.myEvery(person=>person.age>10));

Array.prototype.mySome=function(fn){
    for(let index=0;index<this.length;index++){
        const element = this[index];
        if(fn(element)) return true;
    }
    return false;
}
//console.log(people.mySome(person=>person.age>10));

Array.prototype.myfilter=function(fn){
    const arr=[];
    for(let index=0;index<this.length;index++){
    const element = this[index];
        if(fn(element)) arr.push(element);
    }
    return arr;
}
//console.log(people.myfilter(person=>person.age>10));
Array.prototype.myFind=function(fn){
  
    for(let index=0;index<this.length;index++){
    const element = this[index];
        if(fn(element)) return element;
    }  
}
console.log(people.myFind(person=>person.age>10));

Array.prototype.myFindIndex=function(fn){
  
    for(let index=0;index<this.length;index++){
    const element = this[index];
        if(fn(element)) return index;
    }  
    return -1;
}
//console.log(people.myFindIndex(person=>person.age>10));
Array.prototype.myMap=function(fn){
  const output = [];
    for(let index=0;index<this.length;index++){
    const element = this[index];
    output.push(fn(element));
    }  
    return output;
}
//console.log(people.myMap(person=>person.age>10));
Array.prototype.myReduce=function(fn){
    if(this.length===0) throw new Error('Array must have element(s)');
      if(this.length===1)return this[0];
      let temp = fn(this[0],this[1]);
      for(let index =2;index < this.length;index++)
      {
          const element = this[index];
          temp = fn(temp,element);
      }
      return temp;
  }
  //console.log([{a:10},{b:100},{c:140}].myReduce((a,b)=>a+b));
  const number = [1,4,6,2,7,9,8,100];
  console.log(number.sort((a,b)=>a-b));
  console.log(people.sort((a,b)=>a.name.localeCompare(b.nam)));