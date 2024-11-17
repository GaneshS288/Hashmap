# Hashmap
A hashmap implementation in javascript. The HashMap constructor has three properties.

**capacity** - this refers to the hashmap array length. By default set to 16.

**load factor** - the load factor of hashmap. indicates full capacity when multiplied by capacity. by default set to 0.75.

**buckets** - the array acting as hashmap container. by default set to an empty array.

# Methods

**addBuckets** - automatically invoked when creating a new HashMap instance. Populates the HashMap array with Linked Lists.

**checkCapacity** - checks if the HashMap is at full capacity. If it is then increases capacity.

**hash** - takes a key and returns an index by using a hash algorith.

**set** - takes a key and value. Inserts the key value pair if they aren't in the index returned by hash method. rewrites the value if key Already exists.

**get** - takes a key and returns the node containg it.

**has** - checks if a key exists in HashMap.

**remove** - takes a key and removes it from HashMap. returns null if the key doesn't exist.

**length** - returns the number of total nodes in the HashMap.

**clear** - deletes all the nodes from HashMap.

**keys** - returns an array of all the keys in HashMap.

**values** returns an array of all the values in HashMap.

**entries** returns an array of all the key-value pairs in HashMap.

