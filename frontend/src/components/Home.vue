<template>
  <div class="flex_wrapper">
    <header>
      <img @click="changepage('index')" src="../../static/top.png">
    </header>
    <main>
      <div class="main-container">
        <div class="container-frame">
          <transition>
            <Sephirah class="menu" v-if="this.pagename === 'sephirah'"></Sephirah>
            <Abnormality class="menu" v-if="this.pagename === 'abnormality'"></Abnormality>
          </transition>
        </div>
      </div>
      <Index class="menu tab" @change ="changepage"></Index>
    </main>
  </div>
</template>
<script>
import Index from './Index.vue'
import Sephirah from './Sephirah.vue'
import Abnormality from './Abnormality.vue'
export default {
  components: {
    Index,
    Sephirah,
    Abnormality
  },
  data () {
    return {
      pagename: 'index'
    }
  },
  methods: {
    changepage: function (pagename) {
      this.pagename = pagename
    }
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
$header_height: 6rem;
$index_bg: #2b2b2b;
.flex_wrapper {
  display: flex;
  background-color: $index_bg;
  height: 100%;
  flex-direction: column;
}
.wrapper {
  display: grid;
  grid-template-rows: $header_height 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'main-area';
  box-shadow: 0 0 10p rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: $index_bg;
}
html {
  height: 100vh;
}
header {
  grid-area: header;
  width: 100%;
  z-index: 1;
    img{
      width: 100%;
    }
}
main {
  grid-area: main-area;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 500px 100px;
  grid-template-columns: 1fr;
  grid-template-areas: 'content' 'tab';
}
.main-container {
  grid-area: content;
  overflow-y: scroll;
}
.tab {
  grid-area: tab;
  z-index: 1;
  background-color: $index_bg;
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
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
  transition: all 0.8s ease;
  width: 100%;
}
.v-enter {
  transform: translateY(-100%);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-leave-active {
  position: absolute;
}
.v-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
