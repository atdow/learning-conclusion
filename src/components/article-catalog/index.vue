<!--
 * @Author: atdow
 * @Date: 2022-04-04 22:36:44
 * @LastEditors: null
 * @LastEditTime: 2022-04-05 02:02:27
 * @Description: file description
-->
<template>
   
  <div class="article-catalog" :style="{ top: top + 'px' }">
     
    <p class="article-catalog-reminder">目录</p>
    <div class="article-catalog-content">
      <p class="article-catalog-default" v-if="!catalogStr">暂无目录</p>
      <div v-html="catalogStr" v-else></div>
    </div>
     
  </div>
</template>
 
<script>
let hFlatLevelArr = [
  // { hLevel: 4 }
];
export default {
  name: "article-catalog",
  props: {},
  data() {
    return {
      catalogStr: "",
      top: 100,
    };
  },
  components: {},
  watch: {
    $route: {
      immediate: true,
      handler: function () {
        this.generateCatalogStr();
      },
    },
  },
  computed: {},
  created() {},
  mounted() {
    //  this.generateCatalogStr();
    let sGlobalHeader = document.querySelector(".s-global-header");
    const { height = 0 } = sGlobalHeader.getBoundingClientRect();
    this.top = height;
  },
  updated() {
    //   this.generateCatalogStr();
  },
  methods: {
    generateCatalogStr() {
      this.$nextTick(() => {
        let dom = document.querySelector(".main-content-container");
        let domStr = this.nodeToString(dom);
        hFlatLevelArr = [];
        this.catalogStr = "";
        this.parserHtml(domStr);
        if (hFlatLevelArr.length === 0) {
          return;
        }
        var treeData = this.toTree(hFlatLevelArr);
        var domTree = this.getChapterDomTree(treeData);
        this.catalogStr = this.nodeToString(domTree);
        //  console.log("this.catalogStr:", this.catalogStr);
      });
    },
    nodeToString(node) {
      //createElement()返回一个Element对象
      var tmpNode = document.createElement("div");
      //appendChild()  参数Node对象   返回Node对象  Element方法
      //cloneNode()  参数布尔类型  返回Node对象   Element方法
      tmpNode.appendChild(node.cloneNode(true));
      var str = tmpNode.innerHTML;
      tmpNode = node = null; // prevent memory leaks in IE
      return str;
    },
    parserHtml(htmlStr) {
      let arr = htmlStr.match(/<h[0-9]>+/);
      if (arr && arr.length > 0) {
        let startTag = arr[0];
        let startTagIndex = htmlStr.search(/<h[0-9]>+/);
        let endTag = htmlStr.match(/<\/h[0-9]>/)[0];
        let endTagIndx = htmlStr.search(/<\/h[0-9]>/);

        let hLevel = startTag.match(/[0-9]/)[0];
        let text = htmlStr.slice(startTagIndex + startTag.length, endTagIndx);

        hFlatLevelArr.push({
          hLevel,
          text,
        });
        let lastHtmlStr = htmlStr.slice(endTagIndx + endTag.length);
        lastHtmlStr && this.parserHtml(lastHtmlStr);
      }
    },
    // 平级机构转成树
    toTree(flatArr) {
      var tree = [];
      var copyArr = flatArr.map(function (item) {
        return item;
      });

      // 依据指定级别查找该级别的子孙级，并删除掉曾经查找到的子孙级
      var getChildrenByLevel = function (currentLevelItem, arr, level) {
        if (!currentLevelItem) {
          return;
        }
        // 将level值转成正数，再进行比拟
        var minusCurrentLevel = -currentLevelItem.hLevel;
        var children = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          var levelItem = arr[i];
          if (-levelItem.hLevel < minusCurrentLevel) {
            children.push(levelItem);
          } else {
            // 只找最近那些子孙级
            break;
          }
        }
        // 从数组中删除曾经找到的那些子孙级，免得影响到其余子孙级的查找
        if (children.length > 0) {
          arr.splice(0, children.length);
        }
        return children;
      };

      var getTree = function (result, arr, level) {
        // 首先将数组第一位移除掉，并增加到后果集中
        var currentItem = arr.shift();

        currentItem.level = level;
        result.push(currentItem);
        while (arr.length > 0) {
          if (!currentItem) {
            return;
          }
          // 依据以后级别获取它的子孙级
          var children = getChildrenByLevel(currentItem, arr, level);
          // 如果以后级别没有子孙级则开始下一个
          if (children.length == 0) {
            currentItem = arr.shift();
            currentItem.level = level;
            if (currentItem) {
              result.push(currentItem);
            }
            continue;
          }
          currentItem.children = [];
          // 查找到的子孙级持续查找子孙级
          getTree(currentItem.children, children, level + 1);
        }
      };
      getTree(tree, copyArr, 1);

      return tree;
    },
    // 依据树状构造数据生成章节目录dom树
    getChapterDomTree(chapterTreeData, parentNode) {
      if (!parentNode) {
        parentNode = this.createNodeByHtmlStr(
          '<ul class="markdown-toc-list"></ul>'
        )[0];
      }
      chapterTreeData.forEach((chapterItem) => {
        var itemDom = this.createNodeByHtmlStr(
          //   '<li><a class="toc-level-' +
          //     chapterItem.level +
          //     '" href="#' +
          //     chapterItem.id +
          //     '">' +
          //     chapterItem.text +
          //     "</a></li>"
          '<li><a class="toc-level-' +
            chapterItem.level +
            '">' +
            chapterItem.text +
            "</a></li>"
        )[0];
        parentNode.appendChild(itemDom);
        if (chapterItem.children) {
          var catalogList = this.createNodeByHtmlStr(
            '<ul class="markdown-toc-list"></ul>'
          )[0];
          itemDom.appendChild(catalogList);
          this.getChapterDomTree(chapterItem.children, catalogList);
        }
      });

      return parentNode;
    },
    // 依据html字符串生成dom元素
    createNodeByHtmlStr(htmlStr) {
      var div = document.createElement("div");
      div.innerHTML = htmlStr;
      var children = div.children;
      div = null;
      return children;
    },
  },
  beforeDestroy() {},
};
</script>
 
<style lang="less" scoped>
@import "~@/style/vars.less";
.article-catalog {
  position: fixed;
  top: 60px;
  right: 10px;
  background: white;
  padding-bottom: 20px;
  //   border: 1px solid #ccc;
  box-sizing: border-box;
  width: @article-catalog-width;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);

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
}
/deep/.markdown-toc-list {
  padding-left: 20px;
  a {
    color: inherit;
    display: inline-block;
    padding: 8px;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    // cursor: pointer;
    border-radius: 5px;
    &:hover {
      background: rgb(247, 247, 247);
    }
  }
}
</style>