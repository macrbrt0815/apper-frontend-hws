function convertToVowels(string){
    const INVALID_INPUT = 'Invalid Input'

    if(typeof string ==='string'){
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
    } else {
        return INVALID_INPUT
    }
}

const convertedString = convertToVowels('Hello World!') //enter string
