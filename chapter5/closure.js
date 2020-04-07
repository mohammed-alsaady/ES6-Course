function wrapValue(n){
    let local =n ;
    return ()=> local ;
};

let wrapValue1 =wrapValue(1);
let wrapValue2 =wrapValue(2);

console.log(wrapValue1());
console.log(wrapValue2());

