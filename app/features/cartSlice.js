import {createSlice} from '@reduxjs/toolkit';
import { AlertMessage } from '../components/AlertMessage';


const initialState = [];
  
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (cart, action) => {
            let tempcart = cart.filter((item) => item.id === action.payload.id);
            if(tempcart < 1){
                return [...cart, action.payload ];
            }else{
                AlertMessage("Adding Error", "You have it...");
                return cart;
            } 
        },
        removeFromCart: (cart, action) => {
            return cart.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer




