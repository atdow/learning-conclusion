/*
 * @Author: atdow
 * @Date: 2021-03-18 11:23:04
 * @LastEditors: null
 * @LastEditTime: 2021-06-30 17:09:09
 * @Description: file content
 */
import MilestoneTable from "./modules/milestone-table";
import Magnify from "@/components/Magnify";
export default {
  data() {
    return {
      scrollData: {
        top: 0,
        left: 0,
      },
      calContentHeight: 300,
    };
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
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
    contentHeight: {
      type: Number,
      default: 300,
    },
    title: {
      type: String,
      default: "相关药物",
    },
    tdHeight: {
      type: Number,
      default: 80, // body的td高度
    },
  },
  components: {
    MilestoneTable,
    Magnify,
  },
  mounted() {
    window.addEventListener("resize", this.calContentHeightResolve);
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("resize", this.calContentHeightResolve);
    });
  },
  methods: {
    fullscreen() {
      this.$refs.magnifyRef.show();
      this.$nextTick(() => {
        this.calContentHeightResolve();
      });
    },
    scrollResolve(scrollData) {
      this.scrollData = scrollData;
    },
    calContentHeightResolve() {
      try {
        let magnifyRef = this.$refs.magnifyRef.$el;
        let magnifyRefContent = magnifyRef.querySelector(".s-magnify-content");
        let magnifyRefHeader = magnifyRef.querySelector(".s-magnify-header");
        let contentHeight =
          magnifyRefContent.getBoundingClientRect().height -
          magnifyRefHeader.getBoundingClientRect().height;
        this.calContentHeight = contentHeight - 120;
      } catch (error) {}
    },
    onClose(flag) {
      // 手动触发
      this.$refs.milestoneTableSmallRef.bodyScorllBarScollInit();
    },
  },
  render() {
    return (
      <div>
        <MilestoneTable
          {...{
            props: { ...this.$props, contentHeight: 300 },
            scopedSlots: { ...this.$scopedSlots },
          }}
          scrollData={this.scrollData}
          onFullscreen={this.fullscreen}
          onScroll={this.scrollResolve}
          ref="milestoneTableSmallRef"
        ></MilestoneTable>
        <Magnify title={this.title} ref="magnifyRef" onClose={this.onClose}>
          <MilestoneTable
            {...{
              props: {
                ...this.$props,
                contentHeight: this.calContentHeight,
                noFullscreen: true,
              },
              scopedSlots: { ...this.$scopedSlots },
            }}
            scrollData={this.scrollData}
            onScroll={this.scrollResolve}
          ></MilestoneTable>
        </Magnify>
      </div>
    );
  },
};
