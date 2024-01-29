import { createSlice } from '@reduxjs/toolkit';




const apiSlice = createSlice({


  name: 'api',
  initialState: {
    dataArray: [],
    error: null,
    ind: null,
    selectedProduct: null,
    comments: [], 
    comment: '',
  },
  reducers: {
    setDataArray: (state, action) => {
      state.dataArray = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setInd: (state, action) => {
      state.ind = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setComments: (state, action) => {
      state.comments.push(action.payload);
    },
    setComment: (state, action) => {
      state.comment = action.payload; 
    },

    addToCart: (state, action) => {
      const product = action.payload;
      const productId = product.id;

      const existingProduct = state.dataArray.find(item => item.id === productId);

      if (existingProduct) {
        // Если товар уже существует, увеличиваем количество
        existingProduct.quantity += 1;
      } else {
        // Если товара нет, добавляем новый
        state.dataArray.push({
          productInfo: product,
          quantity: 1,
        });
      }
    },
  },
});

export const { setDataArray, setError, setInd, setSelectedProduct, addToCart,setComment ,setComments  } = apiSlice.actions;
export default apiSlice.reducer;