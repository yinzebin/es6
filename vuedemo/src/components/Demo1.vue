<template lang="html">
    <div class="">
        <h1>demo1</h1>
        <h1>{{count}}</h1>
        <mybox  :title="title" :name="name" @myevent="myevent"/>

        <my-button :name="name"   @button-click="click($event)"/>
        <my-button name="click"   @button-click="click(2)"/>
        <my-button name="按钮"     @button-click="click(3)"/>
        <my-button name="登录"     @button-click="click(4)"/>
    </div>
</template>

<script>

import Box from './Box';
import Button from './Button';

export default {
  data:function(){
      return{
        title:'boxtitle',
        name:'开始',
        count:1
      }
  },
  mounted:function(){
    console.log(this.$route)
      console.log(this.$route.query.id)
  },
  components:{
    mybox:Box,
    'my-button':Button
  },
  methods:{
    myevent:function(){
      console.log('父组件监听子组件事件')
    },
    click:function(val){
      console.log(val)
      // console.log('click',num)
      this.count++;
    }
  }
}
</script>

<style lang="css">
</style>
