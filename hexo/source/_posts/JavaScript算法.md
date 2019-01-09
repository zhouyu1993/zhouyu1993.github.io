---
title: JavaScript算法

categories:
  - web

tags:
  - js

date: 2018/10/08
---

算法 (Algorithm) 是解决特定问题求解步骤的描述，在计算机中表现为指令的有序序列，并且每条指令表示一个或多个操作。对于给定的问题是可以有多种算法进行解决的。

<!-- more -->

没有通用的算法。就跟没有包治百病的药一样。现实世界的问题千奇百怪，解决问题的算法当然也是千变万化的。

# 时间复杂度和空间复杂度

[参考](https://mp.weixin.qq.com/s/rsqwcEb8cQ3by3mvpHrtzg)

为什么需要复杂度分析？

* 学习数据和算法就是为了解“快”和“省”的问题，也就是如何设计你的代码才能使运算效率更快，占用空间更小。那如何来计算代码执行效率呢？这里就会用到复杂度分析。
* 虽然我们可以用代码准确的计算出执行时间，但是这也会有很多局限性。
* 数据规模的不同会直接影响到测试结果。比如说同一个排序算法，排序顺序不一样，那么最后的计算效率的结果也会不一样；如果恰好已经是排序好的了数组，那么执行时间就会更短。又比如说如果数据规模比较小的话，测试结果可能也无法反应算法的性能。
* 测试的环境不同也会影响到测试结果。比如说同一套代码分别在 i3 和 i7 处理器上进行测试，那么 i7 上的测试时间肯定会比 i3 上的短。

所以需要一个不用准确的测试结果来衡量，就可以粗略地估计代码执行时间的方法。这就是`复杂度分析`。

## 大 O 复杂度表示法

``` js
function total (n) { // 1
  var sum = 0; // 2
  for (var i = 0; i < n; i ++) { // 3
    sum += i + 1; // 4
  }
  return sum;
}
```

我们假设每行代码执行的时间都一样，记做 t，那么上面的函数中的第 2 行需要 1 个 t 的时间，第 3 行 和 第 4 行分别需要 n 个 t 的时间，那么这段代码总的执行时间为 `(2n+1)*t`。

``` js
function total (n) { // 1
  var sum = 0; // 2
  for (var i = 0; i < n; i ++) { // 3
    for (var j = 0; j < n; j ++) { // 4
      sum += i + j + 1; // 5
    }
  }
  return sum;
}
```

第 2 行需要一个 t 的时间，第 3 行需要 n 个 t 的时间，第 4 行和第 5 行分别需要 n^2 个的时间，那么这段代码总的执行时间为 `(2n^2+n+1)*t` 的时间。

从数学角度来看，我们可以得出个规律：代码的总执行时间 T(n) 与每行代码的执行次数成正比：

`T(n) = O(f(n))`

在这个公式中，`T(n)` 表示代码的执行时间；`n` 表示数据规模的大小；`f(n)` 表示每行代码执行的次数总和；`O` 表示代码的执行时间 `T(n)` 与 `f(n)` 表达式成正比。

所以上边两个函数的执行时间可以标记为 `T(n) = O(2n+1`) 和 `T(n) = O(2n^2+n+1)`。这就是`大 O 时间复杂度表示法`，它不代表代码真正的执行时间，而是表示代码随数据规模增长的变化趋势，简称`时间复杂度`。

而且`当 n 很大`时，我们可以`忽略常数项`，只`保留一个最大量级`即可。所以上边的代码执行时间可以简单标记为 `T(n) = O(n)` 和 `T(n) = O(n^2)`。

## 时间复杂度分析

1. 只关注循环执行次数最多的一段代码

``` js
function total (n) { // 1
  var sum = 0; // 2
  for (var i = 0; i < n; i ++) { // 3
    sum += i + 1; // 4
  }
  return sum;
}
```

只有第 3 行和第 4 行是执行次数最多的，分别执行了 n 次，那么忽略常数项，所以此段代码的时间复杂度就是 O(n)。

2. 加法法则：总复杂度等于量级最大的那段代码的复杂度

``` js
function total (n) {
  var sum = 0;
  for (var i = 0; i < n; i ++) {
    for (var j = 0; j < n; j ++) {
      sum += i + j + 1;
    }
  }

  var sum2 = 0;
  for (var i = 0; i < 1000; i ++) {
    sum2 += i;
  }

  var sum3 = 0;
  for (var i = 0; i < n; i ++) {
    sum3 += i;
  }

  return sum;
}
```

我们先分别分析每段 for 循环的时间复杂度，再取他们中最大的量级来作为整段代码的时间复杂度。

第一段 for 循环的时间复杂度为 O(n^2)。

第二段 for 循环执行了 1000 次，是个常数量级，尽管对代码的执行时间会有影响，但是当 n 无限大的时候，就可以忽略。因为它本身对增长趋势没有影响，所以这段代码的时间复杂度可以忽略。

第三段 for 循环的时间复杂度为 O(n)。

总上，取最大量级，所以整段代码的时间复杂度为 O(n^2)。

3. 乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积

``` js
function fun (n) {
  var sum = 0;
  for (var i = 0; i < n; i ++) {
    sum += i;
  }

  return sum;
}

function total (n) {
  var sum = 0;
  for (var i = 0; i < n; i ++) {
    sum += fun(i);
  }

  return sum;
}
```

单独看 total 函数的时间复杂度就是为 `T1(n) = O(n)`，但是考虑到 fun 函数的时间复杂度也为 `T2(n) = O(n)`。 所以整段代码的时间复杂度为 `T(n) = T1(n) * T2(n) = O(n) * O(n) = O(n^2)`。

### 几种常见的时间复杂度分析

只看最高量级的复杂度，效率是递减的

O(1) 常数阶

O(logn) 对数阶

O(n) 线性阶

O(n^2) 平方阶

O(n^3) 立方阶

O(2^n) 指数阶

O(n!) 阶乘阶

粗略的分为两类，`多项式量级`和`非多项式量级`。其中，非多项式量级只有两个：O(2^n) 和 O(n!)

增长率:

![增长率](https://pic2.zhimg.com/80/v2-11043ff03c8e1fc0ee9556867fdc46fa_hd.jpg)

当数据规模 n 增长时，非多项式量级的执行时间就会急剧增加，所以，非多项式量级的代码算法是非常低效的算法。

### 思考

`题目：sum = 1+2+3+...+n ，计算 sum 的值。`

``` js
function total (n) { // 1
  var sum = 0; // 2
  for (var i = 0; i < n; i ++) { // 3
    sum += i + 1; // 4
  }
  return sum;
}
```

时间复杂度是 O(n)，能不能优化呢？

利用【等差数列求和公式】：Sn = n(a1 + an)/2

``` js
function total (n) { // 1
  var sum = n * (1 + n) / 2; // 2
  return sum;
}
```

时间复杂度仅仅为 O(1)，在数据规模比较庞大的时候，是不是明显效率更高!

## 空间复杂度分析

空间复杂度的话和时间复杂度类似推算即可。

所谓空间复杂度就是`表示算法的存储空间和数据规模之间的关系`。

``` js
function initArr () {
  var arr = []
  for (var i = 0; i < n; i ++) {
    arr[i] = i
  }
  return arr
}
```

根据时间复杂度的推算，忽略掉常数量级，每次数组赋值都会申请一个空间存储变量，所以此函数会申请 n 个的空间，复杂度为 O(n)。

常见的空间复杂度只有 O(1)、O(n)、O(n2)。其他的话很少会用到。

## 总结

复杂度也叫渐进复杂度，包括时间复杂度和空间复杂度，一个表示执行的快慢，一个表示内存的消耗，用来分析算法执行效率与数据规模之间的增长关系，可以粗略的表示，越高阶复杂度的算法，执行效率越低。

# 数据结构和算法动态可视化

[数据结构和算法动态可视化](https://visualgo.net/zh)

# 排序

排序是一个非常经典的问题，它以一定的顺序对一个数组（或一个列表）中的项进行重新排序（可以进行比较，例如整数，浮点数，字符串等）（增加，非递减，递减， 增加，词典等）。

有许多不同的排序算法，每个都有其自身的优点和局限性。

排序通常被用作各种计算机科学课程中的介绍性问题，以展示一系列算法思想。

## Array.prototype.sort()

The `sort()` method sorts the elements of an array [in place](https://en.wikipedia.org/wiki/In-place_algorithm) and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it is implementation dependent.

`sort()` 方法用[原地算法](https://zh.wikipedia.org/wiki/原地算法)对数组的元素进行排序，并返回数组。排序算法现在是稳定的。默认排序顺序是根据字符串Unicode码点。

由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。

`sort(compareFunction)`

- 如果没有指明 compareFunction，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序。
- 如果指明了 compareFunction，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：
  * 如果 compareFunction(a, b) 小于 0，那么 a 会被排列到 b 之前
  * 如果 compareFunction(a, b) 等于 0， a 和 b 的相对位置不变（CMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守,例如 Mozilla 在 2003 年之前的版本）
  * 如果 compareFunction(a, b) 大于 0，那么 b 会被排列到 a 之前
  * compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的（利用这一特性，可实现随机排序）

`compareFunction` 可能需要对元素做多次映射以实现排序，尤其当 `compareFunction` 较为复杂，且元素较多的时候，某些 `compareFunction` 可能会导致很高的负载。使用 `map` 辅助排序将会是一个好主意。基本思想是首先将数组中的每个元素比较的实际值取出来，排序后再将数组恢复。

``` js
[3, 2, 1].sort() // [1, 2, 3]

[3, 2, 11].sort() // [11, 2, 3] 这里说明如果没有指明 compareFunction，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序。['3', '2', '11'].sort()。'11' < '2' < '3'

[3, 2, 11].sort((a, b) => {
  return a - b
}) // [2, 3, 11]

['c', 'b', 'a'].sort()
```

`sort()` 方法如何实现排序？

``` js
var arr = [3, 1, 2]

arr.sort((a, b) => {
  console.log(arr, a, b)

  return a - b
})

/*
** 控制台输出
  [3, 1, 2] 1 3
  [3, 1, 2] 2 1
  [1, 3, 2] 2 3
  [1, 3, 2] 2 1
  [1, 2, 3]
*/
```

a 相当于 next，b 相当于 prev。

第一次，数组 [3, 1, 2]，初始数组。1 和 3 比较，1 - 3 < 0，1 要排列到 3 之前，需要调整。

第二次，数组 [3, 1, 2]，数组没变。2 和 1 比较，2 - 1 > 0，1 要排列到 2 之前，不需要调整。

第三次，数组 [1, 3, 2]，数组变了，说明在上一轮比较结束后调整了位置。3 和 1 不用比较，直接跳过。2 和 3 比较，3 - 2 > 0，2 要排列到 3 之前，需要调整。

第四次，数组 [1, 3, 2]，数组没变。2 和 1 比较，2 - 1 > 0，1 要排列到 2 之前，不需要调整。

比较结束，数组 [1, 2, 3]。

`sort()` 好像是冒泡和插入两种方式结合进行排序的！

## [十大经典排序算法](https://github.com/Wscats/CV/issues/13)

### 冒泡排序

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。

2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。

3. 针对所有的元素重复以上的步骤，除了最后一个。

4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较

``` js
function bubbleSort (arr) {
  const len = arr.length

  for (let i = 0; i < len - 1; i ++) {
    for (let j = 0; j < len - 1 - i; j ++) {
      // 内循环，相邻元素，两两对比
      if (arr[j] > arr[j + 1]) {
        // 元素交换，左小右大
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}
```

分析：冒泡排序，可以看成三个规则的组合：

1. 外层 for 循环
2. 内层 for 循环
3. 最内层的 swap

时间复杂度为：O(n) * O(n) * O(1) = O(n^2)

最快：当输入的数据已经是正序时(都已经是正序了，我还要你冒泡排序有何用啊)。

最慢：当输入的数据是反序时(写一个 for 循环反序输出数据不就行了，干嘛要用你冒泡排序呢，我是闲的吗)。

### 选择排序

1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置

2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。

3. 重复第二步，直到所有元素均排序完毕。

``` js
function selectionSort(arr) {
  const len = arr.length

  for (let i = 0; i < len - 1; i ++) {
    let minIndex = i // 最小数的索引，每次初始化为 i

    for (let j = i + 1; j < len; j ++) {
      // 内循环，寻找最小数
      if (arr[j] < arr[minIndex]) {
        // 将最小数的索引保存
        minIndex = j
      }
    }

    // 元素交换，修正本轮寻找到的最小数
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}
```

分析：选择排序，可以看成两个规则的组合：

1. 外层 for 循环
2. 内层 for 循环

每次挑选出最小的数，不停往前堆放

时间复杂度为：O(n) * O(n) = O(n^2)

### 插入排序

1. 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。

2. 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

``` js
function insertionSort (arr) {
  const len = arr.length

  let prevIndex, current

  // 将第一(0)个数看做一个有序序列，把第二(1)个元素到最后一个元素当成是未排序序列
  for (let i = 1; i < len; i ++) {
    prevIndex = i - 1 // 有序序列的最后一个数的索引
    current = arr[i] // 未排序序列的第一个元素

    // 用未排序序列的第一个元素，与有序序列比较，从右到左
    while (prevIndex >= 0 && arr[prevIndex] > current) {
      // 向右移位，留出待插入的位置
      arr[preIndex + 1] = arr[prevIndex]

      prevIndex --
    }

    // 找到最终待插入的位置，插入元素
    arr[preIndex + 1] = current
  }

  return arr
}
```

时间复杂度为：O(n) * O(n) = O(n^2)

### 希尔排序

也称递减增量排序算法，是插入排序的一种更高效的改进版本。

1. 选择一个增量序列 t1，t2，……，tk，其中 ti > tj, tk = 1；

2. 按增量序列个数 k，对序列进行 k 趟排序；

3. 每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

``` js
function shellSort (arr) {
  const len = arr.length

  let gap = 1

  while (gap < len / 3) {
    // 动态定义间隔序列
    gap = gap * 3 + 1
  }

  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      const temp = arr[i]

      let j = i - gap

      for(j; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }

      arr[j + gap] = temp
    }
  }

  return arr
}
```


### 归并排序

``` js
function merge (left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length)
    result.push(left.shift())

  while (right.length)
    result.push(right.shift())

  return result
}

function mergeSort (arr) {
  // 采用自上而下的递归方法
  const len = arr.length

  if (len < 2) return arr

  const middle = Math.floor(len / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

mergeSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
```

![动画演示](https://cmspic-10004025.image.myqcloud.com/d478da00-cd39-11e8-941c-d77c1f413864_size_811x505#gif)

选择排序的时间复杂度为：O(nlogn)

### 快速排序

快速排序是由东尼·霍尔所发展的一种排序算法。在平均状况下，排序 n 个项目要 Ο(nlogn) 次比较。在最坏状况下则需要 Ο(n2) 次比较，但这种状况并不常见。事实上，快速排序通常明显比其他 Ο(nlogn) 算法更快，因为它的内部循环(inner loop)可以在大部分的架构上很有效率地被实现出来。

快速排序使用分治法(Divide and conquer)策略来把一个串行(list)分为两个子串行(sub-lists)。

快速排序又是一种分而治之思想在排序算法上的典型应用。本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。

快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，就是快，而且效率高！它是处理大数据最快的排序算法之一了。虽然 Worst Case 的时间复杂度达到了 O(n²)，但是人家就是优秀，在大多数情况下都比平均时间复杂度为 O(n logn) 的排序算法表现要更好。

### 算法步骤

1. 从数列中挑出一个元素，称为 “基准”(pivot);
2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面(相同的数可以到任一边)。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区(partition)操作；
3. 递归地(recursive)把小于基准值元素的子数列和大于基准值元素的子数列排序；

递归的最底部情形，是数列的大小是零或一，也就是永远都已经被排序好了。虽然一直递归下去，但是这个算法总会退出，因为在每次的迭代(iteration)中，它至少会把一个元素摆到它最后的位置去。

### 代码实现

``` js
function swap (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition (arr, left ,right) {     // 分区操作
    var pivot = left,                      // 设定基准值(pivot)
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }        
    }
    swap(arr, pivot, index - 1);
    return index-1;
}

function quickSort (arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}
```

``` js
function paritition2 (arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high;
    }
    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) {
      ++low;
    }
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

function quickSort2 (arr, low, high) {
  if (low < high) {
    let pivot = paritition2(arr, low, high);
    quickSort2(arr, low, pivot - 1);
    quickSort2(arr, pivot + 1, high);
  }
  return arr;
}
```




未完
















# 判断一个单词是否是回文？

回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫回文，也叫回环。比如 `mamam` `redivider`。

其实考的是，如何将字符串逆向排序，反转/颠倒？

``` js
function reverse (str) {
  // ...
}

function isPalindrome (str) {
  return str === reverse(str)
}
```

## 利用数组 `reverse` 方法

字符串转数组 -> 数组 `reverse` -> 数组转字符串

``` js
function reverse (str) {
  console.log('开始', +new Date())

  const reverseStr = [...str].reverse().join('') // str.split('').reverse().join('')

  console.log('结束', +new Date())

  return reverseStr
}
```

## 利用数组 `reduceRight` 方法

字符串转数组 -> 数组 `reduceRight`

数组 `reduce(function(accumulator, currentValue, currentIndex, array), initValue)` 、`reduceRight(function(accumulator, currentValue, currentIndex, array), initValue)` 接收 2 个参数。对于空数组是不会执行回调函数的。

`function(accumulator, currentValue, currentIndex, array)` 是必须。数组遍历执行的回调函数。

`initValue` 是可选。传递给函数的初始值。如果有这个参数，那么第一个 `accumulator` 等于 `initialValue`，并且 `currentValue` 等于数组中的第一个值；如果没有这个参数，那么第一个 `accumulator` 等于数组中的第一个值，并且 `currentValue` 等于数组中的第二个值。如果是是数组累加器，不要写 `initValue` 为 `0`，这样可以减少一次遍历，`0` 的累加也没有意义。

`reduce` 是顺序，`reduceRight` 是逆序。

``` js
function reverse (str) {
  console.log('开始', +new Date())

  const reverseStr = [...str].reduceRight((prev, curr) => prev + curr)

  console.log('结束', +new Date())

  return reverseStr
}
```

## 利用 `for` 循环

``` js
function reverse (str) {
  console.log('开始', +new Date())

  let reverseStr = ''
  for (let i = str.length - 1; i >= 0; i --) {
    reverseStr += str[i]
  }

  console.log('结束', +new Date())

  return reverseStr
}
```

## 利用字符串 `slice` 加递归

复杂且耗时

``` js
function reverse (str) {
  console.log('开始', +new Date())

  const reverseStr = str && (reverse(str.slice(1)) + str[0])

  console.log('结束', +new Date())

  return reverseStr
}
```

# 数组去重

## 利用 `Set`

``` js
function unique (arr) {
  console.log('开始', +new Date())

  const uniqueArr = [...new Set(arr)]

  console.log('结束', +new Date())

  return uniqueArr
}
```

## 利用 `Object` 的 `key` 唯一性

``` js
function unique (arr) {
  console.log('开始', +new Date())

  const obj = {}
  const uniqueArr = []
  for (let key of arr) {
    if (!obj[key]) {
      obj[key] = true
      uniqueArr.push(key)
    }
  }

  console.log('结束', +new Date())

  return uniqueArr
}
```

``` js
function unique (arr) {
  console.log('开始', +new Date())

  const obj = {}
  for (let key of arr) {
    if (!obj[key]) obj[key] = true
  }
  const uniqueArr = Object.keys(obj)

  console.log('结束', +new Date())

  return uniqueArr
}
```

## 利用数组的 `indexOf`

``` js
function unique (arr) {
  console.log('开始', +new Date())

  const uniqueArr = []
  for (let key of arr) {
    if (uniqueArr.indexOf(key) === -1) uniqueArr.push(key)
  }

  console.log('结束', +new Date())

  return uniqueArr
}
```

---

# 统计一个字符串出现最多的字母

这里需要统计重复次数，并求最大值。类似的求最小值。

## 利用 `Object` 的 `key` 唯一性

``` js
function findMaxDuplicateChar (arr) {
  console.log('开始', +new Date())

  const obj = {}
  for (let key of arr) {
    if (!obj[key]) {
      obj[key] = 1
    } else {
      obj[key] ++
    }
  }
  let maxChar = '', maxValue = 1
  for (let key in obj) {
    const value = obj[key]
    if (value > maxValue) {
      maxChar = key
      maxValue = value
    }
  }

  console.log('结束', +new Date())

  return maxChar
}
```

# 不借助临时变量，进行两个整数的交换

这种问题非常巧妙，需要大家跳出惯有的思维，利用 a , b进行置换。

主要是利用 + - 去进行运算，类似 a = a + (b - a) 实际上等同于最后的 a = b

``` js
function swap (a, b) {  
  b = b - a
  a = a + b
  b = a - b
}
```

# 未完
