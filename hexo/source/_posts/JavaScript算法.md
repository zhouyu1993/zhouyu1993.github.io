---
title: JavaScript算法

categories:
  - web

tags:
  - js
---

算法 (Algorithm) 是指解题方案的准确而完整的描述，是一系列解决问题的清晰指令，算法代表着用系统的方法描述解决问题的策略机制。也就是说，能够对一定规范的输入，在有限时间内获得所要求的输出。

前端算法，就是函数。算法复杂度就是函数复杂度/时间复杂度。

# 时间复杂度

## 第一大类，简单规则

### 规则一：“有限次操作”的时间复杂度往往是 O(1)。

例子：交换两个数a和b的值。

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

# 排序

`sort` 方法

``` js
[3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48].sort((a, b) => {
  console.log('啦')

  return a - b
})
```

冒泡排序、快速排序等

[十大经典排序算法](https://github.com/Wscats/CV/issues/13)

## 冒泡排序

冒泡排序(Bubble Sort)，也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

作为最简单的排序算法之一，冒泡排序给我的感觉就像 `Abandon` 在单词书里出现的感觉一样，每次都在第一页第一位，所以最熟悉。冒泡排序还有一种优化算法，就是立一个 `flag`，当在一趟序列遍历中元素没有发生交换，则证明该序列已经有序。但这种改进对于提升性能来说并没有什么太大作用。

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






























-----

- 2016.07

  [孩子王](https://baike.baidu.com/item/孩子王)

  5500 -> 8000(2017.07) -> 10500(2018.03) -> 1400(2018.04)

  新三板：839843

  准备上市

- 2017.03

  [焦点科技](https://baike.baidu.com/item/焦点科技股份有限公司) 7500

  深证：002315

- 2017.09

  [烽火通信](https://baike.baidu.com/item/烽火通信科技股份有限公司) 9000

  上证：600498

- 2017.10

  [苏宁](https://baike.baidu.com/item/苏宁云商集团股份有限公司) 10500

  深证：002024

- 2018.03

  [领添](https://baike.baidu.com/item/南京领添信息技术有限公司) 13000

  未上市

- 2018.04

  [亿嘉和](https://baike.baidu.com/item/苏宁云商集团股份有限公司) 14000

  上证：603666

- 2018.09

  [三只松鼠](https://baike.baidu.com/item/三只松鼠) 15000

  准备上市

- 2018.10

  [小米科技](https://baike.baidu.com/item/北京小米科技有限责任公司) 17000

  HK：01810


---------
