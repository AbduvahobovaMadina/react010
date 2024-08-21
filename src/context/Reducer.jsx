export const initialState = {
    son:0,
    str:"salom dunyo",
    data: [],
    wishlist: [],
    cart: [],
    token: null,
  };
export  const reducer = (state, action)=>{
    switch(action.type){
      case "INC":
        return {...state,son : state.son + action.payload}
      case "DEC":
        return {...state,son :state.son - 1 }
      case "ADD_TO_WISHLIST":
        let index = state.wishlist.findIndex(item => item.id === action.payload.id)
        if(index < 0){
          return {...state, wishlist: [...state.wishlist, action.payload]}
        }else{
          return {...state, wishlist: state.wishlist.filter(item => item.id !== action.payload.id)}
        }
      case "CART":
        let el = state.cart.findIndex(item => item.id === action.payload.id)
        if(el < 0){
          return {...state, cart: [...state.cart, action.payload]}
        }else{
          return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
        }
      default:
        return state
    }
  };