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

![增长率](https://cmspic-10004025.image.myqcloud.com/3700160e-b78d-4094-9630-dc77f3c2ec27)

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

## 十大经典排序算法

https://github.com/hustcc/JS-Sorting-Algorithm

https://github.com/Wscats/CV/issues/13

http://bubkoo.com/tags/algorithm/

### 冒泡排序

算法步骤：
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

算法步骤：
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

算法步骤：
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

算法步骤：
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

采用分治法(Divide and conquer)

分而治之。

两种方法：
  * 自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第 2 种方法）；
  * 自下而上的迭代；

算法步骤：
  1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；

  2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置；

  3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；

  4. 重复步骤 3 直到某一指针达到序列尾；

  5. 将另一序列剩下的所有元素直接复制到合并序列尾。

``` js
function merge (left, right) {
  const result = []

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
```

时间复杂度为：O(nlogn)

[从分治算法到 MapReduce](https://mp.weixin.qq.com/s/nXnvirzfMEtBuKkU1vXu3w)

### 快速排序

使用分治法(Divide and conquer)策略来把一个串行(list)分为两个子串行(sub-lists)。

分而治之。

本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。

快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，就是快，而且效率高！它是处理大数据最快的排序算法之一了。虽然 Worst Case 的时间复杂度达到了 O(n²)，但是人家就是优秀，在大多数情况下都比平均时间复杂度为 O(nlogn) 的排序算法表现要更好。

算法步骤：
  1. 从数列中挑出一个元素，称为 “基准”(pivot);

  2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面(相同的数可以到任一边)。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区(partition)操作；

  3. 递归地(recursive)把小于基准值元素的子数列和大于基准值元素的子数列排序；

  递归的最底部情形，是数列的大小是零或一，也就是永远都已经被排序好了。虽然一直递归下去，但是这个算法总会退出，因为在每次的迭代(iteration)中，它至少会把一个元素摆到它最后的位置去。

### 代码实现

``` js
function swap (arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function partition (arr, left ,right) {
  // 分区操作
  // 设定基准值(pivot)
  const pivot = left
  let index = pivot + 1

  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)

      index ++;
    }        
  }

  swap(arr, pivot, index - 1)

  return index - 1
}

function quickSort (arr, left, right) {
  const len = arr.length

  left = typeof left != 'number' ? 0 : left,
  right = typeof right != 'number' ? len - 1 : right

  if (left < right) {
    const partitionIndex = partition(arr, left, right)

    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }

  return arr
}
```

[left, right) 代表区间，从 left 到 right 之间进行排序！

### 堆排序 {没搞懂}

利用堆这种数据结构所设计的一种排序算法。

堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。

堆排序可以说是一种利用堆的概念来排序的选择排序。

分为两种方法：
  * 大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列；
  * 小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列；

堆排序的平均时间复杂度为 Ο(nlogn)。

算法步骤：
  1. 创建一个堆 H[0……n-1]；

  2. 把堆首（最大值）和堆尾互换；

  3. 把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；

  4. 重复步骤 2，直到堆的尺寸为 1。

``` js
var len // 因为声明的多个函数都需要数据长度，所以把 len 设置成为全局变量

function swap (arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function heapify (arr, i) { // 堆调整
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i

  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest != i) {
    swap(arr, i, largest)
    heapify(arr, largest)
  }
}

function buildMaxHeap (arr) { // 建立大顶堆
  len = arr.length;

  for (var i = Math.floor(len / 2); i >= 0; i --) {
    heapify(arr, i);
  }
}

function heapSort (arr) {
  buildMaxHeap(arr)

  for (var i = arr.length - 1; i > 0; i --) {
    swap(arr, 0, i);

    len --;

    heapify(arr, 0);
  }

  return arr;
}
```

### 计数排序 {没搞懂}

核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

必须知道最大值。。。

``` js
function countingSort (arr, maxValue) {
  var bucket = new Array(maxValue + 1),
    sortedIndex = 0,
    arrLen = arr.length,
    bucketLen = maxValue + 1;

  for (var i = 0; i < arrLen; i ++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }

    bucket[arr[i]] ++;
  }

  for (var j = 0; j < bucketLen; j ++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;

      bucket[j] --;
    }
  }

  return arr;
}
```

### 桶排序 {没搞懂}

桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。

为了使桶排序更加高效，我们需要做到这两点：

  1. 在额外空间充足的情况下，尽量增大桶的数量

  2. 使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中

同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。

最快：当输入的数据可以均匀的分配到每一个桶中。

最慢：当输入的数据被分配到了同一个桶中。

``` js
function bucketSort (arr, bucketSize) {
  if (arr.length === 0) return arr

  var i
  var minValue = arr[0]
  var maxValue = arr[0]
  for (i = 1; i < arr.length; i ++) {
    if (arr[i] < minValue) {
      minValue = arr[i] // 输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i] // 输入数据的最大值
    }
  }

  // 桶的初始化
  var DEFAULT_BUCKET_SIZE = 5 // 设置桶的默认数量为 5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  var buckets = new Array(bucketCount)
  for (i = 0; i < buckets.length; i ++) {
    buckets[i] = []
  }

  // 利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i ++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i])
  }

  arr.length = 0
  for (i = 0; i < buckets.length; i ++) {
    insertionSort(buckets[i]) // 对每个桶进行排序，这里使用了插入排序
    for (var j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j])
    }
  }

  return arr
}
```

### 基数排序 {没搞懂}

基数排序是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。

``` js
// LSD Radix Sort
var counter = []
function radixSort (arr, maxDigit) {
  var mod = 10
  var dev = 1
  for (var i = 0; i < maxDigit; i ++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j ++) {
      var bucket = parseInt((arr[j] % mod) / dev)
      if (counter[bucket] == null) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j])
    }

    var pos = 0

    for (var j = 0; j < counter.length; j ++) {
      var value = null
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos ++] = value
        }
      }
    }
  }
  return arr
}
```

### 基数排序 vs 计数排序 vs 桶排序

这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：

  * 基数排序：根据键值的每位数字来分配桶；
  * 计数排序：每个桶只存储单一键值；
  * 桶排序：每个桶存储一定范围的数值；

## 时间换空间以及空间换时间

两个数字进行交换

``` js
// 时优 运用空间而减少了时间的使用
function swap (a, b) {
	var temp = a
	a = b
	b = temp
}

// 空优 运用时间而减少了空间的使用
function swap (a, b) {
	a = a + b
	b = a - b
	a = a - b
}
```

数组去重，也是一个典型的用空间换时间的例子

``` js
function unique (arr) {
	var obj = {}
	var result = []

	for (var i in arr) {
		if(!obj[arr[i]]) {
			obj[arr[i]] = true

			result.push(arr[i])
		}
	}

	return result
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
  a = a + b
	b = a - b
	a = a - b
}
```

# 未完
