import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
};

export const productsSlice = createSlice(
    {
        name: "productsSlice",
        initialState,
        reducers: {
            // Guarda los prodcutos en el state de la aplicación
            saveNewProduct: (state, actions) => {
                let products: any = state.products;
                const _newProduct = actions.payload;
                products.unshift(_newProduct);
                // Guarda la data en el localstorage para mantenerla
                localStorage.setItem("products", btoa(JSON.stringify(products)));
            }
        }
    }
)

export const { saveNewProduct } = productsSlice.actions;
export default productsSlice.reducer;