// const arr = [1,2,3]
// let total = 0
// const reduceResult = arr.reduce(function(previous, current){
//   console.log(`previous: ${previous} current: ${current} total: ${total}`)
//   return previous + current

// }, total)
// console.log(reduceResult)

const arr = [{value: 1}, {value: 2}, {value: 3}]
let total = 0
const reduceResult = arr.reduce(function(accumulator, currentValue){
  console.log(`previous.value: ${accumulator["value"]} previous: ${accumulator} current: ${currentValue["value"]} total: ${total}`)
  if(accumulator.value){
    return accumulator.value + currentValue.value
  }
  return accumulator + currentValue.value
}, total)
console.log(reduceResult)



const newArr = [1,2,6]
const newReduce = newArr.reduce(function(accum, currentVal){
  return accum * currentVal
})
console.log(newReduce)



const names = ["first", "middle", "hitler", "last"]
const banned = ["hitler", "stalin"]
const namesReduce = names.reduce(function(accum, currentVal){
  if(banned.includes(currentVal)){
    return accum
  }
  return `${accum} ${currentVal}`
})

console.log(namesReduce)