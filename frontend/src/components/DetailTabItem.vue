<template>
<div class="wrapper">
  <p>DetailTabItem</p>
</div>
</template>

<script>
export default {
  props: {
    content: String
  }
}

</script>

<style scoped>
.tab {
  border-radius: 2px 2px 0 0;
  background: #fff;
  color: #311d0a;
  line-height: 24px;
}
.tab:hover {
  background: #eeeeee;
}
.active {
  background: #f7c9c9;
}
.wrapper {
  background-color: #eeeeee;
}

</style>
