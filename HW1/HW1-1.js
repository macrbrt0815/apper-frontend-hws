function transform (integers){
    const squaredIntegers = []
    integers.forEach((item, integers) => {
        if(typeof item === 'number'){ //validate id item is of type number
            squaredIntegers.push(item*item)
        }
    })
    const sortedArray = new Uint32Array(squaredIntegers).sort()
    return sortedArray
}

const integers = [20,30,1,2,3,4,5, 'one'] //enter array of integers
const squaredIntegers = transform(integers)
console.log(squaredIntegers)