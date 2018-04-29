<template>
  <div class="vue-song">
    <div v-show="loading" class="loading">
      <div class="loading-core">
        <div class="loading-wrap">
          <div class="loading-item" v-for="i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"></div>
        </div>
        <div class="loading-text">努力加载中...</div>
      </div>
    </div>
    <div class="bg-blur" :style="`
    background-image:url(https://y.gtimg.cn/music/photo_new/T002R150x150M000${song.albummid}.jpg)`"></div>
    <div class="bg-msk"></div>
    <div class="song-wrapper">
      <audio :src="`https://dl.stream.qqmusic.qq.com/C100${song.songmid}.m4a?fromtag=46`" loop id="audio" ref="audio"></audio>
      <div class="song-info">
        <img :src="`https://y.gtimg.cn/music/photo_new/T002R150x150M000${song.albummid}.jpg`">
        <div class="flex">
          <span class="song-name">{{song.songname | unicodeTen}}</span>
          <p class="song-singer">
            <span v-for="(singer, index) in song.singer">{{singer.name | unicodeTen}}<i v-if="index !== (song.singer.length - 1)">/</i></span>
          </p>
        </div>
        <i class="iconfont icon-play" v-if="!playing" @click="play"></i>
        <i class="iconfont icon-pause" v-else @click="pause"></i>
      </div>
      <div class="song-progress">
        <span class="currentTime">{{currentTime | dateFormate('mm:ss')}}</span>
        <div class="progress">
          <p class="progress-played" :style="`width:${progress}`"></p>
        </div>
        <span class="duration">{{duration | dateFormate('mm:ss')}}</span>
      </div>
      <a class="download" :href="`https://dl.stream.qqmusic.qq.com/C100${song.songmid}.m4a?fromtag=46`"><i class="iconfont icon-download"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentSong: {
      type: Object
    }
  },
  data () {
    return {
      song: this.currentSong,
      loading: false,
      playing: false,
      currentTime: 0,
      duration: 0,
      progress: '0%'
    }
  },
  watch: {
    currentSong (song) {
      this.pause()
      this.song = song
    }
  },
  methods: {
    play () {
      const el = this.$refs.audio
      if (el) {
        el.play()
      }
    },
    pause () {
      const el = this.$refs.audio
      if (el) {
        el.pause()
      }
    }
  },
  mounted () {
    const el = this.$refs.audio

    if (el) {
      el.play()

      const touchstart = () => {
        el.play()
        console.log('touchstart')
      }
      document.body.addEventListener('touchstart', touchstart)

      document.addEventListener('WeixinJSBridgeReady', () => {
        el.play()
        console.log('WeixinJSBridgeReady')
      })

      el.addEventListener('play', () => {
        document.body.removeEventListener('touchstart', touchstart)
        this.playing = true
      })

      el.addEventListener('pause', () => {
        this.playing = false
      })

      el.addEventListener('waiting', () => {
        this.loading = true
        el.play()
      })

      el.addEventListener('loadstart', () => {
        this.loading = true
        el.play()
      })

      el.addEventListener('durationchange', () => {
        this.duration = (el.duration || 0) * 1000 // 化毫秒
      })

      el.addEventListener('canplaythrough', () => {
        this.loading = false
      })

      el.addEventListener('timeupdate', () => {
        this.duration = (el.duration || 0) * 1000 // 化毫秒
        this.currentTime = el.currentTime * 1000 // 化毫秒
        this.progress = el.duration ? el.currentTime / el.duration * 100 + '%' : '0%' // 进度条
      })

      el.addEventListener('error', () => {
        this.loading = false
        this.$$toast('网络异常或者需要会员')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
@import '../../assets/css/rem';

.vue-song {
  position: fixed;
  bottom: 0;
  z-index: 997;
  width: rem(750);
  height: rem(500);

  .loading {
    position: relative;
    z-index: 2000;

    &-core {
      position: fixed;
      top: 0;
      left: 50%;
      z-index: 2001;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: rem(750);
      padding: rem(10) 0;
      font-size: rem(32);
      text-align: center;
      word-break: break-all;
      background-color: rgba(0, 0, 0, .7);
      transform: translate3d(-50%, 0, 0);

      $centerRadius: .8em;
      $itemWidth: .4em;
      $itemHeight: .1em;
      $width: $centerRadius + $itemWidth * 2;
      $height: $width;

      .loading-wrap {
        position: relative;
        width: $width;
        height: $height;

        .loading-item {
          position: absolute;
          top: 50%;
          left: 50%;
          width: $itemWidth;
          height: $itemHeight;
          margin-top: $itemHeight / 2 * -1;
          margin-left: $centerRadius / 2;
          background-color: #fff;
          border-radius: 1px;
          transform-origin: ($centerRadius / 2 * -1) ($itemHeight / 2);

          @for $i from 1 through 12 {
            &:nth-child(#{$i}) {
              transform: rotate(($i - 1) * 30deg);
              animation: loading-item 1s linear infinite #{-1 + $i / 12}s;
            }
          }

          @at-root {
            @keyframes loading-item {
              0% {
                opacity: 0;
              }

              100% {
                opacity: 1;
              }
            }
          }
      }
      }

      .loading-text {
        padding-left: rem(30);
        color: #fff;
      }
    }
  }

  .bg-blur {
    position: fixed;
    bottom: 0;
    z-index: 998;
    width: rem(750);
    height: rem(500);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(15px);
  }

  .bg-msk {
    position: fixed;
    bottom: 0;
    z-index: 999;
    width: rem(750);
    height: rem(500);
    background-color: rgba(0, 0, 0, .6);
  }

  .song-wrapper {
    position: relative;
    z-index: 1000;
    height: 100%;

    .song-info {
      display: flex;
      align-items: center;
      padding: rem(20);
      background-color: rgba(0, 0, 0, .1);

      img {
        width: rem(160);
        height: rem(160);
      }

      .flex {
        flex: 1;
        margin-left: rem(20);
        font-size: rem(36);
        color: #fff;
      }

      .icon-play, .icon-pause {
        font-size: rem(70);
        color: #fff;
        opacity: .6;
      }
    }

    .song-progress {
      position: absolute;
      bottom: rem(150);
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: rem(100);
      padding: rem(20);
      color: #fff;
      background-color: rgba(0, 0, 0, .1);

      .progress {
        flex: 1;
        height: 2px;
        margin: 0 rem(20);
        background-color: #fff;

        &-played {
          height: 2px;
          background-color: #31c27c;
        }
      }
    }

    .download {
      position: absolute;
      bottom: rem(50);
      display: block;
      width: 100%;
      height: rem(60);
      text-align: center;

      i {
        display: inline-block;
        font-size: rem(60);
        line-height: rem(60);
        color: #fff;
      }
    }
  }
}
</style>
