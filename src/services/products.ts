
import { Product } from "../interface/models/interface";

/**
 * @function fetchNewProductDefault
 * @description Agrega un producto por defecto a la colección de productos
 * @param data
 * @returns 
 */
export function fetchNewProductDefault() {
    return new Promise(async (resolve) => {
        const uniqueid = JSON.stringify(Math.random()).slice(2, 6);
        const newProduct: Product = {
            id: uniqueid,
            name: `Nuevo producto ${uniqueid}`,
            description: "Descubre la excelencia en cada detalle con nuestro innovador producto. Diseñado para satisfacer tus necesidades y elevar tu experiencia.",
            image: "",
            price: 200000,
            category: "General",
            favorite: false
        }
        resolve(newProduct);
    })
}

/**
 * @function fetchSaveNewProduct
 * @description Crea un producto y retorna el resultado
 */
export function fetchSaveNewProduct(data: Product) {
    return new Promise(async (resolve) => {
        const uniqueid = JSON.stringify(Math.random()).slice(2, 6);
        const newProduct: Product = {
            id: uniqueid,
            ...data
        }
        resolve(newProduct);
    })
}

/**
 * @function fetchEditProduct
 * @description Edita un producto y retorna el resultado
 */
export function fetchEditProduct(data: Product) {
    return new Promise(async (resolve) => {
        resolve(data);
    })
}

/**
 * @function fetchGetProducts
 * @description Obtiene los productos de acuerdo al paginador
 */
export function fetchGetProducts(skip: number, limit: number, products: any) {
    return new Promise(async (resolve) => {
        // identifica hasta que indice debe ir el paginador
        let toIndexFilter = skip + limit;
        // Si es mayor a la logitud del arreglo obtiene todo
        if (toIndexFilter > products.length) {
            toIndexFilter = products.length;
        }
        // Obtiene dos datos
        const filter = products.slice(skip, toIndexFilter);
        resolve(filter);
    })
}