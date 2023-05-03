//reducer
//Synchronous Function (no async function)
// we should not mutate the original state
//we are sending new object


// switch(action.type){
//     case CLEAR_CART:
//         return {...state, cart:[]}
//     default:
//         return state
// }

import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE, TOGGLE_AMOUNT } from "./actions";
import cartItems from "./cart_items";

const reducerFn = (state, action)=>{
    
    // if(action.type === INCREASE){
    //     let tempCart = state.cart.map((cartItem)=>{
    //         if(cartItem.id === action.payload.id){
    //             cartItem = {...cartItem, amount:cartItem.amount+1 }
    //         }
    //         return cartItem
    //     })
    //     return {...state, cart:tempCart}
    // }
    // if(action.type === DECREASE){

        // let tempCart = []
        // if(action.payload.amount === 1){
        //     tempCart = state.cart.filter((cartItem)=>cartItem.id!==action.payload.id)
        //     return {...state, cart:tempCart}
        // }
        // else{
        //     tempCart = state.cart.map((cartItem)=>{
        //         if(cartItem.id === action.payload.id){
        //             cartItem = {...cartItem, amount:cartItem.amount-1}
        //         }
        //         return cartItem
        //     })
        //     return {...state, cart:tempCart}
        // }

    //refractor it and  checking amount === 1 in cartItem
        // let tempCart  = state.cart.map((cartItem)=>{
        //         if(cartItem.id === action.payload.id){
        //             cartItem = {...cartItem, amount:cartItem.amount-1}
        //         }
        //         return cartItem
        //     })
        //     return {...state, cart:tempCart}
        // }

    if(action.type === REMOVE){
        return {...state, cart:state.cart.filter((cartItem)=>cartItem.id!==action.payload.id)
        }
    }
    if(action.type === CLEAR_CART){
        return {...state, cart:[]}
    }

    if(action.type === GET_TOTALS){
        let {total, amount} = state.cart.reduce((carTotal, currentItem)=>{
                carTotal.amount += currentItem.amount
                carTotal.total += currentItem.amount * currentItem.price

            return carTotal
        },{
            total:0,
            amount:0
        })

        total = parseFloat(total.toFixed(2))
        return {...state, amount, total}
    }

    if(action.type === TOGGLE_AMOUNT){
        return  {...state, cart:state.cart.map((cartItem)=>{
            if(action.payload.id === cartItem.id ){
                if(action.payload.toggle == "INC"){
                    return cartItem = {...cartItem, amount:cartItem.amount + 1}
                }
                if(action.payload.toggle == "DEC"){
                   return  cartItem = {...cartItem, amount:cartItem.amount - 1}
                }
            }
            //default return if id doesn't match
            return cartItem
            })
    }
}

    return state;
  }


  export default reducerFn