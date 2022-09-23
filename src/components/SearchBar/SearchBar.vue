<template>
  <div class="searchBar">
    <div class="searchBar_backBtn" @click="backFn"></div>
    <div class="searchBar_title">{{ title }}</div>
    <div class="searchBar_upper" @click="upperFn">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Dialog } from "vant";

export default defineComponent({
  props: {
    barTitle: String,
    btnText: String,
  },
  emits: ["upperFn"],
  setup(props, ctx) {
    // props传入的按钮名和标题名
    let title = props.barTitle ? ref(props.barTitle) : "默认标题";
    let text = props.btnText ? ref(props.btnText) : "上架";

    const backFn = () => {
      Dialog({ message: "返回上一页" });
    };

    const upperFn = () => {
      ctx.emit("upperFn");
    };
    return {
      title,
      text,
      backFn,
      upperFn,
    };
  },
});
</script>

<style scoped lang="scss">
.searchBar {
  padding: 10px 10px 8px;
  display: flex;
  background-color: rgba(120, 120, 120, 0.1);
  &_backBtn {
    width: 10px;
    background: url(../../assets/images/arrow_left.png) no-repeat;
    background-size: 100%;
    background-position: center;
    margin-right: 17px;
  }
  &_title {
    flex: 1;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
  }
  &_upper {
    width: 49px;
    height: 22px;
    border-radius: 4px;
    background-color: rgb(61, 151, 255);
    text-align: center;
    color: #fff;
    margin-left: 17px;
  }
}
</style>
