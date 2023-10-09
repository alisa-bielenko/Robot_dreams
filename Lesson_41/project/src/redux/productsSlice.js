import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: [],
  },

  reducers: {
    addNewProduct: (state, action) => {
      state.products = [...state.products, action.payload]
    },

    addProductToCart: (state, action) => {
      state.product = [...state.product, action.payload]
    },

    setProductToCart: (state, action) => {
      state.products = [...action.payload]
    }
  },
})

export const { setProductToCart, addProductToCart, addNewProduct} = productsSlice.actions

export default productsSlice.reducer