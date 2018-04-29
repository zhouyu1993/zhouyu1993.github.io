import Vue from 'vue'
import toast from './index.vue'

const Toast = Vue.extend(toast)

const toastMethod = (options = {}) => {
  let instance
  if (!instance) {
    if (typeof options === 'string') {
      instance = new Toast({
        el: document.createElement('div')
      })
      instance.message = options || '提示'
    } else if (typeof options === 'object') {
      instance = new Toast({
        el: document.createElement('div'),
        propsData: {
          ...options
        }
      })
    }
  }
  if (instance.visible) return
  instance.close = () => {
    if (instance.visible) {
      setTimeout(() => {
        instance.visible = false
      }, instance.duration)
      setTimeout(() => {
        instance.existing = false
        instance = null
      }, Number(instance.duration) + 300)
    }
  }
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
    if (instance.autoClose) {
      instance.close()
    }
  })
  return new Promise((resolve) => {
    resolve(instance)
  })
}

export default toastMethod
