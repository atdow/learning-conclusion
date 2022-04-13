<template>
  <div class="s-magnify" v-if="showState">
    <div class="s-magnify-content">
      <div class="s-magnify-header">
        <span class="title">{{ title }}</span>
        <div class="close">
          <i class="iconfont cl-icon-close" @click="close"></i>
        </div>
      </div>
      <div class="s-magnify-slot">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Magnify',
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      showState: false,
    }
  },
  components: {},
  watch: {
    showState: {
      immediate: true,
      handler: function (params) {
        if (this.showState) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = '' // 出现滚动条
        }
      },
    },
  },
  computed: {},
  created() {},
  mounted() {
    document.addEventListener('keydown', this.keyCodeResolve)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', this.keyCodeResolve)
    })
  },
  beforeDestroy() {
    document.body.style.overflow = '' // 出现滚动条
  },
  methods: {
    close() {
      this.showState = false
      this.$emit('close', true)
    },
    show() {
      this.showState = true
    },
    keyCodeResolve(event) {
      if (event.keyCode == 27) {
        this.close()
      }
    },
  },
}
</script>

<style lang="less" scoped>
.s-magnify {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(1, 1, 1, 0.3);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .close {
    transition: all 0.2s;
    &:hover {
      transform: rotate(90deg);
    }
    i {
      font-size: 23px;
    }
    cursor: pointer;
  }
  .s-magnify-content {
    background: white;
    width: calc(100vw - 100px);
    height: calc(100vh - 100px);
    border-radius: 10px;
    box-sizing: border-box;

    .s-magnify-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eff1f5;
      padding: 10px 20px;
      height: 50px;
      .title {
        font-weight: 600;
        font-size: 18px;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #333333;
      }
    }
    .s-magnify-slot {
      padding: 20px;
    }
  }
}
</style>
