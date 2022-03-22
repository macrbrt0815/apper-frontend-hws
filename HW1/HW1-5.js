function convertToVowels(string){
    const stringArray = string.split('')
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'] //declare all vowels
    const convertedString = []

    //loop through the string
    //compare each character if in vowels
    //if in vowels, push to character to convertedString array
    stringArray.forEach((char, string) => {
        if(vowels.includes(char)){
            convertedString.push(char)
        }
    })
    return convertedString.join('') //join all items in convertedString array
}

const convertedString = convertToVowels('Hello World!')