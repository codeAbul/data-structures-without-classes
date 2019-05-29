var queue = {
    enqueue(element){
        this.elements.push(element);
    },
    dequeue(){
        if(this.elements.length>0) {
            this.elements.shift();
        }
        else {
            throw new Error("Can't dequeue from an empty queue");
        }
    },
    peek(){
        return this.elements[0];
    }
}

export default queue;