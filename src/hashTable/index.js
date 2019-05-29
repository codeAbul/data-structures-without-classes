var hashTable = {
    insert(key,value){
        var index = this._hash(key);
        this.storage[index] = value;
    },
    remove(key){
        var index = this._hash(key);
        this.storage[index]= null;

    },
    retrieve(key){
        var index = this._hash(key);
        return this.storage[index];

    },
    _hash(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++)
            sum += str.charCodeAt(i) * 3
    
        return sum % n;
      }
}

export default hashTable;