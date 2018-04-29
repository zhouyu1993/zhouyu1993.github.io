import dateFormate from './dateFormate'

export default function intall (Vue) {
  // unicode 十进制转化 文字；一些日文韩文字符
  Vue.filter('unicodeTen', (value) => {
    return value.replace(/(&#{1}[0-9]{5};{1})/gi, (v) => {
      const code = v.replace(/&#(.*);/, '$1')
      return String.fromCodePoint(code)
    })
  })
  // 时间格式化
  Vue.filter('dateFormate', dateFormate)
}
