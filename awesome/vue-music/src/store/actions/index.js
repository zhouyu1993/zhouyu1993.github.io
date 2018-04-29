import { fetchJsonp } from '@/plugins/fetch'
import api from '../api'

export default {
  updateNumber ({ commit }, number) {
    commit('setNumber', number)
  },
  async getSearch ({ commit }, { w, p }) {
    try {
      const json = await fetchJsonp(api.search, {
        w,
        n: 10,
        p
      }, {
        jsonpCallback: 'jsonpCallback'
      })
      if (json.code === 0 && json.subcode === 0) {
        const keyword = json.data && json.data.keyword
        const song = (json.data && json.data.song && json.data.song) || {}
        song.keyword = keyword
        commit('setSearch', song)
      }
    } catch (e) {
      throw new Error(e)
    }
  }
}
