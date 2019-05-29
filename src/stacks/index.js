var stack = {
    push(element){
        this.elements.push(element);
    },
    pop(){
        if(this.elements.length>0){
            this.elements.pop();
        }
    }
}

var mockStack = Object.assign(Object.create(stack),{
    elements:[]
});