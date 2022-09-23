<template>
  <div class="showArea">
    <div v-for="item in list" :key="item.id" class="showArea_item">
      <div
        class="showArea_img"
        :style="{ backgroundImage: getImgUrl(item.img) }"
      >
        <img v-if="item.tag" :src="tag" alt="" class="showArea_tag" />
        <img v-if="item.atlas" :src="atlas" alt="" class="showArea_atlas" />
        <div class="showArea_name">{{ item.name }}</div>
        <template v-if="item.isCast && item.isExchange">
          <img :src="cast" alt="" class="icon_top" />
          <img :src="exchange" alt="" class="icon_bottom" />
        </template>
        <template v-else-if="item.isCast || item.isExchange">
          <img
            :src="item.isCast ? cast : exchange"
            alt=""
            class="icon_bottom"
          />
        </template>
      </div>
      <div class="showArea_info">
        <div class="info_left">#{{ item.id }}</div>
        <img class="info_right" :src="item.is3D ? pic3D : pic2D" alt="" />
      </div>
      <div>
        <div class="item_down" @click="undercarriage(item.id)">下架</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
import pic2D from "@/assets/images/2d.png";
import pic3D from "@/assets/images/3d.png";
import tag from "@/assets/images/tag1.png";
import atlas from "@/assets/images/atlas.png";
import cast from "@/assets/images/cast.png";
import exchange from "@/assets/images/exchange.png";

export default defineComponent({
  props: {
    dataList: Array,
  },
  emits: ["undercarriage"],
  setup(props, ctx) {
    const { dataList } = toRefs(props);
    const list = ref(dataList);

    const getImgUrl = (img: string) => {
      return "url(src/assets/images/" + img + ")";
    };
    const undercarriage = (id: number) => {
      ctx.emit("undercarriage", id);
    };
    return {
      list,
      pic2D,
      pic3D,
      tag,
      atlas,
      cast,
      exchange,
      getImgUrl,
      undercarriage,
    };
  },
});
</script>

<style scoped lang="scss">
.showArea {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 20px;
  &_item {
    margin-bottom: 23px;
  }
  &_img {
    position: relative;
    display: block;
    width: 182px;
    height: 182px;
    background-position: center;
    background-size: 100%;
  }
  &_tag {
    position: absolute;
    width: 48px;
    height: 17px;
    top: 8px;
    left: 8px;
  }
  &_atlas {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 6px;
    right: 6px;
  }
  &_name {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 0 0 18px 18px;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  }
  &_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info_left {
    color: #fff;
    font-size: 14px;
  }
  .info_right {
    width: 23px;
    height: 23px;
    vertical-align: middle;
  }
  .item_down {
    float: right;
    width: 42px;
    height: 17px;
    background: rgb(227, 81, 81);
    border-radius: 4px;
    font-size: 10px;
    color: #fff;
    text-align: center;
    margin-top: 6px;
  }
  .icon_top {
    position: absolute;
    width: 29px;
    height: 27px;
    bottom: 60px;
    right: 0;
  }
  .icon_bottom {
    position: absolute;
    width: 29px;
    height: 27px;
    bottom: 36px;
    right: 0;
  }
}
</style>
