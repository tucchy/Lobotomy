<template>
<transition>
  <div v-cloak>
    <header>
      <router-link to="/sephirah">
        セフィラ一覧へ
      </router-link>
    </header>
    <img v-bind:src="'../../static/sephirah/'+ data.name +'.png'" />
    <p>{{ data.name }}</p>
    <p>{{ data.Ename }}</p>
    <p>{{ data.serif }}</p>
    <p>{{ data.intro }}</p>
    <p>{{ data.personality }}</p>
    <p>{{ data.story }}</p>
    <DetailTab></DetailTab>
  </div>
</transition>
</template>

<script>
import axios from 'axios'
import DetailTab from './DetailTab.vue'
export default {
  components: {
    DetailTab
  },
  data () {
    return {
      data: {}
    }
  },
  methods: {
    get_info () {
      const path = 'https://lobotomyinfostorehouse.herokuapp.com/api/info/sephirah/' + this.data
      axios.get(path)
        .then(response => {
          console.log(response)
          this.data = response.data
          console.log(this.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.data = this.$route.params.data
    console.log(this.data)
    this.get_info()
  }
}
</script>
<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";
[v-cloak] {
  display: none;
}
p {
  color: #b8b641;
}
.panel-enter {
  transform: translateX(-100%);
}
.panel-leave-active {
  position: absolute;
}
.panel-leave-to {
  transform: translateX(100%);
}
</style>
