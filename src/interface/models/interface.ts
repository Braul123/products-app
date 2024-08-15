
/**
 * @description Interface de un producto - son los datods requeridos que debe tener un producto dentro de la aplicación
 */
export interface Product {
    name: string
    description: string,
    price: number,
    image: any,
    id?: string,
    category: string,
    favorite: boolean
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

/**
 * @description Propiedades para modal de creación o edición de producto
 */
export interface PropsModalProduct {
    open: boolean
    action: "create" | "edit"
    setOpenModal: any
    dataProduct?: Product
}

/**
 * Propiedades para el buscador general
 */
export interface PropsSearch {
    onReturn: any
}

/**
 * @description Propiedades para el paginador
 */
export interface PropsPagintaion {
    count: number
    initalPage: number
    onChange: any
}