// 是否数字
const isNumber = (input) => {
  if (['number', 'string'].indexOf(typeof input) > -1) {
    return !isNaN(Number(input))
  }
  return false
}

// 是否整数
const isInteger = (input) => {
  if (isNumber(input)) {
    const num = Number(input)
    return (num * 2 % 2) === 0
  }
  return false
}

// 是否非负整数
const isPositiveInteger = (input) => {
  if (isInteger(input)) {
    const num = Number(input)
    return num >= 0
  }
  return false
}

// 补零
const zerofill = (input) => {
  if (isPositiveInteger(input)) {
    const num = Number(input)
    return num < 10 ? `0${num}` : num
  }
  return input
}

// 时间格式化
const splitTime = (ms) => {
  ms = Number(ms)
  const time = typeof ms !== 'undefined' ? new Date(ms) : new Date()
  return {
    year: time.getFullYear(),
    month: zerofill(time.getMonth() + 1),
    day: zerofill(time.getDate()),
    week: time.getDay(),
    hour: zerofill(time.getHours()),
    minute: zerofill(time.getMinutes()),
    second: zerofill(time.getSeconds())
  }
}

// 时间戳-毫秒 格式化; format: 'YY-MM-DD hh:mm:ss'
export default function (ms, format) {
  const formater = format || 'YY-MM-DD hh:mm:ss'
  const t = splitTime(ms)
  return formater.replace('YY', t.year)
            .replace('MM', t.month)
            .replace('DD', t.day)
            .replace('hh', t.hour)
            .replace('mm', t.minute)
            .replace('ss', t.second)
}
