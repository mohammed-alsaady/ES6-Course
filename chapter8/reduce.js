//reduce (callback , Initial Value)
//callback (Accumulator, current value , current index , source array)

const arr =[5,6,9,3,2]
const sum = arr.reduce(function(accumulator ,currentValue){
    return accumulator + currentValue ;
},10);
console.log(sum)