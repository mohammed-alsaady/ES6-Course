let obj = {
    name: 'Mohammed',
    phone: 964
}

let str = JSON.stringify(obj);
console.log(obj)
console.log(str)

console.log(JSON.parse(str).name)
