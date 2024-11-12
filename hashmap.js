class HashMap {
  #capacity;
  #loadFactor;
  constructor() {
    this.#capacity = 16;
    this.#loadFactor = 0.8;
    this.array = addBuckets();
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
