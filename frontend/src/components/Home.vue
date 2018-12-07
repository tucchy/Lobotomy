<template>
  <div class="wrapper">
    <header>
      ロボトミ記憶貯蔵庫
    </header>
    <main>
      <transition-group tag="div"
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @enter-cancelled="afterEnter"
      >
        <Sephirah class="menu" v-if="this.pagename === 'sephirah'" :key="pagelist[0]"></Sephirah>
        <Abnormality class="menu" v-if="this.pagename === 'abnormality'" :key="pagelist[1]"></Abnormality>
        <EGO class="menu" v-if="this.pagename === 'ego'" :key="pagelist[2]"></EGO>
        <Ordeal class="menu" v-if="this.pagename === 'ordeal'" :key="pagelist[3]"></Ordeal>
      </transition-group>
    </main>
    <footer>
      <Index class="menu tab" @change ="changepage"></Index>
    </footer>
  </div>
</template>
<script>
import Index from './Index.vue'
import Sephirah from './Sephirah.vue'
import Abnormality from './Abnormality.vue'
import EGO from './E.G.O.vue'
import Ordeal from './Ordeal.vue'
export default {
  components: {
    Index,
    Sephirah,
    Abnormality,
    EGO,
    Ordeal
  },
  data () {
    return {
      pagename: 'sephirah',
      pagelist: ['sephirah', 'abnormality', 'ego', 'ordeal']
    }
  },
  methods: {
    changepage: function (pagename) {
      this.pagename = pagename
    },
    beforeEnter: function (el) {
      el.style.transitionDelay = 800 * parseInt(el.dataset.index, 10) + 'ms'
      console.log('aa')
    },
    // トランジション完了またはキャンセルでディレイを削除
    afterEnter: function (el) {
      el.style.transitionDelay = ''
    }
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
$header_height: 6rem;
$footer_height: 3rem;
$index_bg: #2b2b2b;
.flex_wrapper {
  display: flex;
  background-color: $index_bg;
  height: 100%;
  flex-direction: column;
}
.wrapper {
  display: grid;
  grid-template-rows: 100px 3fr 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'main' 'footer';
  max-width: 768px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: $index_bg;
  *{
    max-width: 768px;
  }
}
header {
  grid-area: header;
  color: #b8b641;
  vertical-align: middle;
  font-size: 2.5rem;
  z-index: 1;
    img{
      width: 100%;
    }
}
main {
  grid-area: main;
  position: relative;
  overflow-y: scroll;
  border: 1px solid #b8b641;
  margin: 5px;
  * {
    position: relative;
  }
}
.main-container {
  grid-area: content;
}
.tab {
  grid-area: tab;
  z-index: 1;
  background-color: $index_bg;
}
footer {
  grid-area: footer;
  background-color: $index_bg;
  z-index: 1;
}
ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 100px;
  padding-left: 1rem;
  padding-right: 1.5rem;
  margin: 0;
}
li {
  .panel {
    border: 1px solid #b8b641;
    color: #b8b641;
    box-shadow: 0px 0px 1px 1px #b8b641;
    height: 100%;
    font-size: 1rem;
    text-align: center;
    transition: 0.2s;
    &:active {
      box-shadow: 0px 0px 1px 3px #b8b641;
    }
  }
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
.menu {
  transition: all 0.5s ease-out;
  position: absolute;
  width: 100%;
}
.v-enter {
  opacity: 0;
  transform: translateY(-100%);
}
.v-enter-to {
  opacity: 1;
  position: absolute;
}
.v-leave-active {
  position: absolute;
}
.v-leave-to {
  transform: translateY(50vh);
  opacity: 0;
}
</style>
