<template>
  <div class="tabBar">
    <div
      v-for="(item, index) in arr"
      :key="item.id"
      class="tabBar_item"
      @click="switchTab(index)"
    >
      <span :class="[tabIndex === index ? 'isChose' : 'unChose']">{{
        item.name
      }}</span>
      <i :class="[tabIndex === index ? 'tabBar_underLine' : null]"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    tabArr: Array,
  },
  setup(props) {
    let tabIndex = ref(0);
    const arr = ref(props.tabArr);

    const switchTab = (index: number) => {
      tabIndex.value = index;
    };
    return { arr, tabIndex, switchTab };
  },
});
</script>

<style scoped lang="scss">
.tabBar {
  display: flex;
  justify-content: space-evenly;
  padding: 19px 0 0 0;
  &_item {
    position: relative;
    font-size: 14px;
    line-height: 18px;
  }
  &_underLine {
    position: absolute;
    width: 14px;
    height: 3px;
    background: rgb(78, 159, 255);
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
  }
  .isChose {
    color: #fff;
  }
  .unChose {
    color: rgba(255, 255, 255, 0.65);
  }
}
</style>
