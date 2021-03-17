[set-map](http://es6.ruanyifeng.com/#docs/set-map)

# Set

Set 类似于数组，但是成员的值都是唯一的，没有重复的值。

``` js
console.log(NaN === NaN) // false
console.log({} === {}) // false

const set = new Set(['a', 'b', 'a'])

// set 中两个 NaN 是相等的
set.add(NaN)
set.add(NaN)

// set 中两个 {} 是不相等的
set.add({})
set.add({})

set.delete('b')

console.log(set) // Set(4){'a', NaN, {}, {}}
console.log(set.has('b')) // false

// 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以 keys 方法和 values 方法的行为完全一致。
console.log(set.keys()) // SetIterator(4){'a', NaN, {}, {}}
console.log(set.values()) // SetIterator(4){'a', NaN, {}, {}}
// entries 返回键名键值
console.log(set.entries()) // SetIterator {"a" => "a", NaN => NaN, {} => {}, {} => {}}
for (let value of set) {
  console.log(value)
  // a
  // NaN
  // {}
  // {}
}
set.forEach((value, index) => {
  console.log(value, index)
  // a a
  // NaN NaN
  // {} {}
  // {} {}
})

set.clear()
console.log(set) // Set(0){}
```

# WeakSet

WeakSet 与 Set 类似，但有几个区别：

1. WeakSet 的成员只能是对象，而不能是其他类型的值
2. WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。成员会随时消失
3. WeakSet 不可遍历

WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。

# Map

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

Map 类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
