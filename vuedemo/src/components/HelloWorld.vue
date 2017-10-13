<template>
  <div class="hello">

      <div class="block"  @click="toggle">

          <div v-bind:class="{ active: isActive }">
          </div>


      </div>

      <h1 v-if="show">这块内容根据数据判断是否显示  if ififif</h1>
      <h1 v-show="show">这块内容根据数据判断是否显示 show showshowshow</h1>

      <ul>
        <li v-for="item in shangpin">
          <span>{{item.name}}</span>--<span>{{item.price}}</span><span v-if="item.isnew">新品</span>
        </li>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isActive : false,
      show:true,
      shangpin:[
        {id:0,name:'milk',price:2,isnew:false},
        {id:1,name:'milk1',price:2.3,isnew:true},
        {id:2,name:'milk2',price:2.1,isnew:false},
        {id:3,name:'milk3',price:2.5,isnew:true},
        {id:4,name:'milk4',price:2.7,isnew:false},
        {id:5,name:'milk5',price:3,isnew:true},
      ]
    }
  },
  methods:{
    toggle:function(){
        this.isActive = !this.isActive;
        this.show = !this.show;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.block{
  width: 100px;
  height: 100px;
  background-color: red;
}
.active{
  width: 100px;
  height: 50px;
  background-color: blue;
}
</style>
