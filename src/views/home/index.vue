<!--
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2022-04-13 23:27:57
 * @Description: file description
-->
<template>
  <div class="s-home">
    <GlobalHeader />
    <div class="s-content">
      <SideBar />
      <div class="main-content-container" :style="{ height: contentHeight }">
        <div class="main-content-container-wrapper">
          <router-view></router-view>
        </div>
      </div>
      <ArticleCatalog />
    </div>
  </div>
</template>
<script>
import SideBar from '@/components/sidebar'
import GlobalHeader from '@/components/global-header'
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js'
import ArticleCatalog from '@/components/article-catalog'

export default {
  name: 'Index',
  data() {
    return {
      count: 0,
      contentHeight: 0,
    }
  },
  components: {
    SideBar,
    GlobalHeader,
    ArticleCatalog,
  },
  mounted() {
    this.setCodeHighLight()
    this.addExpand()
    const sGlobalHeader = document.querySelector('.s-global-header')
    const { height = 0 } = sGlobalHeader.getBoundingClientRect()
    this.contentHeight = `calc(100vh - ${height}px)`
  },
  updated() {
    this.setCodeHighLight()
    this.addExpand()
  },
  methods: {
    setCodeHighLight() {
      this.$nextTick(() => {
        ;[
          ...document.querySelectorAll(
            // ".vue-demo-highlight pre code:not(.hljs)"
            'pre code:not(.hljs)'
          ),
        ].forEach((block) => {
          hljs.highlightBlock(block)
        })
      })
    },
    addExpand() {
      this.$nextTick(() => {
        const dom = document.querySelectorAll('.vue-demo-highlight pre')
        dom.forEach((domItem) => {
          const height = domItem.scrollHeight
          domItem.style.setProperty('--max-height', height + 'px')
          domItem.addEventListener('dblclick', () => {
            let className = domItem.className
            if (className.indexOf('expand') === -1) {
              className = 'expand'
            } else {
              className = ''
            }
            domItem.className = className
          })
        })
      })
    },
  },
}
</script>
<style lang="less" scoped>
@import '~@/style/vars.less';
.s-home {
  background-color: #f4f5f5;
}
.s-content {
  display: flex;
  box-sizing: border-box;
}
.main-content-container {
  width: 100%;
  padding-top: 30px;
  overflow-y: auto;
  box-sizing: border-box;
  // height: calc(100vh - 50px);
  margin-right: @article-catalog-width+20px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  &-wrapper {
    height: 100%;
    overflow-y: auto;
    padding: 0 30px;
  }
}

/deep/.vue-demo-highlight {
  position: relative;
  padding-bottom: 30px;
  &::after {
    content: '双击代码区域折叠展开';
    text-align: center;
    display: block;
    width: 100%;
    height: 30px;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    bottom: 0;
    background: white;
    color: #ccc;
    font-size: 12px;
    line-height: 30px;
  }
  pre {
    transition: max-height 0.5s;
    overflow: hidden;
    max-height: 100px;
    margin-bottom: 0;
    &.expand {
      max-height: var(--max-height);
    }
  }
}
</style>
