var stack = {
    push(element){
        this.elements.push(element);
    },
    pop(){
        if(this.elements.length>0){
            this.elements.pop();
        }
        else{
            throw new Error("Can't pop from an empty stack");
        }
    },
    peek(){
        return this.elements[this.elements.length-1];
    }
}

export default stack;

