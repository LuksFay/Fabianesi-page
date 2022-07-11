import { CardAllItems } from '../components/items/CardAllItems';
import {TYPES} from '../actions/shoppingAction'
export const shoppingInitialState = {
  products: CardAllItems,
  cart: []
}

export function shoppingReducer(state, action){
  switch(action.type){
    case TYPES.ADD_TO_CART:{
      let newItem = state.products.find(
        (product) => product.id === action.payload);
        console.log(newItem);

        return{
          ...state,
          cart: [...state.cart, newItem],
      }
    }
    case TYPES.REMOVE_ONE_FROM_CART:{
      
    }
    case TYPES.REMOVE_ALL_FROM_CART:{
      
    }
    case TYPES.CLEAR_CART:{
      
    }
    default:
      return state
  }
}
