/**
 * 排序后输出 id
 * before 2，意思是排在 id 2 的前面，first 意思是排最前面
 * @param {Array<Object>} list
 * @returns {Array<number>}
 * @example
 * [
 *  { id: 1, before: 2 },
 *  { id: 2, before: 3 },
 *  { id: 3, before: 6 },
 *  { id: 5, first: true },
 *  { id: 6, last: true },
 *  { id: 7, before: 5 },
 *  { id: 8, after: 6 },
 * ];
 * 输出为
 * [7, 5, 1, 2, 3, 6, 8];
 */
// function sort (arr) {
//   let result = []
//
//   let i = 0
//
//   function recursion (id) {
//     i ++
//
//     if (!arr.length) return
//
//     if (id) {
//       const before = arr.findIndex(v => v.before === id)
//
//       if (before > -1) {
//         const item = arr[before]
//
//         result.splice(result.findIndex(v => v.id === id), 0, item)
//
//         arr.splice(before, 1)
//
//         recursion(item.id)
//       }
//
//       const after = arr.findIndex(v => v.after === id)
//
//       if (after > -1) {
//         const item = arr[after]
//
//         result.splice(result.findIndex(v => v.id === id) + 1, 0, item)
//
//         arr.splice(after, 1)
//
//         recursion(item.id)
//       }
//     } else {
//       const first = arr.findIndex(v => v.first)
//
//       if (first > -1) {
//         const item = arr[first]
//
//         result.unshift(item)
//
//         arr.splice(first, 1)
//
//         recursion(item.id)
//       }
//
//       const last = arr.findIndex(v => v.last)
//
//       if (last > -1) {
//         const item = arr[last]
//
//         result.push(item)
//
//         arr.splice(last, 1)
//
//         recursion(item.id)
//       }
//     }
//   }
//
//   recursion()
//
//   console.log(i)
//
//   result = result.map(item => item.id)
//
//   console.log(result)
//
//   return result
// }

function sort (arr) {
  let result = []

  let i = 0

  function recursion (id) {
    arr.forEach((item, index) => {
      i ++

      if (id) {
        if (item.before === id) {
            result.splice(result.findIndex(v => v.id === id), 0, item)

            delete arr[index]

            recursion(item.id)
        }

        if (item.after === id) {
            result.splice(result.findIndex(v => v.id === id) + 1, 0, item)

            delete arr[index]

            recursion(item.id)
        }
      } else {
        if (item.first) {
            result.unshift(item)

            delete arr[index]

            recursion(item.id)
        }

        if (item.last) {
            result.push(item)

            delete arr[index]

            recursion(item.id)
        }
      }
    })
  }

  recursion()

  console.log(i)

  result = result.map(item => item.id)

  console.log(result)

  return result
}

sort([
  { id: 1, before: 2 },
  { id: 2, before: 3 },
  { id: 3, before: 6 },
  { id: 7, before: 5 },
  { id: 8, after: 6 },
  { id: 5, first: true },
  { id: 6, last: true },
])
