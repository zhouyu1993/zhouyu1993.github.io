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

`题目：sum = 1+2+3+...+n ，计算 sum 的值。`

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

## 几种常见的时间复杂度分析

只看最高量级的复杂度，效率是递减的

O(1) 常数阶

O(logn) 对数阶

O(n) 线性阶

O(n^2) 平方阶

O(n^3) 立方阶

O(2^n) 指数阶

O(n!) 阶乘阶

粗略的分为两类，`多项式量级`和`非多项式量级`。其中，非多项式量级只有两个：O(2^n) 和 O(n!)

---








## 第一大类，简单规则

### 规则一：“有限次操作”的时间复杂度往往是 O(1)。

例子：交换两个数 a 和 b 的值。

``` js
function swap (a, b) {
  const temp = a
  a = b
  b = temp
}
```

分析：通过了一个中间变量 temp，进行了 3 次操作，交换了 a 和 b 的值，swap 的时间复杂度是 O(1)。

画外音：这里的有限次操作，是指不随数据量的增加，操作次数增加。

### 规则二：“for循环”的时间复杂度往往是 O(n)。

例子：n 个数中找到最大/小值。

``` js
function findMax (arr) {
  const len = arr.length
  let maxIndex = 0

  for (let i = 1; i < len; i ++) {
    if (arr[i] < arr[maxIndex]) {
      maxIndex = i
    }
  }
  return arr[maxIndex]
}

function findMin (arr) {
  const len = arr.length
  let minIndex = 0

  for (let i = 1; i < len; i ++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i
    }
  }
  return arr[minIndex]
}
```

分析：通过一个for循环，将数据集遍历，每次遍历，都只执行“有限次操作”，计算的总次数，和输入数据量 n 呈线性关系。

### 规则三：“树的高度”的时间复杂度往往是O(lg(n))。

分析：树的总节点个数是 n，则树的高度是 lg(n)。

在一棵包含 n 个元素二分查找树上进行二分查找，其时间复杂度是 O(lg(n))。

对一个包含 n 个元素的堆顶元素弹出后，调整成一个新的堆，其时间复杂度也是 O(lg(n)。

## 第二大类：组合规则

通过简单规则的时间复杂度，来求解组合规则的时间复杂度。

例如：n 个数冒泡排序。后面分析。

例如：TopK 问题，通过建立 k 元素的堆，来从 n 个数中求解最大的 k 个数。

## 第三大类，递归求解

简单规则和组合规则可以用来求解非递归的算法的时间复杂度。对于递归的算法，该怎么分析呢？

接下来，通过几个案例，来说明如何通分析递归式，来分析递归算法的时间复杂度。

案例一：计算 1 到 n 的和，时间复杂度分析。

案例二：二分查找 binary_search，时间复杂度分析。

案例三：快速排序 quick_sort，时间复杂度分析。

# 数据结构和算法动态可视化

[数据结构和算法动态可视化](https://visualgo.net/zh)

# 排序

`sort` 方法

``` js
[3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48].sort((a, b) => {
  console.log('啦')

  return a - b
})
```

[十大经典排序算法](https://github.com/Wscats/CV/issues/13)

## 冒泡排序


### 算法步骤

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
4. 这个算法的名字由来是因为越大的元素会经由交换慢慢“浮”到数列的顶端(升序或降序排列)，就如同碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样，故名“冒泡排序”。

冒泡排序就是把小的元素往前调或者把大的元素往后调。比较是相邻的两个元素比较，交换也发生在这两个元素之间。所以，如果两个元素相等，是不会再交换的；如果两个相等的元素没有相邻，那么即使通过前面的两两交换把两个相邻起来，这时候也不会交换，所以相同元素的前后顺序并没有改变，所以冒泡排序是一种稳定排序算法。

### 动画演示

![动画演示](https://cmspic-10004025.image.myqcloud.com/4bf3c220-cace-11e8-941c-d77c1f413864_size_826x257#gif)

### 代码实现

``` js
function bubbleSort (arr) {
  const len = arr.length

  for (let i = 0; i < len - 1; i ++) {
    for (let j = 0; j < len - 1 - i; j ++) {
      // 相邻元素两两对比
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

bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
```

``` js
function bubbleSort (arr) {
  const len = arr.length
  let i = len

  while (i > 0) {
    for (let j = 0; j < i - 1; j ++) {
      // 相邻元素两两对比
      if (arr[j] > arr[j + 1]) {
        // 元素交换，左小右大
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }

    i --
  }

  return arr
}

bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
```

分析：冒泡排序，可以看成三个规则的组合：

1. 外层 for 循环
2. 内层 for 循环
3. 最内层的 swap

冒泡排序的时间复杂度为：O(n) * O(n) * O(1) = O(n^2)

最快：当输入的数据已经是正序时(都已经是正序了，我还要你冒泡排序有何用啊)。

最慢：当输入的数据是反序时(写一个 for 循环反序输出数据不就行了，干嘛要用你冒泡排序呢，我是闲的吗)。

## 选择排序

选择排序(Selection sort)，是一种简单直观的排序算法。数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。

### 算法步骤

1. 首先在未排序序列中找到最小(大)元素，存放到排序序列的起始位置。
2. 再从剩余未排序元素中继续寻找最小(大)元素，然后放到已排序序列的末尾。
3. 重复第二步，直到所有元素均排序完毕。

把小的元素往前调，每一次都保证最前面是最小的！

它的工作原理是每一次从待排序的数据元素中选出最小(或最大)的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。选择排序是【非稳定排序算法】。

### 动画演示

![动画演示](https://cmspic-10004025.image.myqcloud.com/12054df0-cae1-11e8-941c-d77c1f413864_size_811x248#gif)

### 代码实现

``` js
function selectionSort(arr) {
  const len = arr.length

  for (let i = 0; i < len - 1; i ++) {
    let minIndex = i

    for (let j = i + 1; j < len; j ++) {
      // 寻找最小数
      if (arr[j] < arr[minIndex]) {
        // 将最小数的索引保存
        minIndex = j
      }
    }

    // 元素交换，将最小数调到最前面
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}

selectionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
```

选择排序的时间复杂度为：O(n) * O(n) * O(1) = O(n^2)

## 插入排序

插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

插入排序和冒泡排序一样，也有一种优化算法，叫做拆半插入。

### 算法步骤

1. 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
2. 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。(如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。)

### 代码实现

``` js
function insertionSort (arr) {
  const len = arr.length
  let prevIndex, current

  for (let i = 1; i < len; i++) {
    prevIndex = i - 1
    current = arr[i]

    while (prevIndex >= 0 && arr[prevIndex] > current) {
      arr[prevIndex + 1] = arr[prevIndex]
      prevIndex --
    }

    arr[prevIndex + 1] = current
  }
  return arr
}

insertionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
```

![动画演示](https://cmspic-10004025.image.myqcloud.com/410d0a90-cc6f-11e8-941c-d77c1f413864_size_811x505#gif)

选择排序的时间复杂度为：O(n) * O(n) * O(1) = O(n^2)

## 希尔排序

希尔排序，也称递减增量排序算法，是插入排序的一种更高效的改进版本。但希尔排序是【非稳定排序算法】。

希尔排序是基于插入排序的以下两点性质而提出改进方法的：

1. 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率；
2. 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位；

希尔排序的基本思想是：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行依次直接插入排序。

### 算法步骤

1. 选择一个增量序列 t1，t2，……，tk，其中 ti > tj, tk = 1；
2. 按增量序列个数 k，对序列进行 k 趟排序；
3. 每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

### 代码实现

``` js
function shellSort (arr) {
  const len = arr.length
  let gap = 1, temp

  while (gap < len / 3) {
    // 动态定义间隔序列
    gap = gap * 3 + 1
  }

  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i]

      let j = i - gap
      for(j; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j+gap] = arr[j]
      }

      arr[j + gap] = temp
    }
  }

  return arr
}

shellSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])
```

## 归并排序

归并排序(Merge sort)是建立在归并操作上的一种有效的排序算法。该算法是采用分治法(Divide and Conquer)的一个非常典型的应用。

作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：

1. 自上而下的递归(所有递归的方法都可以用迭代重写，所以就有了第 2 种方法)；
2. 自下而上的迭代；

和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是 O(nlogn) 的时间复杂度。代价是需要额外的内存空间。

### 算法步骤

1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
4. 重复步骤 3 直到某一指针达到序列尾；
5. 将另一序列剩下的所有元素直接复制到合并序列尾。

### 代码实现

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

## 快速排序

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
