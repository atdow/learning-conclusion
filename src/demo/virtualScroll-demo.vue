<!--
 * @Author: atdow
 * @Date: 2022-04-03 21:40:12
 * @LastEditors: null
 * @LastEditTime: 2022-04-03 21:40:13
 * @Description: file description
-->
<!--
 * @Author: atdow
 * @Date: 2021-06-18 16:01:43
 * @LastEditors: null
 * @LastEditTime: 2021-06-29 17:26:12
 * @Description: file description
-->
<template>
  <div class="test-component">
    <div>
      <div class="list-view" ref="container" @scroll="handleScroll">
        <!-- 这里是用于撑开高度，出现滚动条用 -->
        <div
          class="list-view-phantom"
          ref="clientHeight"
          :style="{ height: contentHeight + 'px' }"
        ></div>
        <!-- 真正的渲染数据 -->
        <ul ref="content" class="list-view-content">
          <li
            class="list-view-item"
            :style="{ height: itemHeight + 'px' }"
            :key="index"
            v-for="(val, index) in list"
          >
            {{ val }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  computed: {
    contentHeight() {
      // 计算滚动条高度
      return this.data.length * this.itemHeight;
    },
  },
  mounted() {
    this.getData();
    this.update();
  },

  data() {
    return {
      data: [], // 总数据
      itemHeight: 30, // 单个高度
      list: [], // 渲染数据
    };
  },

  methods: {
    update(scrollTop = 0) {
      // 获取当前可展示数量
      const count = Math.ceil(this.$el.clientHeight / this.itemHeight);
      // 取得可见区域的起始数据索引
      const start = Math.floor(scrollTop / this.itemHeight);
      // 取得可见区域的结束数据索引
      const end = start + count;

      // 计算出可见区域对应的数据，让 Vue.js 更新
      this.list = this.data.slice(start, end);

      // 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
      this.$refs.content.style.webkitTransform = `translate3d(0, ${
        start * this.itemHeight
      }px, 0)`;
    },
    handleScroll(e) {
      // 获取当前滚动条滚动位置
      const scrollTop = this.$refs.container.scrollTop;
      this.update(scrollTop);
    },
    getData() {
      //创建模拟数据
      let data = [];
      for (let i = 0; i < 1000000; i++) {
        data.push(`第 ${i} 个数据`);
      }
      this.data = [...data];
    },
  },
};
</script>

<style lang="less" scoped>
.list-view {
  width: 400px;
  height: 400px;
  overflow: auto;
  position: relative;
  border: 1px solid #c1c1c1;
  box-shadow: 3px 3px 5px #ccc;
}

.list-view-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.list-view-content {
  left: 0;
  right: 0;
  top: 0;
  position: relative;
}

.list-view-item {
  padding: 6px;
  color: #999;
  line-height: 30px;
}
</style>
