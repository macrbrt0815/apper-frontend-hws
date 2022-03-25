function reverse(string){
    const INVALID_INPUT = 'Invalid Input'

    if(typeof string ==='string'){
        const stringArray = string.split('')
        const reversedString = []
    
        //loop through the string
        //push each character to reversedString array
        //starting from the last character to the first
        for(let index = stringArray.length; index >= 0; index--){
            reversedString.push(stringArray[index])
        }
        return reversedString.join('') //join all items in reversedString array
    } else {
        return INVALID_INPUT
    }
    
}
const reversedString = reverse('joseph') //enter string
console.log(reversedString)