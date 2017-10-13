<template lang="html">
    <div class=""  @click="click">
        <h2> 这是box组件</h2>
        <h2>{{ title}}</h2>
        <h2>{{ name }}</h2>
    </div>
</template>

<script>
export default {
  name:"Box",
  props:['title','name'],
  methods:{
    click:function(){
      this.$emit('myevent')
    }
  }
}
</script>

<style lang="css">
</style>
