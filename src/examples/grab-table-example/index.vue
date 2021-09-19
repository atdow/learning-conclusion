<!--
 * @Author: atdow
 * @Date: 2021-09-19 12:04:51
 * @LastEditors: null
 * @LastEditTime: 2021-09-20 00:59:39
 * @Description: file description
-->
<template>
  <div
    :class="[
      'test-table',
      {
        isDrag: isMouseDown && isSelect === false,
        'forbid-select': isMouseDown && isSelect === false,
      },
    ]"
    ref="tableContainerRef"
  >
    <table @mousedown="tableMousedown" @mousemove="tableMousemove">
      <thead>
        <tr>
          <th id="" v-for="(item, index) in 30" :key="index">
            title{{ index }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(trItem, trIndex) in 40" :key="trIndex">
          <td v-for="(item, index) in 30" :key="index">
            {{ trIndex + "." + index + " 就发了司法局拉丝机发件方老师就" }}
          </td>
        </tr>
      </tbody>
    </table>
     
  </div>
</template>
 
<script>
export default {
  name: "aaa",
  props: {},
  data() {
    return {
      isMouseDown: false,
      isSelect: true,
      startPositon: { x: 0, y: 0 },
      currentPositon: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      moveDebounce: 300,
      isMac: false,
    };
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.isMac = this.detectOS() === "Mac";
    if (this.isMac === true) {
      return;
    }
    window.addEventListener("mouseup", this.windowOnMouseUp);
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("mouseup", this.windowOnMouseUp);
    });
  },
  methods: {
    tableMousedown(e) {
      const { x = 0, y = 0 } = e;
      this.startPositon = { x, y };
      this.isMouseDown = true;
      this.isSelect = true; // 这里需要设定isSelect为true
    },
    tableMousemove(e) {
      if (this.isMac === true) {
        return;
      }
      let txt = window.getSelection();
      if (txt.toString().length > 0) {
        this.isSelect = true;
        return;
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (txt.toString().length <= 0) {
          this.isSelect = false;
        }
      }, this.moveDebounce);
      if (this.isSelect === true) {
        return;
      }
      // 拖动核心
      const { x = 0, y = 0 } = e;
      this.currentPositon = { x, y };
      if (this.isMouseDown === true) {
        this.offset = {
          x: this.currentPositon.x - this.startPositon.x,
          y: this.currentPositon.y - this.startPositon.y,
        };
        let scrollLeft = this.$refs.tableContainerRef.scrollLeft;
        let scrollTop = this.$refs.tableContainerRef.scrollTop;

        scrollLeft += this.offset.x * -1;
        scrollTop += this.offset.y * -1;
        scrollLeft <= 0 && (scrollLeft = 0);
        scrollTop <= 0 && (scrollTop = 0);
        this.$refs.tableContainerRef.scrollLeft = scrollLeft;
        this.$refs.tableContainerRef.scrollTop = scrollTop;
        this.$nextTick(() => {
          this.startPositon = JSON.parse(JSON.stringify(this.currentPositon));
        });
      }
    },
    windowOnMouseUp() {
      this.isMouseDown = false;
    },
    detectOS() {
      var userAgent = navigator.userAgent;
      var isWin =
        navigator.platform == "Win32" || navigator.platform == "Windows";
      var isMac =
        navigator.platform == "Mac68K" ||
        navigator.platform == "MacPPC" ||
        navigator.platform == "Macintosh" ||
        navigator.platform == "MacIntel";
      if (isMac) return "Mac";
      var isUnix = navigator.platform == "X11" && !isWin && !isMac;
      if (isUnix) return "Unix";
      var isLinux = String(navigator.platform).indexOf("Linux") > -1;
      if (isLinux) return "Linux";
      if (isWin) {
        var isWin2K =
          userAgent.indexOf("Windows NT 5.0") > -1 ||
          userAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000";
        var isWinXP =
          userAgent.indexOf("Windows NT 5.1") > -1 ||
          userAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP";
        var isWin2003 =
          userAgent.indexOf("Windows NT 5.2") > -1 ||
          userAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003";
        var isWinVista =
          userAgent.indexOf("Windows NT 6.0") > -1 ||
          userAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista";
        var isWin7 =
          userAgent.indexOf("Windows NT 6.1") > -1 ||
          userAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
      }
      return "other";
    },
  },
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
.test-table {
  width: 100%;
  height: 400px;
  overflow: scroll;
  &.isDrag {
    cursor: grab;
  }
}
table {
  table-layout: fixed;
  width: 100%;
  border: 1;
  cellspacing: 0;
  border-collapse: collapse;
  border: thin;
  border-color: black;
}
th,
td {
  width: 200px;
  border: 1px solid #ccc;
}
.forbid-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
not supported by any browser */
}
</style>