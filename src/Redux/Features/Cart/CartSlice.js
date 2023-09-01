import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart:JSON.parse(localStorage.getItem('cart')) ?? []  //uygulama kapatılıp tekrar açıldığında ürünler sepete geri gelir. ?? operatörü soldaki null ise sağdakini carta atar.

};

export const CartSlice = createSlice({
    name:'cart',
    initialState,  //initialState:initialState ile aynı işlevi görür.
    reducers: {
         /*
            1.ProductCart içerisindeki AddToCart butonunun kullanacağı ekleme operasyonu.
            2.Cart componenti içerisindeki her bir satırda bulunan Remove butonunun kullanacağı removeFromCart isimli reducer.
            3.Car componentindeki en alttaki tüm sepeti temizle butonu removeAll
            4.Cart componentindeki her satırda bulunan + butonu incrementProduct.
            5.Cart componentindeki her satırda bulunan - butonunun reduceProduct. 
         */

            addToCart(state,action){         //true veya false döner
                const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id); //sepete eklenecek ürün sepette var mı kontrolü. payloaddaki ürün idsi ile sepette ürün var ise idsi karşılaştırılır.
                if(itemIndex>=0) { //itemIndex dolu gelirse ürün zaten sepette var demektir.
                    state.cart[itemIndex].quantity += 1;
                }
                else {                                  //actiondan gelen datalara ek quantity parametresini ekledik objeye
                    const product = { ...action.payload, quantity: 1 };  //... koyarak action.payloaddaki datayı kopyaladık,
                    state.cart.push(product);
                }
                localStorage.setItem('cart',JSON.stringify(state.cart)) //üstte verdiğimiz name adını lsye yolluyoruz
                                    //local storage sadece string değer yazılır, objeyi stringify ediyoruz.
            },
            removeFromCart(state,action){
                const updatedCart = state.cart.filter((p) => p.id !== action.payload.id);
                state.cart = updatedCart;
                localStorage.setItem('cart',JSON.stringify(state.cart));
            },
            removeAllFromCart(state,action){
                state.cart = [];
                localStorage.setItem('cart', JSON.stringify(state.cart));
            },
            reduceAmonutOfProduct(state,action){
                const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
                if(state.cart[itemIndex].quantity > 1){  //sepette üründen 1'den fazla var ise miktarı bir azaltırız.
                    state.cart[itemIndex].quantity -= 1;
                }
                else{
                    const updatedCart = state.cart.filter((p) => p.id !== action.payload.id);
                    state.cart = updatedCart;
                }
                localStorage.setItem('cart', JSON.stringify(state.cart));
            },
            incrementAmountOfProduct(state,action){
                const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
                if(state.cart[itemIndex].quantity >= 1)
                  state.cart[itemIndex].quantity += 1;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
    }
})

export const
 {  
    addToCart,
    removeFromCart,
    removeAllFromCart,
    reduceAmonutOfProduct,
    incrementAmountOfProduct } = CartSlice.actions;

export default CartSlice.reducer;