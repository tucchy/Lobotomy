<template>
  <div>
    <img v-bind:src="'../../static/sephirah/'+ s.name +'.png'" />
    <p>{{ data }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: ''
    }
  },
  methods: {
    get_info () {
      const path = 'https://lobotomyinfostorehouse.herokuapp.com/api/info/' + this.data
      axios.get(path)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.data = this.$route.params.data
    this.get_info()
  }
}
</script>
