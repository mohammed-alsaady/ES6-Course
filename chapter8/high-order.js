// array.prototype.map , filter ,reduce
const birthYear =[1990,1995,2002];
// const ages =[];
// for(let i=0 ; i<birthYear.length; i++){
//     let age = 2020 -birthYear[i];
//     ages.push(age);
// }
// console.log(ages)
const ages = birthYear.map(function(yaer){
    return 2020-yaer;
})

console.log(ages)