let arr = [1,2,3,4,5]

//Map()

let arrNew =arr.map((e)=>{
    return e**2
})

console.log(arrNew)

//Filter()

const greaterthanSeven = (e)=> {
 if(e>7){
    return true
 }
 return false
}

console.log(arrNew.filter(greaterthanSeven))