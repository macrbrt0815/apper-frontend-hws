function isPalindrome(string){
    let isPalindrome = true
    string = string.replaceAll(' ', '') //remove all white space
    const stringLength = string.length - 1 
    
    //loop trhough the string
    //compare characters 0 to index and total string length - index
    for(let index = 0; index <= stringLength; index++){
        if(string[index] !== string[stringLength-index]){ //if a comparison doesn't match
            isPalindrome = false //not a palindrome
        }
    }
    return isPalindrome
}

const palindrome = isPalindrome('race car') //enter string
