import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice';
import selectedCardReducer from './apiSlice';
import basketReducer from '../Layout/RightBar/basket/basketSlice';

const store = configureStore({
  reducer: {
    api: apiReducer,
    selectedCard: selectedCardReducer,
    basket: basketReducer,
  },
});

export default store;