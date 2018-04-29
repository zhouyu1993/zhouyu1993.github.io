<template>
  <div class="vue-search">
    <div class="vue-search-wrapper">
      <div class="search-content">
        <i class="iconfont icon-sousuo"></i>
        <input class="input" placeholder="搜索歌曲、歌单、专辑" v-model="keyword" @keyup.enter="submit(keyword)" @focus="focus">
        <i class="iconfont icon-x" v-show="keyword.length" @click="clear"></i>
      </div>
      <div class="search-cancel" v-show="visible" @click="cancel">取消</div>
    </div>
    <ul class="vue-search-records" v-if="records" v-show="visible">
      <li v-for="value in records" @click="submit(value)"><i class="iconfont icon-clockoutline"></i><span>{{value}}</span><i class="iconfont icon-close" @click.self.stop="del(value)"></i></li>
      <li class="records-clear" @click="clearAll"><p>清除搜索记录</p></li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      keyword: '',
      visible: false,
      records: null
    }
  },
  methods: {
    ...mapActions(['getSearch']),
    async submit (keyword) {
      try {
        if (!keyword.trim()) return
        const search = window.localStorage['vue-demo-search']
        if (search) {
          const arr = search.split(',')
          arr.push(keyword)
          window.localStorage['vue-demo-search'] = [...new Set(arr)].join(',')
        } else {
          window.localStorage['vue-demo-search'] = keyword
        }
        await this.getSearch({
          w: keyword,
          p: 1
        })
        this.keyword = keyword
        this.visible = false
      } catch (e) {
        this.$$toast('系统异常')
      }
    },
    focus () {
      const search = window.localStorage['vue-demo-search']
      this.records = search && search.split(',')
      this.visible = true
    },
    clear () {
      this.keyword = ''
    },
    cancel () {
      this.keyword = ''
      this.visible = false
    },
    del (value) {
      const search = window.localStorage['vue-demo-search']
      const arr = search.split(',')
      this.records = arr.filter((v) => {
        return value !== v
      })
      window.localStorage['vue-demo-search'] = this.records.join(',')
    },
    clearAll () {
      window.localStorage.removeItem('vue-demo-search')
      this.records = null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';

.vue-search-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: rem(20);
  background: #f4f4f4;

  .search-content {
    display: flex;
    align-items: center;
    flex: 1;
    padding: rem(20);
    background: #fff;

    .input {
      width: 100%;
      height: rem(40);
      margin-left: rem(20);
      font-size: rem(30);
      line-height: rem(40);
    }

    .icon-sousuo {
      font-size: rem(24);
      line-height: rem(40);
    }

    .icon-x {
      font-size: rem(24);
      line-height: rem(40);
      color: #b1b1b1;
    }
  }

  .search-cancel {
    width: rem(100);
    font-size: rem(28);
    text-align: center;
  }
}

.vue-search-records {
  li {
    @include nativeborder();
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 rem(30);
    font-size: rem(30);
    line-height: rem(90);

    span {
      display: inline-block;
      width: 100%;
      padding-left: rem(20);
    }

    .icon-close {
      padding-left: rem(20);
      color: #999;
    }

    &.records-clear {
      p {
        width: 100%;
        font-size: rem(24);
        color: #34d24f;
        text-align: center;
      }
    }
  }
}
</style>
