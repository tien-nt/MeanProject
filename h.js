const people = [
    {name:'Teo',age:10,height:120},
    {name:'Ti',age:15,height:180},
    {name:'Tun',age:13,height:200},
];

//const filteredPeople = people.filter(person =>person.age>12);
//console.log(filteredPeople);
const numbers= [1,4,2,3,6,8,10];
//console.log(numbers.map(x=>x*x));
// console.log(people.map(person=>person.age));
// console.log(numbers.reduce((x,y)=>x+y));
// console.log(people.map(person=>person.age).reduce((x,y)=>x+y));

const index = numbers.indexOf(6);//phan tu co gia tri 6 la 4
//console.log(index)
//const index = people.indexOf(people[1]);
console.log(people.find(person=>person.name==='Tun'));
console.log(people.findIndex(person=>person.name==='Tun'));
console.log(people.every(person=>person.age>10));
console.log(people.some(person=>person.age>10));