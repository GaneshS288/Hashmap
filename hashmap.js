import { LinkedList } from "./linked-list.js";

export class HashMap {
  #capacity;
  #loadFactor;

  constructor(capacity = 16, loadFactor = 0.75) {
    this.#capacity = capacity;
    this.#loadFactor = loadFactor;
    this.buckets = [];
    this.addBuckets();
  }

  addBuckets() {
    for (let i = 0; i < this.#capacity; i++) {
      if (this.buckets[i] === undefined) {
        this.buckets[i] = new LinkedList();
      }
    }
  }

  checkCapacity() {
    if(this.length() >= (this.#loadFactor * this.#capacity)) {
      this.#capacity = this.#capacity * 2;
      this.addBuckets();
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

  set(key, value) {
    this.checkCapacity();
    let index = this.hash(key);
    this.checkIndexRange(index);
    let bucket = this.buckets[index];

    if (bucket.contains(key)) {
      let nodeIndex = bucket.find(key);
      bucket.at(nodeIndex)[key] = value;
    } else {
      bucket.append(key, value);
    }
  }

  get(key) {
    let index = this.hash(key);
    this.checkIndexRange(index);
    let bucket = this.buckets[index];

    if (bucket.contains(key) === false) return null;
    else {
      let node = bucket.at(bucket.find(key));
      return node[key];
    }
  }

  has(key) {
    let index = this.hash(key);
    this.checkIndexRange(index);
    let bucket = this.buckets[index];

    if (bucket.contains(key)) return true;
    else return false;
  }

  remove(key) {
    this.buckets.forEach((bucket) => {
      if (bucket.contains(key)) {
        return bucket.removeAt(bucket.find(key));
      } else return false;
    })
  }

  length() {
    let length = 0;
    this.buckets.forEach((bucket) => {
      length += bucket.size();
    });
    return length;
  }

  clear() {
    for (let i = 0; i < this.#capacity; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  keys() {
    let keys = [];

    this.buckets.forEach((bucket) => {
      let bucketEntries = bucket.entries();
      bucketEntries = bucketEntries.map((entry) => entry[0]);
      keys = keys.concat(bucketEntries);
    });

    return keys;
  }

  values() {
    let values = [];

    this.buckets.forEach((bucket) => {
      let bucketEntries = bucket.entries();
      bucketEntries = bucketEntries.map((entry) => entry[1]);
      values = values.concat(bucketEntries);
    });

    return values;
  }

  entries() {
    let entries = [];

    this.buckets.forEach((bucket) => {
      entries = entries.concat(bucket.entries());
    });

    return entries;
  }

  checkIndexRange(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }
}
