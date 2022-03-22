function transform (integers){
    const squaredIntegers = []
    integers.forEach((item, integers) => {
        if(typeof item === 'number'){ //validate id item is of type number
            squaredIntegers.push(item*item)
        }
    })
    const integerArray = new Uint32Array(squaredIntegers)
    return integerArray.sort()
}

const integers = [20,30,1,2,3,4,5, 'one'] //enter array of integers
const squaredIntegers = transform(integers)
