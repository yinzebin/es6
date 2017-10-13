<template lang="html">
      <div class="container">
          <h1> App</h1>

          <Father>
            <Son  slot="header"/>
            <Son2  slot="footer"/>
          </Father>

          <input  ref="myinput"  type="text" name=""  v-model="num">

          <button  @click="getmodel" type="button" name="button">click</button>
      </div>
</template>

<script>

import Father from './Father'
import Son from './Son'
import Son2 from './Son2'
export default {
  data:function(){
      return {
        num:100
      }
  },
  components:{
    Father,
    Son,
    Son2
  },
  methods:{
    getmodel:function(){
      var val = this.$refs.myinput.value;
      console.log(this.num)
      console.log(val)
      var input = this.$refs.myinput;
      input.style.backgroundColor = 'red'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
