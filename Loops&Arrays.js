let arr = [1,2,3,4,5]

//for

/*for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}*/

//for Each

/*arr.forEach((valve,index,arrays)=>{
  console.log(valve ,index ,arrays)
})*/

//for in

/*let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key , element)
    } 
}*/

//for of

for (const key of arr) {
    console.log(key)
}