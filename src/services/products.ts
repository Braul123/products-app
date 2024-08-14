
import { Product } from "../models/interface";

/**
 * @function fetchNewProductDefault
 * @description Agrega un producto por defecto a la colección de productos
 * @param data
 * @returns 
 */
export function fetchNewProductDefault() {
    return new Promise(async (resolve) => {
        const uniqueid = JSON.stringify(Math.random()).slice(2,6);
        const newProduct: Product = {
            id: uniqueid,
            name: `Nuevo producto ${uniqueid}`,
            description: "Descubre la excelencia en cada detalle con nuestro innovador producto. Diseñado para satisfacer tus necesidades y elevar tu experiencia, este artículo combina calidad, funcionalidad y estilo. Fabricado con materiales de primera, garantiza durabilidad y un rendimiento excepcional. Su diseño ergonómico y moderno se adapta perfectamente a cualquier entorno, haciendo de él una opción ideal para el uso diario.",
            image: "",
            price: 200000
        }
        resolve(newProduct);
    })
}