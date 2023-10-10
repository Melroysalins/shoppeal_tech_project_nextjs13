const { configureStore } = require("@reduxjs/toolkit");
const { default: Cartslice } = require("./Cartslice");

export const appstore = configureStore({
    reducer:{
        cart : Cartslice
    }
})