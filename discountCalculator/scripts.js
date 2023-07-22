const numbers = [1,2,3,4,5,6,7,8]
//forEach. execute a function once for each array elemennt
//filter
//reduce
//map
//sort
numbers.forEach(function(value,index){
    console.table(value,index)
})

//map
const newv = numbers.map((value) => value*2)
console.log(newv)

//filter based on condition

const oddnum = numbers.filter( value => value%2==0)
console.log(oddnum)
const num = numbers.filter(function(value){
    return value%2==0
})
console.log(num)

//reduce
console.log("reduce")

const myarray = [1,2,3,4]
const initialValue = 0
const sumWithInitial = myarray.reduce(
    (accumulator,currentValue) => accumulator + currentValue,initialValue
    )
console.log(sumWithInitial)