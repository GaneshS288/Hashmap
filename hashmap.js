export class HashMap {
  #capacity;
  #loadFactor;
  constructor() {
    this.#capacity = 16;
    this.#loadFactor = 0.8;
    this.array = [];
    this.addBuckets();
  }

  addBuckets() {
    for(let i = 0; i < this.#capacity; i++) {
        if(this.array[i] === undefined) {
            this.array[i] = "list";
        }
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }


}
