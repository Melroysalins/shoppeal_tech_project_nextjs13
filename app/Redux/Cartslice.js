const { createSlice } = require("@reduxjs/toolkit");

const Cartslice  = createSlice({
    name : 'cart',

    initialState : {
        cart_items :[]
    },

    reducers:{

        AddToCart:(state,action) => {

            const checkifpresent = state.cart_items.find((ele)=> ele.id === action.payload.id);

            if(!checkifpresent){

                state.cart_items.push(action.payload)

            }
            else{
                checkifpresent.quantity++;
            }

           
        },
        RemoveCart : (state,action) => {
            const remove = state.cart_items.filter((ele) => ele.id !== action.payload);

            state.cart_items = remove
        }
    }
})


export default Cartslice.reducer;


export const {AddToCart,RemoveCart}  = Cartslice.actions