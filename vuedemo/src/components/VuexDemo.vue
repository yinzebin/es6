<template lang="html">
    <div class="">
        <h1> vuex demo page</h1>
        <h1>{{brandname}}</h1>

        <input type="text" name="" v-model="brandname">
        <MyButton name="添加"  @button-click="click"/>

        <ul>
          <li v-for="b in brands">
            {{b.name}}
          </li>
        </ul>
    </div>
</template>

<script>
import MyButton from './Button'
export default {
  data:function(){
      return {
        brandname:'',
        brands:[]
      }
  },
  components:{MyButton},
  mounted:function(){
    // console.log(this.$store.state.brand.name)

    this.brandname = this.$store.getters.getBrand.name;
    this.brands =  this.$store.getters.getBrands;
  },
  methods:{
    click(){
      console.log(this.brandname)
      //1. this.$store.state.brands.push({name:this.brandname})

      var brand = {name:this.brandname};

      // 2.this.$store.commit('addBrand',brand)

      this.$store.dispatch('addBrand',brand)




    }
  }
}
</script>

<style lang="css">
</style>
