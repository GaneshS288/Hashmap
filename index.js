import { HashMap } from "./hashmap.js";

let map = new HashMap();
map.set("ganesh", "this is my name");
map.set("hola", "new value");
map.set("odin", "project");
map.set("soda", "soft drink");
map.set("superman", "batman");
map.set("mood", "happy");
map.set("time", "morning");
map.set("show", "courage the cowardly dog");
map.set("song", "rock on");
map.set("fruit", "mango");

console.log(map.values());
console.log(map.keys());
