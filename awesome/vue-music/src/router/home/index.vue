<template>
  <div class="home">
    <search />
    <songs v-model="song" />
    <div class="fixed-height"></div>
    <song :currentSong="currentSong" v-if="currentSong.songmid" />
  </div>
</template>

<script>
import search from '@/components/search'
import songs from '@/components/songs'
import song from '@/components/song'

export default {
  name: 'home',
  data () {
    return {
      song: {
        albummid: '0047ChBA4Npqsc',
        songmid: '001jNQV632EnGA',
        songname: 'Oops',
        singer: [
          {
            name: 'Little Mix'
          },
          {
            name: 'Charlie Puth'
          }
        ]
      },
      currentSong: {},
    }
  },
  components: {
    search,
    songs,
    song
  },
  watch: {
    'song.songmid' () {
      this.currentSong = this.song
    }
  },
  mounted () {
    if (this.$route.query.__refresh) {
      window.localStorage.clear()
    }
    const song = window.localStorage['vue-demo-song']
    if (song) {
      try {
        this.song = JSON.parse(song)
        this.currentSong = this.song
      } catch (e) {
        window.localStorage['vue-demo-song'] = JSON.stringify(this.song)
        this.currentSong = this.song
      }
    } else {
      window.localStorage['vue-demo-song'] = JSON.stringify(this.song)
      this.currentSong = this.song
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/rem';

.fixed-height {
  height: rem(500);
  margin-top: rem(30);
}
</style>
