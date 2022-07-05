class CustomHashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    //Methods must be signed with _ (underscore) if it is private
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

const customHashTable = new CustomHashTable(50);
customHashTable.set('grapes', 10000);
customHashTable.set('apples', 54);
console.log(customHashTable.data);

console.log(customHashTable.get('apples'));