<template lang="html">
    <div class="container"  @click="click">
        {{name}}
    </div>
</template>

<script>
export default {
  props:['name'],
  methods:{
    click:function(){
      this.$emit('button-click',{name:'button name'})
    }
  }
}
</script>

<style lang="css"  scoped>

.container{
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: #aaf;
  line-height: 50px;
  color: #fff;
  font-size: 24px;
  text-align: center;
}
</style>
