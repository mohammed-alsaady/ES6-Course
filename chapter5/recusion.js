// var counter = 10 ;
// while(counter >0 ){
//     console.log(counter--)
// }

var counter = function(value){
    if (value > 0){
        console.log(value);
        return counter(value -1);
    }else {
        return value;
    }
}

counter(10);