
import React from 'react';
import './ButtonPrimary.css'
import { useSelector } from 'react-redux';
import { useColors } from '../../../services/utils/colors';
import { PropsButtonPrimary } from '../../../models/interface';

/**
 * @function ButtonPrimary
 * @description Renderiza un botón primario
 * @param onClick Emite el evento clic del componente
 * @param title Titulo del botón
 * @param status Estado del botón ('enabled' | 'disabled')
 * @param progress Indicador de carga dentro del botón
 * @param style Estilos generales
 * @returns 
 */
export default function ButtonPrimary(data: PropsButtonPrimary) {
    // Customo colors
    const isDarkMode = useSelector((state: any) => state.colorSystemSlice.useColorScheme) === "dark";
    const colorsCustom = useColors();

    return (
        <button
            style={data.status === "enabled" && !data.progress ?
                colorsCustom.enabledMode :
                isDarkMode ? colorsCustom.disabledDarkMode :
                    colorsCustom.disableLightMode
            }
            className='button'
            onClick={data.status === 'enabled' ? data.onClick : null}>
            <span className='titleButton'
            style={
                isDarkMode && data.status === "enabled" ? colorsCustom.textEnabledDarkMode :
                isDarkMode && data.status === "disabled" ? colorsCustom.textDisabledDarkMode :
                !isDarkMode && data.status === "enabled" ? colorsCustom.textEnabledLigthMode : colorsCustom.textDisableLightMode
              }
            >{data.title}</span>
        </button>
    )
}
