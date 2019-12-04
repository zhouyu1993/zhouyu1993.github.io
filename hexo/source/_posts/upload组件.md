---
title: JavaScript的new运算符

categories:
  - web

tags:
  - html

date: 2019/12/04
---

## 代码解析

``` html
<input class="kfcv-upload" type="file" :accept="accept" :capture="capture" :multiple="multiple" @change="onChange">
```

``` js
export default {
  props: {
    // 设置可选文件类型, 默认图片 image/*, 其他值如视频 video/*, 音频 audio/* 等, 如果设置多值以逗号分割, 即 'image/*, video/*'
    accept: {
      type: String,
      default: 'image/*'
    },
    // 捕获机制（有兼容问题）, 默认 false, 其他值如 camera 捕获相机, camcorder 捕获摄像, microphone 捕获录音
    capture: {
      type: [Boolean, String],
      default: false
    },
    // 是否支持多选, 默认 true, multiple 优先级高于 capture, 即当 multiple 为 true 时默认从相册选
    multiple: {
      type: Boolean,
      default: true
    },
  },
  onChange (e) {
    try {
      if (typeof FileReader === 'undefined') {
        console.error('您的浏览器不支持文件上传')
      } else {
        // fileList -> fileArray
        const files = [...e.target.files]

        files.forEach(file => {
          const { type, } = file

          if (/image/i.test(type)) {
            // 图片
            this.handleImage(file)
          } else if (/video/i.test(type)) {
            // 视频
            this.handleVideo(file)
          } else if (/audio/i.test(type)) {
            // 音频
            this.handleAudio(file)
          }
        })
      }
    } catch (e) {
      console.log(e)
    }
  },
  handleImage (file) {
    // 读取图片 fileObj -> base64Url
    this.readAsDataURL(file)
  },
  uploadImage (formData) {
    try {
      const xhr = new XMLHttpRequest()

      xhr.timeout = 5000
      xhr.responseType = 'json'

      xhr.open('POST', uploadUrl)

      if (/mobile/i.test(navigator.userAgent)) {
        // 移动端给个虚假 progress
        console.log('uploadProgress: ', 0.5, '上传中')
      } else {
        // PC 端支持 onprogress
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            console.log('uploadProgress: ', e.loaded / e.total, '上传中')
          }
        }
      }

      xhr.onload = (e) => {
        const { status, response } = e.target

        if ((status >= 200 && status < 300) || status === 304) {
          console.log('uploadProgress: ', 1, '上传成功')
        } else {
          console.log('uploadProgress: ', 0, '上传失败')
        }
      }
      xhr.onerror = (e) => {
        console.log(e)
        console.log('uploadProgress: ', 0, '上传失败')
      }

      xhr.ontimeout = (e) => {
        console.log(e)
        console.log('uploadProgress: ', 0, '上传超时')
      }

      xhr.send(formData)
    } catch (e) {
      console.log(e)
    }
  },
  readAsDataURL (file) {
    try {
      const reader = new FileReader()

      reader.onload = (e) => {
        const base64Url = e.target.result

        console.log(base64Url)

        // 处理图片 base64Url -> canvas -> base64Url -> blob
        this.processImage(file, base64Url)
      }

      reader.onerror = (e) => {
        console.log(e)
      }

      reader.readAsDataURL(file)
    } catch (e) {
      console.log(e)
    }
  },
  processImage (file, base64Url) {
    try {
      const img = new Image()

      img.src = base64Url

      img.onload = () => {
        // 获取图片原始宽高
        const width = img.width
        const height = img.height

        // 处理图片 base64Url -> canvas
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, width, height)

        // 获取图片信息 exif
        const imgObj = {
          src: base64Url
        }
        exif.getData(imgObj, () => {
          // 根据 Orientation 调整图片角度
          const orientation = imgObj.exifdata.Orientation

          // 1 横着, 3 右斜, 6 左斜, 8 倒着
          if (orientation && orientation !== 1) {
            switch (orientation) {
              case 8:
                // 8 倒着, 需要逆时针（向左）90 度旋转，并交换宽高
                canvas.width = height
                canvas.height = width
                ctx.rotate(-0.5 * Math.PI)
                ctx.translate(-1 * width, 0)
                break
              case 6:
                // 6 左斜或横着, 需要顺时针（向右）90 度旋转
                canvas.width = height
                canvas.height = width
                ctx.rotate(0.5 * Math.PI)
                ctx.translate(0, -1 * height)
                break
              case 3:
                // 3 右斜, 需要顺时针（向右）180 度旋转
                ctx.rotate(Math.PI)
                ctx.translate(-1 * width, -1 * height)
                break
              default:
                ctx.rotate(0)
            }
          }

          ctx.drawImage(img, 0, 0, width, height, 0, 0, width, height)

          // 缩小图片
          const w = Math.min(canvas.width, 1000)
          const h = canvas.height / canvas.width * w

          // 缩小图片需要重绘
          const _canvas = document.createElement('canvas')
          _canvas.width = w
          _canvas.height = h
          const _ctx = _canvas.getContext('2d')
          _ctx.fillStyle = '#fff'
          _ctx.fillRect(0, 0, w, h)
          _ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, w, h)

          // 压缩图片 canvas -> base64Url
          const _base64Url = _canvas.toDataURL(file.type, 0.9)

          setTimeout(() => {
            // base64Url -> blob
            this.dataURL2Blob(file, _base64Url)
          }, 0)
        })
      }

      img.onerror = (e) => {
        console.log(e)
      }
    } catch (e) {
      console.log(e)
    }
  },
  dataURL2Blob (file, base64Url) {
    try {
      // base64Url -> buffer
      let byteStr
      const parts = base64Url.split(',')
      if (parts[0].indexOf('base64') > 0) {
        byteStr = atob(parts[1])
      } else {
        byteStr = decodeURIComponent(parts[1])
      }
      const leng = byteStr.length
      const buffer = new ArrayBuffer(leng)
      const uint8 = new Uint8Array(buffer)
      for (let i = 0; i < leng; i += 1) {
        uint8[i] = byteStr.charCodeAt(i)
      }
      const type = parts[0].split(':')[1].split(';')[0]

      // buffer -> blob
      let blob
      const Builder = window.BlobBuilder || window.WebKitBlobBuilder
      if (Builder) {
        // android 不支持 new Blob, 只能借助 window.BlobBuilder || window.WebKitBlobBuilder
        const bb = new Builder()
        bb.append(buffer)
        blob = bb.getBlob(type)
      } else {
        // ios
        blob = new Blob([buffer], type ? { type } : {})
      }

      this.blob2FormData(file, blob)
    } catch (e) {
      console.log(e)
    }
  },
  blob2FormData (file, blob) {
    const formData = new FormData()
    formData.append('file', blob, file.name)

    // 上传图片
    this.uploadImage(formData)
  },
}
```

## 具体解析

* input 属性
  - accept
  - capture
  - multiple
* change 事件
* fileList -> fileArray
* FileReader 读取图片 fileObj -> base64Url
* base64Url -> canvas
* canvas 操作，缩放，裁剪，翻转，压缩，等等
* canvas -> base64Url
* base64Url -> blob
* blob -> formData
* formData 的 xhr 上传
* [exif-js](https://github.com/exif-js/exif-js)

## 竞品对比

[iview-upload](https://www.iviewui.com/components/upload)
