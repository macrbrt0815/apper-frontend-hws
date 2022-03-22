class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class Stack{
    #INVALID_INPUT = 'Invalid Input'
    #EMPTY_STACK = 'Stack is currently empty.'
    constructor(){
        this.length = 0;
        this.topElement = null;
        this.nextElement = null;
    }

    push(element){
        if(typeof element === 'string'){
            let node = new Node(element) //create a new node object
            this.nextElement = this.topElement //assign current top element to be the next element in the stack
            node.next = this.nextElement 
            this.topElement = node //assign new node to be the top element in the stack
            this.length++ //increment stack size
        } else {
            console.log(this.#INVALID_INPUT)
        }
    }

    pop(){
        //check if stack is empty
        if(!this.topElement){
            console.log(this.#EMPTY_STACK)
        }else{
            //if stack is not empty, remove the top element
            //assighn next element to be the top element
            this.topElement = this.topElement.next
            this.length--
       }
    }

    check(){ 
        if(!this.topElement){
            console.log(this.#EMPTY_STACK)
        } else {
            let stack =  this.topElement

            //loop through stack elements
            //log the top element, assign next element to be the top element
            while(stack){
                console.log(stack.element)
                stack = stack.next
            }
        }
    }

    peek(){
        return this.topElement.element //log the top element from the stack
    }
}

const myStack = new Stack()
myStack.push('Milk')
myStack.push('Eggs')
myStack.push(0) //Invalid Input
const topElement = myStack.peek() //Eggs
myStack.check() //Eggs, Milk
myStack.pop()
myStack.check() //Milk
myStack.pop()
myStack.check() //Stack is currently empty.
myStack.pop() //Stack is currently empty.
