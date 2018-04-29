import fetch from 'fetch-jsonp'
import queryString from 'query-string'
import conf from './config.js'

/**
* @method [发送fetch请求]
* @param  {[String]} url     [请求地址]
* @param  {[Object]} data    [param数据]
* @param  {[Object]} options [配置参数]
* e.g: [String]method, [Object]headers, [String]credentials
* @return {[Object]}      [请求结果，暂时只支持json格式的请求]
*/

const _fetch = async (url, data, options) => {
  try {
    const reqUrl = (data && Object.keys(data).length > 0) ? `${url}?${queryString.stringify(data)}` : url
    const op = {
      jsonpCallback: 'callback',
      ...conf,
      ...options
    }
    const res = await fetch(reqUrl, op)
    const json = await res.json()
    return json
  } catch (e) {
    throw new Error(e)
  }
}

export default (url, data, options) => {
  return _fetch(url, data, options)
}
