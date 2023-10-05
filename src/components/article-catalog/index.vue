<!--
 * @Author: atdow
 * @Date: 2022-04-04 22:36:44
 * @LastEditors: null
 * @LastEditTime: 2023-10-05 16:24:58
 * @Description: 目录组件
-->
<template>
   
  <div class="article-catalog" :style="{ width: menuWidth + 'px' }">
     
    <p class="article-catalog-reminder">目录</p>
    <SinoScrollbar :style="`height: ${400}px`" class="scrollbar" ref="scrollbarRef">
      <Menu :list="menuList" @menuClick="menuClick" ref="menuRef" @activeChange="activeChange" />
      <p class="article-catalog-default" v-if="menuList.length === 0">暂无目录</p>
      <!-- <div v-html="catalogStr" v-else></div> -->
    </SinoScrollbar>
    <width-drag
      class="width-drag"
      :width="menuWidth"
      :min-width="300"
      :max-width="400"
      positionType="left"
      @widthChange="widthChange"
    />
  </div>
</template>
 
<script>
import SinoScrollbar from '@/packages/scrollbar'
import WidthDrag from '@/packages/width-drag'
import Menu from './Menu'
let hFlatLevelArr = [
  // { hLevel: 4 }
]
let dataIdIndex = 0
// let startTagReg = /<h[0-9]\s{0,100}\S{0,100}>/;
const startTagReg = /<h[0-9]\s{0,100}[A-Za-z0-9='"_-]{0,100}>/
const endTagReg = /<\/h[0-9]>/
const idReg = /heading-[0-9]{1,1000}/
export default {
  name: 'ArticleCatalog',
  props: {},
  data() {
    return {
      catalogStr: '',
      top: 100,
      menuList: [],
      scrollTop: 0,
      menuWidth: 300,
    }
  },
  components: {
    SinoScrollbar,
    WidthDrag,
    Menu,
  },
  watch: {
    $route: {
      immediate: true,
      handler: function () {
        this.generateCatalogStr()
      },
    },
  },
  computed: {},
  created() {},
  mounted() {
    const sGlobalHeader = document.querySelector('.s-global-header')
    const { height = 0 } = sGlobalHeader.getBoundingClientRect()
    this.top = height
  },
  updated() {},
  methods: {
    generateCatalogStr() {
      this.$nextTick(() => {
        this.hTagAddId()
        this.$nextTick(() => {
          const dom = document.querySelector('.main-content-container')
          const domStr = this.nodeToString(dom)
          hFlatLevelArr = []
          // this.catalogStr = ''
          this.menuList = []
          this.parserHtml(domStr)
          if (hFlatLevelArr.length === 0) {
            return
          }
          var treeData = this.toTree(hFlatLevelArr)
          this.menuList = treeData
          // var domTree = this.getChapterDomTree(treeData)
          // this.catalogStr = this.nodeToString(domTree)
        })
      })
    },
    nodeToString(node) {
      //createElement()返回一个Element对象
      var tmpNode = document.createElement('div')
      //appendChild()  参数Node对象   返回Node对象  Element方法
      //cloneNode()  参数布尔类型  返回Node对象   Element方法
      tmpNode.appendChild(node.cloneNode(true))
      var str = tmpNode.innerHTML
      tmpNode = node = null // prevent memory leaks in IE
      return str
    },
    hTagAddId() {
      const mainContentDom = document.querySelector('.main-content-container')
      dataIdIndex = 0
      const tagNameArr = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9']
      tagNameArr.forEach((tagNameArrItem) => {
        const domArr = mainContentDom.getElementsByTagName(tagNameArrItem)
        if (domArr.length > 0) {
          for (let i = 0; i < domArr.length; i++) {
            domArr[i].setAttribute('id', `heading-${dataIdIndex}`)
            dataIdIndex++
          }
        }
      })
    },
    parserHtml(htmlStr) {
      const arr = htmlStr.match(startTagReg)
      // console.log("arr:", arr);
      if (arr && arr.length > 0) {
        const startTag = arr[0]
        const startTagIndex = htmlStr.search(startTagReg)
        const endTag = htmlStr.match(endTagReg)[0]
        const endTagIndx = htmlStr.search(endTagReg)

        // console.log("startTag:", startTag);
        const hLevel = startTag.match(/[0-9]/)[0]
        const text = htmlStr.slice(startTagIndex + startTag.length, endTagIndx)
        // console.log("text:", text);
        // 查找id属性
        let dataId = ''
        const dataIdArr = startTag.match(idReg)
        if (dataIdArr && dataIdArr.length > 0) {
          dataId = dataIdArr[0]
        }
        hFlatLevelArr.push({
          hLevel,
          text,
          id: dataId,
        })
        const lastHtmlStr = htmlStr.slice(endTagIndx + endTag.length)
        lastHtmlStr && this.parserHtml(lastHtmlStr)
      }
    },
    // 平级结构转成树
    toTree(flatArr) {
      var tree = []
      var copyArr = flatArr.map(function (item) {
        return item
      })

      // 依据指定级别查找该级别的子孙级，并删除掉曾经查找到的子孙级
      var getChildrenByLevel = function (currentLevelItem, arr, level) {
        if (!currentLevelItem) {
          return
        }
        // 将level值转成正数，再进行比拟
        var minusCurrentLevel = -currentLevelItem.hLevel
        var children = []
        for (var i = 0, len = arr.length; i < len; i++) {
          var levelItem = arr[i]
          if (-levelItem.hLevel < minusCurrentLevel) {
            children.push(levelItem)
          } else {
            // 只找最近那些子孙级
            break
          }
        }
        // 从数组中删除曾经找到的那些子孙级，免得影响到其余子孙级的查找
        if (children.length > 0) {
          arr.splice(0, children.length)
        }
        return children
      }

      var getTree = function (result, arr, level) {
        // 首先将数组第一位移除掉，并增加到后果集中
        var currentItem = arr.shift()

        currentItem.level = level
        result.push(currentItem)
        while (arr.length > 0) {
          if (!currentItem) {
            return
          }
          // 依据以后级别获取它的子孙级
          var children = getChildrenByLevel(currentItem, arr, level)
          // 如果以后级别没有子孙级则开始下一个
          if (children.length == 0) {
            currentItem = arr.shift()
            currentItem.level = level
            if (currentItem) {
              result.push(currentItem)
            }
            continue
          }
          currentItem.children = []
          // 查找到的子孙级持续查找子孙级
          getTree(currentItem.children, children, level + 1)
        }
      }
      getTree(tree, copyArr, 1)

      return tree
    },
    // 依据树状构造数据生成章节目录dom树
    getChapterDomTree(chapterTreeData, parentNode) {
      if (!parentNode) {
        parentNode = this.createNodeByHtmlStr('<ul class="markdown-toc-list"></ul>')[0]
      }
      chapterTreeData.forEach((chapterItem) => {
        var itemDom = this.createNodeByHtmlStr(
          `<li><a href="#${chapterItem.id}" class="toc-level-${chapterItem.level}">${chapterItem.text}</a></li>`
        )[0]
        parentNode.appendChild(itemDom)
        if (chapterItem.children) {
          var catalogList = this.createNodeByHtmlStr('<ul class="markdown-toc-list"></ul>')[0]
          itemDom.appendChild(catalogList)
          this.getChapterDomTree(chapterItem.children, catalogList)
        }
      })

      return parentNode
    },
    // 依据html字符串生成dom元素
    createNodeByHtmlStr(htmlStr) {
      var div = document.createElement('div')
      div.innerHTML = htmlStr
      var children = div.children
      div = null
      return children
    },
    menuClick(item) {
      const { id } = item
      this.$emit('menuClick', id)
    },
    receiveContentScrollData(data) {
      this.$refs.menuRef.receiveContentScrollData(data)
    },
    activeChange(activeId, dom) {
      const scrollTop = this.$refs.scrollbarRef.wrap.scrollTop
      const pageHeight = 400
      const unitHeight = 38
      // 激活锚点在下部隐藏，直接往下翻一页
      if (dom.offsetTop > scrollTop + pageHeight - unitHeight) {
        this.$refs.scrollbarRef.scrollToTop(dom.offsetTop)
      } else if (dom.offsetTop < scrollTop - unitHeight) {
        // 激活锚点在上部隐藏，往上移动一个单元
        this.$refs.scrollbarRef.scrollToTop(dom.offsetTop)
      }
    },
    widthChange(value) {
      this.menuWidth = value
    },
  },
  beforeDestroy() {},
}
</script>
 
<style lang="less" scoped>
@import '~@/style/vars.less';
.article-catalog {
  position: relative;
  // top: 60px;
  right: 10px;
  background: white;
  padding-bottom: 20px;
  box-sizing: border-box;
  width: @article-catalog-width;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  height: 500px;
  flex-shrink: 0;

  &-reminder {
    padding: 0 0 10px 10px;
    font-weight: 500;
    font-size: 16px;
    color: #1d2129;
    border-bottom: 1px solid #e4e6eb;
  }
  &-default {
    padding-left: 10px;
    color: #ccc;
    margin: 0;
  }
  &-content {
    height: 400px;
    overflow-y: scroll;
  }
  position: relative;
  /deep/.width-drag {
    position: absolute;
    top: 0;
    left: 0px;
    bottom: 0;
    z-index: 1000;
    border-radius: 2px 0 0 2px;
    .drag-dom {
      border-radius: 2px 0 0 2px;
    }
  }
}
/deep/.markdown-toc-list {
  a {
    color: inherit;
    display: inline-block;
    padding: 8px;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    box-sizing: border-box;
    &.active {
      color: @theme-color;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 3px;
        top: 50%;
        transform: translateY(-50%);
        width: 5px;
        background: @theme-color;
        height: 16px;
        border-radius: 0 6px 6px 0;
      }
    }
    &:hover {
      background: rgb(247, 247, 247);
    }
  }
}
</style>
