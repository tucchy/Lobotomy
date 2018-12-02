<template>
  <div class="flex_wrapper">
      <transition-group tag="ul" name="panel" id="panel_list" appear v-cloak>
        <li v-for="s in sephirah_list" :key="s.id">
          <transition name="fade">
            <router-link :to="{ name: 'Detail_Sephirah', params: { data: s.Ename } }">
              <div class="panel">
                <div class="img-frame">
                  <img v-bind:src="'../../static/sephirah/'+ s.name +'.png'" />
                </div>
                <p>{{ s.name }}</p>
              </div>
            </router-link>
          </transition>
        </li>
      </transition-group>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      sephirah_list: []
    }
  },
  methods: {
    get_sephirah () {
      const path = 'https://lobotomyinfostorehouse.herokuapp.com/api/get/sephirah'
      axios.get(path)
        .then(response => {
          this.sephirah_list = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.get_sephirah()
  }
}
</script>
<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";
$header_height: 6rem;
$index_bg: #2b2b2b;
[v-cloak] {
  display: none;
}
.flex_wrapper {
  display: flex;
  background-color: $index_bg;
  height: 100vh;
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
body {
  margin: 0;
  background-color: $index_bg;
}
header {
  grid-area: header;
  width: 100%;
    img{
      width: 100%;
    }
}
main {
  grid-area: main-area;
  width: 100%;
  height: 65%;
  overflow: scroll;
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}
li {
  .panel {
    border: 1px solid #b8b641;
    color: #b8b641;
    box-shadow: 0px 0px 1px 1px #b8b641;
    height: 65px;
    font-size: 1rem;
    text-align: center;
    transition: 0.2s;
    display: flex;
    .img-frame{
      padding: 4px;
      width: 65px;
      height: 65px;
      img {
        height: 100%;
        border: 1px solid #b8b641;
      }
    }
    p {
      text-align: right;
      padding-right: 5px;
      width: 70%;
    }
  }
  display: block!important;
  width: 50%;
  height: 100px;
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
.panel-enter-active, .demo-leave-active {
  transition: transform .5s, opacity .5s;
}
.panel-enter {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
