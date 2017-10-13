import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
      brand : { name:'缝纫机乐队',number:4},
      brands : [
        {name:'缝纫机乐队',id:0}
      ]
    },

    mutations : {
      addBrand(state,brand){
          state.brands.push(brand);
      }
      // addBrand : ( state,brand) => state.brands.push(brand)
    },

    actions : {
      addBrand(store,brand){
        store.commit('addBrand',brand);
      }
    },

    getters : {
      getBrand : function(state){
          return state.brand
      },
      getBrands : ( state ) => state.brands
    }
})
