function reverse(string){
    const stringArray = string.split('')
    const reversedString = []

    //loop through the string
    //push each character to reversedString array
    //starting from the last character to the first
    for(let index = stringArray.length; index >= 0; index--){
        reversedString.push(stringArray[index])
    }
    return reversedString.join('') //join all items in reversedString array
}
const reversedString = reverse('joseph') //enter string
console.log(reversedString)