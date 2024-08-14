
/**
 * @description Interface de un producto - son los datods requeridos que debe tener un producto dentro de la aplicación
 */
export interface Product {
    name: string
    description: string,
    price: number,
    image: any,
    id?: string,
    category: string
}

/**
 * @description Propiedades para un campo de entrada general
 */
export interface PropsInputPrimary {
    value: any
    setValue: any
    placeholder: string
    disable?: boolean
    type?: "text" | "password" | "email" | "number"
    style?: any
};

/**
 * @description Propiedades para un boton primario general
 */
export interface PropsButtonPrimary {
    onClick: any,
    title: string,
    status: 'enabled' | 'disabled',
    progress?: boolean,
    style?: any
}