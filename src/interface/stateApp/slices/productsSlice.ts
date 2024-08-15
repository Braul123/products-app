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
                let _products: any = state.products;
                const _newProduct = actions.payload;
                _products.unshift(_newProduct);
                // Guarda la data en el localstorage para mantenerla
                localStorage.setItem("products", btoa(JSON.stringify(_products)));
                state.products = _products;
            },
            // Edita un producto
            updateProductById: (state, actions) => {
                let _products: any = state.products;
                const _editedProduct = actions.payload;
                // Obtiene la posicion del producto dentro de la colección
                const indexOfProduct = _products.findIndex((prod: any) => prod.id == _editedProduct.id);
                // Remplaza la información
                _products[indexOfProduct] = _editedProduct;
                state.products = _products;
                // Guarda la data en el localstorage para mantenerla
                localStorage.setItem("products", btoa(JSON.stringify(_products)));
            },
            setAllProducts: (state, actions) => {
                state.products = actions.payload;
            }
        }
    }
)

export const { saveNewProduct, updateProductById, setAllProducts } = productsSlice.actions;
export default productsSlice.reducer;