<template>
  <div>
    <input type="text" :value="inputValue" @input="setInputValue" />
    <button @click="testChange">测试改变</button>
  </div>
</template>

<script>
export default {
  name: "SInput",
  model: {
    prop: "inputValue",
    event: "setInputValue",
  },
  props: {
    inputValue: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    setInputValue(e) {
      this.$emit("setInputValue", e.target.value);
    },
    testChange() {
      this.$emit("setInputValue", "测试改变");
    },
  },
  beforeDestroy() {},
};
</script>

<style scoped lang="less">
</style>
