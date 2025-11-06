import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  liked: [], // Yoqtirilgan mahsulotlar ro'yxati
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Savatchaga qo'shish funksiyasi o'zgarishsiz qoldi
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (!exist) state.cart.push(action.payload);
    },
    
    // 👇 Yangi va optimallashtirilgan TOGGLE LIKE funksiyasi
    toggleLike: (state, action) => {
      // payload butun mahsulot obyekti ekanligini hisobga olgan holda
      const product = action.payload; 
      
      // 1. Liked massividan mahsulotni topamiz
      const existingItemIndex = state.liked.findIndex((item) => item.id === product.id);

      if (existingItemIndex >= 0) {
        // 2. Agar mavjud bo'lsa (yoqtirilgan bo'lsa) - RO'YXATDAN O'CHIRAMIZ (Unlike)
        state.liked.splice(existingItemIndex, 1);
      } else {
        // 3. Agar mavjud bo'lmasa (yoqtirilmagan bo'lsa) - RO'YXATGA QO'SHAMIZ (Like)
        state.liked.push(product);
      }
    },
    // Yuqorida yozilgan "addToLike" ni "toggleLike" ga o'zgartirganimiz uchun
    // uni eski nomi bilan ishlatmaymiz.
  },
});

// 👇 Export nomlari ham o'zgarishi kerak
export const { addToCart, toggleLike } = shopSlice.actions; 
export default shopSlice.reducer;