import { createSlice } from '@reduxjs/toolkit';

let initialState={
    productList : [],
    detailList : [],
}

// function productReducer (state=initialState, action){
//     let { type, payload } = action;
//     switch(type){
//         case "GET_PRODUCT_SUCCESS" :
//             return { ...state, productList : payload.data };

//         case "PRODUCT_DETAIL" :
//             return { ...state, detailList : payload.data };

//         default :
//             return { ...state };
//     }
// }

// export default productReducer;

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        getAllProducts(state, action){
            state.productList = action.payload.data;
        },
        getDetailProduct(state, action){
            state.detailList = action.payload.data;
        },
    },
});

console.log("ppppp", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;