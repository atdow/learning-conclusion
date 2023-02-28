<!--
 * @Author: atdow
 * @Date: 2021-06-17 10:31:50
 * @LastEditors: null
 * @LastEditTime: 2023-02-28 18:48:20
 * @Description: file description
-->
<template>
  <div class="s-home">
    <GlobalHeader />
    <div class="s-content">
      <SideBar />
      <div class="main-content-container" :style="{ height: contentHeight }">
        <MyScrollbar style="height: 100%" ref="scrollbarRef">
          <div class="main-content-container-wrapper">
            <router-view></router-view>
          </div>
        </MyScrollbar>
      </div>
      <ArticleCatalog @menuClick="menuClick" />
    </div>
  </div>
</template>
<script>
import SideBar from '@/components/sidebar'
import GlobalHeader from '@/components/global-header'
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js'
import ArticleCatalog from '@/components/article-catalog'
import MyScrollbar from '@/packages/scrollbar'
import { scrollTo } from '@/utils/scrollUtils'

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
    MyScrollbar,
  },
  mounted() {
    // this.setCodeHighLight()
    // this.addExpand()
    const sGlobalHeader = document.querySelector('.s-global-header')
    const { height = 0 } = sGlobalHeader.getBoundingClientRect()
    this.contentHeight = `calc(100vh - ${height}px)`
  },
  updated() {
    this.setCodeHighLight()
    this.addExpand(true)
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
          // hljs.highlightAuto(block)
          // hljs.highlightAll(block)
        })
      })
    },
    addExpand(isRemove = false) {
      this.$nextTick(() => {
        const dom = document.querySelectorAll('.vue-demo-highlight')
        dom.forEach((domItem) => {
          const preDom = domItem.querySelector('.vue-demo-highlight pre')
          const height = preDom.scrollHeight
          preDom.style.setProperty('--max-height', height + 'px')
          const codeFolderDom = domItem.querySelector('.code-folder')
          if (isRemove === true) {
            codeFolderDom.onclick = null
          } else {
            codeFolderDom.onclick = (target) => {
              this.codeFolderDomClickResolve(target, preDom)
            }
          }
        })
      })
    },
    codeFolderDomClickResolve(target, preDom) {
      const srcElement = target.srcElement
      const text = srcElement.innerText
      if (text === '显示代码' || '') {
        srcElement.innerText = '隐藏代码'
      } else {
        srcElement.innerText = '显示代码'
      }
      // 代码折叠高度控制
      let className = preDom.className
      if (className.indexOf('expand') === -1) {
        className = 'expand'
      } else {
        className = ''
      }
      preDom.className = className
    },
    menuClick(id) {
      scrollTo(this.$el.querySelector(`#${id}`).offsetTop, { getContainer: () => this.$refs.scrollbarRef.wrap })
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
    padding: 0 30px;
  }
}

/deep/.vue-demo-highlight {
  position: relative;
  &:hover {
    color: @theme-color;
  }
  pre {
    transition: max-height 0.5s;
    overflow: hidden;
    max-height: 0px;
    margin-bottom: 0;
    &.expand {
      max-height: var(--max-height);
    }
  }
  .code-folder {
    width: 100%;
    height: 30px;
    border: 1px solid #ebebeb;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    font-size: 12px;
    line-height: 30px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 0 0 2px 2px;
    &:hover {
      color: @theme-color;
    }
  }
}
</style>
