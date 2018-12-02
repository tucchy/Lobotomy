<template>
  <div class="tab-wrapper">
    <p>タブアイテム</p>
    <TabItem ></TabItem>
    <TabItem ></TabItem>
  </div>
</template>

<script>
import TabItem from './DetailTabItem.vue'
export default {
  components: { TabItem },
  data () {
    return {
    }
  },
  computed: {
  },
  props: {
    target: String
  }
}
</script>

<style scoped>
.contents {
  position: relative;
  overflow: hidden;
  width: 280px;
  border: 2px solid #000;
}
.item {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  transition: all 0.8s ease;
}
/* トランジション用スタイル */
.v-leave-active {
  position: absolute;
}
.v-enter {
  transform: translateX(-100%);
}
.v-leave-to {
  transform: translateX(100%);
}
.tab-wrapper {
  background-color: aqua;

}
</style>
