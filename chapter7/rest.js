//console.log(Math.max(9,11,24))

function max (... numbers){
    let result =-Infinity;
    for (let number of numbers){
        if(number > result)
        result =number;
    }
    return result
}

//console.log(max (3,7,9,3,12))
let myArray = [4,6,8,9,3,12,24,56]
console.log(max(... myArray))