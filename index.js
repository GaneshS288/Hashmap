import { HashMap } from "./hashmap.js";

let map = new HashMap();
map.addBuckets();
map.set("ganesh", "this is my name");
map.set("hola", "new value")
console.log(map.buckets[6].head);