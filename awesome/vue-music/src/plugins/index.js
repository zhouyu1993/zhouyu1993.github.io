import jsCookie from 'js-cookie'
import toast from '@/components/common/toast'

export default function install (Vue) {
  Vue.prototype.$$cookie = jsCookie
  Vue.prototype.$$toast = toast
}
