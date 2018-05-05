const person = {name:'teo',age:10,height:100};
person.name;
person.age;
person.height;

function showAge({age}){
    console.log(age);
}

const {name,age,height}=person;
console.log(name,age,height);

const arr = [1,3,5,10,11,12];
const [a1,a2,a3,...rest] = arr;
console.log(a1,a2,a3,rest);


showAge({age:10});
function getTotal(x,y,...args){
    return args.reduce((a,b)=> a+b);
}
console.log( getTotal(1,3,5,6));