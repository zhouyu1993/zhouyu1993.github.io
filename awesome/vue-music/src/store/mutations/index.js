export default {
  setNumber (state, payload) {
    state.number += payload
  },
  setSearch (state, payload) {
    if (payload.curpage === 1) {
      state.search = payload
    } else {
      const flag = state.search
      state.search = {
        keyword: payload.keyword,
        curnum: payload.curnum,
        curpage: payload.curpage,
        list: flag.list.concat(payload.list),
        totalnum: payload.totalnum
      }
    }
  },
  setSong (state, payload) {
    state.song = payload
  }
}
