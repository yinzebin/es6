<template lang="html">
      <div class="container">
          <slot  name="header"></slot>
          <h1>这是father组件</h1>
          <slot name="footer"></slot>
      </div>
</template>

<script>
// import Son from './Son'
export default {
}
</script>

<style lang="css" scoped>

.container{
  width: 500px;
  height: 500px;
  background-color: #aaa;
}
</style>
