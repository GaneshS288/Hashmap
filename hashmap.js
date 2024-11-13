import { LinkedList } from "./linked-list.js";

export class HashMap {
  #capacity;
  #loadFactor;

  constructor(capacity = 16, loadFactor = 0.8) {
    this.#capacity = capacity;
    this.#loadFactor = loadFactor;
    this.array = [];
    this.addBuckets();
  }

  addBuckets() {
    for (let i = 0; i < this.#capacity; i++) {
      if (this.array[i] === undefined) {
        this.array[i] = new LinkedList();
      }
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
    }

    return hashCode;
  }
}
