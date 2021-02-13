
import { createStore } from 'vuex'



const store= createStore({

    state:{
    product:{
        name:"Product1",
        cost:100
    }
},
getters:{
    changePrice:state=>{
        var changedProduct=state.product;
        changedProduct.cost=20;

        return changedProduct;
    }
},
mutations:{}
})

export default store;