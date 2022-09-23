<template>
  <div class="mainPage">
    <SearchBarVue barTitle="测试标题" btnText="上架" @upperFn="upperFn" />
    <TabBar :tabArr="tabArr" />
    <ItemsArea :dataList="dataList" @undercarriage="undercarriage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

import SearchBarVue from "@/components/SearchBar/SearchBar.vue";
import TabBar from "@/components/TabBar/TabBar.vue";
import ItemsArea from "@/components/itemsArea/itemsArea.vue";

import { Dialog } from "vant";

export default defineComponent({
  components: {
    SearchBarVue,
    TabBar,
    ItemsArea,
  },
  setup() {
    const tabArr = [
      { name: "藏品", id: 1 },
      { name: "头像", id: 2 },
      { name: "盲盒", id: 3 },
      { name: "其他", id: 4 },
    ];
    let dataList = ref([]);

    onMounted(async () => {
      let res = await axios.get("/getDataList");
      if (res && res.status === 200) {
        dataList.value = res.data.data;
      }
    });

    // 上传点击事件
    const upperFn = () => {
      Dialog({ message: "前往上传页面" });
    };
    const undercarriage = (id: number) => {
      Dialog({ message: `${id}将下架` });
    };
    return {
      tabArr,
      dataList,
      upperFn,
      undercarriage,
    };
  },
});
</script>

<style scoped lang="scss">
.mainPage {
  width: 100%;
  height: 100%;
  background-color: rgb(21, 22, 42);
}
</style>
