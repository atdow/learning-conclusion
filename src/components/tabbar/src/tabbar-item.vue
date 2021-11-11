<!--
 * @Author: atdow
 * @Date: 2021-11-10 17:37:21
 * @LastEditors: null
 * @LastEditTime: 2021-11-11 11:53:08
 * @Description: file description
-->

<template>
  <div class="s-tabbar-item" v-show="name===activeName">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "STabbarItem",
  props: {
    label:{
      type:String
    },
    name:{
      type:String
    }
  },
  data() {
    return {
      activeName:""
    };
  },
  components: {},
  watch: {
    '$parent._props.activeName':{
      immediate:true,
      handler:function(){
        let activeName = this.$parent._props.activeName
        this.activeName = activeName  
      },
      deep:true
    }
  },
  computed: {},
  created() {
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>

</style>
