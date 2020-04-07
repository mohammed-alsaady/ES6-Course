const Persons = [
    {name:'Ahmed' ,age :17},
    {name:'Husain' , age: 22},
    {name:'Mustafa' ,age :30}
]

//First-Order
// const fullAge =[];
// for(let i=0 ;i <Persons.length; i++){
//     if(Persons[i].age >= 18){
//         fullAge.push(Persons[i]);
//     }
// }

// console.log(fullAge)
const fullAge =Persons.filter(person => person.age >= 18);
console.log(fullAge)