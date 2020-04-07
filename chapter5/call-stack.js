// let greet = function(who){
//     console.log('Hello' + who);
// }
// greet('Mohammed'); // call
// console.log('Bye');


function chicken(){
    return egg();
}
function egg() {
    return chicken();
}
chicken();