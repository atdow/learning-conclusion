<!--
 * @Author: atdow
 * @Date: 2021-03-18 11:12:59
 * @LastEditors: null
 * @LastEditTime: 2022-04-03 23:51:56
 * @Description: file content
-->

<template>
  <div class="milestone-table" ref="milestoneTableRef">
    <div>
      <!-- header -->
      <GeminiScrollbar
        class="
          tableWrap
          .pmd-scrollbar
          .mCustomScrollbar
          gm-scrollbar-color
          tableHeaderWrap
        "
        :style="`height:${theadHeight}px`"
        ref="headerGeminiScrollbarRef"
      >
        <!-- <div class="tableBox" :style="`min-width:${tableWidth}px`"> -->
        <div class="tableBox" :style="`min-width:${tableWidth}px`">
          <!-- 头部 -->
          <div class="thead" :style="{ 'padding-left': tdWidth / 2 + 'px' }">
            <ul class="theadHeight th">
              <li
                v-for="(item, index) in renderData[0]"
                :key="index"
                v-text="item.date"
                class="td forbid-select"
                :style="`lineHeight:${theadHeight}px;width:${tdWidth}px`"
              ></li>
            </ul>
          </div>
        </div>
      </GeminiScrollbar>
      <!-- body -->
      <GeminiScrollbar
        class="
          tableWrap
          .pmd-scrollbar
          .mCustomScrollbar
          gm-scrollbar-color
          tableBodyWrap
        "
        :style="`height:${contentHeight}px`"
        ref="bodyGeminiScrollbarRef"
      >
        <div class="tableBox" :style="`min-width:${tableWidth}px;`">
          <div class="tbody" :style="{ 'padding-left': tdWidth / 2 + 'px' }">
            <!-- 这里是用于撑开高度，出现滚动条用 -->
            <div
              class="list-view-phantom"
              ref="clientHeight"
              :style="{ height: virtualContentHeight + 'px' }"
            ></div>
            <!-- 事件 -->
            <div ref="content">
              <ul
                v-for="(trItem, trIndex) in virtualRenderData"
                :key="trIndex"
                class="content-row"
              >
                <!-- <li class="tdHeight td" v-for="(item, index) in trItem" :key="index" :style="{ height: tdHeight + 'px' }"> -->
                <li
                  class="tdHeight td"
                  v-for="(item, index) in trItem"
                  :key="index"
                  :style="{ height: tdHeight + 'px', width: tdWidth + 'px' }"
                >
                  <!-- 自定义插槽内容 -->
                  <template v-if="$scopedSlots.contentSlot">
                    <slot name="contentSlot" :record="item"></slot>
                  </template>
                  <div v-else class="td-content">
                    <i class="dot"></i>
                    <div class="text-content">
                      <p v-text="item.event ? item.event.target : ''"></p>
                      <p>
                        <span
                          v-text="item.event ? item.event.company : ''"
                        ></span>
                        <span>({{ item.event ? item.event.phase : "" }})</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </GeminiScrollbar>
      <!-- <a-icon v-if="!noFullscreen" type="fullscreen" class="fullscreen" /> -->
      <img
        v-if="!noFullscreen"
        @click="fullscreen"
        class="fullscreen"
        src="@/assets/search.png"
        alt
      />
      <div class="milestone-table-foot">
        <template v-if="$scopedSlots.footSlot">
          <slot name="footSlot"></slot>
        </template>
        <ul v-else>
          <li>
            <i></i>
            <span>正常</span>
          </li>
          <li>
            <i></i>
            <span>停滞</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { throttle, getClientXY } from '@/utils/util'
export default {
  name: 'MilestoneTable',
  props: {
    data: {
      type: Array,
      default: () => [],
      // [
      //   {
      //     date: 2011,
      //     event: { title: 'EGFR', label: '阿法替尼', phase: '上市', status: '正常' },
      //   },
      //   { date: 2012, event: { title: 'EGFR', label: '阿法替尼', phase: '上市', status: '正常' } },
      // ],
      // [
      //   { date: 2011, event: { title: 'EGFR', label: '阿法替尼', phase: '上市', status: '在研' } },
      //   { date: 2012, event: null },
      // ],
    },
    tdHeight: {
      type: Number,
      default: 80, // body的td高度
    },
    tdWidth: {
      type: Number,
      default: 230, // body的td高度
    },
    contentHeight: {
      type: Number,
      default: 300,
    },
    noFullscreen: {
      type: Boolean,
      default: false,
    },
    scrollData: {
      type: Object,
      default: () => {
        return {
          top: 0,
          left: 0,
        }
      },
    },
  },
  data() {
    this.tableHeaderScrollThrottle = null
    this.tableBodyScrollThrottle = null
    this.updateThrottle = null
    return {
      theadHeight: 46, // 头部高度
      // tdHeight: 80, // body的td高度
      tbodyHeight: 300, // 里面的内容高度
      tableWidth: 1200,
      headerScrollBar: null,
      bodyScrollBar: null,
      fullscreenState: false,
      renderData: [],
      virtualContentHeight: 0,
      virtualRenderData: [],
    }
  },
  components: {},
  watch: {
    data: {
      immediate: true,
      handler: function () {
        this.virtualRenderData = []
        this.$nextTick(() => {
          // let startTime = new Date();
          if (this.data.length === 0) {
            return
          }
          const width = this.data[0] ? this.data[0].length * 230 : 0
          if (width > this.tableWidth) {
            this.tableWidth = width
          }
          this.tbodyHeight = this.data.length * this.tdHeight
          // 数据格式处理(排序)
          const formatData = []
          const dataIndex = [] // 存储已经push进去的数据索引
          // 循环列
          for (let i = 0; i < this.data[0].length; i++) {
            // 循环数据
            for (let j = 0; j < this.data.length; j++) {
              if (this.data[j][i]?.event) {
                // 避免重复push
                if (dataIndex.indexOf(j) === -1) {
                  formatData.push(this.data[j])
                  dataIndex.push(j)
                  //  break // 不能break终止，因为后面也可能是同一列中也是有event
                }
              }
            }
          }
          // 加入虚拟滚动
          this.renderData = formatData
          this.virtualContentHeight = this.renderData.length * this.tdHeight
          this.update(0, 'down')
        })
      },
    },
  },
  computed: {},
  created() {
    // console.log('getClientXY:', getClientXY())
  },
  mounted() {
    this.bodyScrollBarScrollInit()
    // console.log('slot:', this.$scopedSlots.contentSlot)
    // table min-width计算
    let width = getClientXY().width
    try {
      width =
        this.$refs.milestoneTableRef.parentElement.getBoundingClientRect()
          .width
    } catch (error) {}
    this.tableWidth = width
    // header
    const headerRef = this.$refs.headerGeminiScrollbarRef
    const headerScrollBar = headerRef.$el.querySelector('.gm-scroll-view')
    this.headerScrollBar = headerScrollBar

    // body
    const bodyRef = this.$refs.bodyGeminiScrollbarRef
    const bodyScrollBar = bodyRef.$el.querySelector('.gm-scroll-view')
    this.bodyScrollBar = bodyScrollBar
    this.tableBodyScrollThrottle = throttle(this.tableBodyScroll, 100)
    bodyScrollBar.addEventListener('scroll', this.tableBodyScrollThrottle)
    // 虚拟滚动更新
    this.updateThrottle = throttle(this.updateThrottleMethod, 100)
  },
  beforeDestroy() {},
  methods: {
    tableBodyScroll(e) {
      this.headerScrollBar.scrollLeft = e.target.scrollLeft
      let verticalDirection = ''
      if (e.target.scrollTop > this.scrollData.top) {
        verticalDirection = 'down'
      } else if (e.target.scrollTop < this.scrollData.top) {
        verticalDirection = 'up'
      }
      this.$emit('scroll', {
        top: e.target.scrollTop,
        left: e.target.scrollLeft,
      })

      // this.update(e.target.scrollTop);
      this.updateThrottle(e.target.scrollTop, verticalDirection) // 还是有必要使用节流
    },
    fullscreen() {
      this.$emit('fullscreen', true)
      this.fullscreenState = true
    },
    bodyScrollBarScrollInit() {
      // console.log("触发");
      this.$nextTick(() => {
        try {
          setTimeout(() => {
            this.$nextTick(() => {
              const bodyRef = this.$refs.bodyGeminiScrollbarRef
              const bodyScrollBar = bodyRef.$el.querySelector('.gm-scroll-view')
              bodyScrollBar.scrollLeft = this.scrollData.left
              bodyScrollBar.scrollTop = this.scrollData.top
              this.update(this.scrollData.top || 0, 'down')
            })
          }, 0)
        } catch (error) {}
      })
    },
    // 虚拟滚动更新数据
    update(scrollTop = 0, verticalDirection = '') {
      this.$nextTick(() => {
        // TODO 左右滑动不做更新(以后增加左右的虚拟滚动)
        if (verticalDirection !== 'up' && verticalDirection !== 'down') {
          return
        }
        // 获取当前可展示数量
        const count = Math.ceil(this.$el.clientHeight / this.tdHeight)
        // 取得可见区域的起始数据索引
        const start = Math.floor(scrollTop / this.tdHeight)
        // 取得可见区域的结束数据索引
        const end = start + count
        // 计算出可见区域对应的数据，让 Vue.js 更新
        this.virtualRenderData = this.renderData.slice(start, end)
        // 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
        this.$refs.content.style.webkitTransform = `translate3d(0, ${
          start * this.tdHeight
        }px, 0)`
      })
    },
    updateThrottleMethod(scrollTop = 0, verticalDirection = '') {
      this.update(scrollTop, verticalDirection)
    },
  },
}
</script>

<style lang="less" scoped>
@detail-table-height: 40px;
@dot-width: 14px;
@dotColor: "red";
@font-size: 14px;
//设定公共的height
.theadHeight {
  height: @detail-table-height;
}

.gm-scrollbar.-horizontal {
  background-color: red;
}

.timeline-table {
  display: flex;
}
.milestone-table {
  position: relative;
  &:hover {
    .fullscreen {
      display: block;
    }
  }
  .fullscreen {
    position: absolute;
    right: 50px;
    width: 25px;
    height: 25px;
    bottom: 80px;
    cursor: pointer;
    color: #a6abbf;
  }
}
.tableBox {
  ul {
    display: flex;
    margin-bottom: 0;
    li {
      flex-shrink: 0;
    }
  }
  .thead {
    margin-left: -60px;
    .th {
      min-width: 1px;
      color: #333;
      font-size: @font-size;
      background: #eeeeee;
      height: 100%;
      li {
        box-sizing: content-box;
        background: #eeeeee;
        height: 100%;
        line-height: 40px;
      }
    }
    background: #eeeeee;
  }
  .tbody {
    margin-left: -60px;
    .content-row:last-child {
      padding-bottom: 20px;
    }
    .td {
      min-width: 1px;
      padding: 0;
      font-size: @font-size;
      box-sizing: border-box;
      padding-left: 15px; // 由于头部年份一定是4位数，所以用这种方法
      .td-content {
        display: flex;
        align-items: flex-start;
        padding-top: 20px;
        p {
          margin-bottom: 0;
          font-size: 16px;
          font-weight: 400;
          color: #333333;
          line-height: 20px;
        }
        .dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: @dotColor;
          border-radius: 50%;
          margin-right: 8px;
          margin-top: 4px;
        }
      }
    }
  }
}
.milestone-table-foot {
  display: flex;
  justify-content: center;
  margin-top: 18px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li:first-child {
      margin-right: 140px;
    }
    li {
      display: flex;
      align-items: center;
      i {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #4865e9;
        border-radius: 50%;
        margin-right: 8px;
        margin-top: 0;
      }
      span {
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        line-height: 12px;
      }
      &:nth-child(2) i {
        background: #cecece;
      }
    }
  }
}

.list-view-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}
</style>
