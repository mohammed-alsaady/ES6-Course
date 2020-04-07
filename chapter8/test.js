let arr = [3,6,9]
function revers(a){
let arr2=[];
for(let i=0 ;i <a.length; i++){
     arr2.unshift(i);

}
return arr2
}

console.log(revers(arr))