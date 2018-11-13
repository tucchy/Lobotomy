<template>
  <div class="flex_wrapper">
    <header>
      <router-link to="/">
        <img src="../../static/top.png">
      </router-link>
    </header>
    <main>
      <transition name="panel" appear>
        <ul id="panel_list">
          <li>
            <router-link to="/sephirah">
              <div class="panel">セフィラ</div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Detail', params: { data: 'test' } }">
              <div class="panel">アブノーマリティ</div>
            </router-link>
          </li>
          <li>
            <div class="panel">E.G.O</div>
          </li>
          <li>
            <div class="panel">試練</div>
          </li>
        </ul>
      </transition>
    </main>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      randomNumber: 'message',
      items: [
        {message: 'item1'},
        {message: 'item2'}
      ]
    }
  },
  methods: {
    get_sephirah () {
      const path = 'https://lobotomyinfostorehouse.herokuapp.com/api/info/test'
      axios.get(path)
        .then(response => {
          this.randomNumber = response.data.randomNumber
          console.log(response)
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
    img{
      width: 100%;
    }
}
main {
  grid-area: main-area;
  width: 100%;
  height: 100%;
}
ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 100px;
  padding-left: 1rem;
  padding-right: 1.5rem;
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
.panel-enter-active, .demo-leave-active {
  transition: transform .5s, opacity .5s;
}
.panel-enter {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
