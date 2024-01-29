import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addToBasket: (state, action) => {
      const product = action.payload;

      const existingProduct = state.items.find(
        item => item.productInfo.id === product.id && item.productInfo.category === product.category
      );

      if (existingProduct) {
        // Если товар уже существует, увеличиваем количество
        existingProduct.quantity += 1;
      } else {
        // Если товара нет, добавляем новый
        state.items.push({
          productInfo: product,
          quantity: 1,
        });
      }
    },
    removeFromBasket: (state, action) => {
      const { productId, category } = action.payload;
      const index = state.items.findIndex(
        item => item.productInfo.id === productId && item.productInfo.category === category
      );

      if (index !== -1) {
        const removedProduct = state.items[index].productInfo;
        // Уменьшаем общую сумму при удалении товара
        state.totalAmount -= removedProduct.price * state.items[index].quantity;

        // Уменьшаем количество или удаляем, если количество = 1
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
});

// Дополнительно передаем категорию при добавлении/удалении товара
export const { addToBasket, removeFromBasket, setTotalAmount } = basketSlice.actions;
export default basketSlice.reducer;