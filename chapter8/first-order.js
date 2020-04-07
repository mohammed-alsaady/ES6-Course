// function first(){
//     setTimeout(function(){
//         console.log(1);
//     }, 500)
    
// }
// function second (){
//     console.log(2)
// }

// first();
// second();


function doHomeWork (subject ,callback){
    console.log(`Starting my ${subject} homework`);
    callback();
}
function cb (){
    console.log('Finished My homework!');
}
//doHomeWork('Math')
// doHomeWork('Math',function (){
//     console.log('Finished my homework!')
// });
doHomeWork('Math',cb)