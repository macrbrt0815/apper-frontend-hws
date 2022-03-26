function transform (integers){
    const squaredIntegers = []
    integers.forEach((int, integers) => {
        if(typeof int === 'number'){ //validate id item is of type number
            squaredIntegers.push(int*int)
        }
    })
    const sortedArray = new Uint32Array(squaredIntegers).sort()
    return sortedArray
}

const integers = [20,30,1,2,3,4,5] //enter array of integers
const squaredIntegers = transform(integers)
console.log(squaredIntegers)