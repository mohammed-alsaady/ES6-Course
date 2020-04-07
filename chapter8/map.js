// C# , 2 , java 4 , Python 6
const pl= ['Javascript' ,'Python', 'PHP','C'];

function myMap(arr ,fn){
    const newArray =[] ;
    for (let i=0 ;i<arr.length ;i++){
        newArray.push(
            fn(arr[i])
            );
    }
    return newArray;
}
const lengthPL =myMap(pl ,function(item){
    return item.length;
});
console.log(lengthPL)
