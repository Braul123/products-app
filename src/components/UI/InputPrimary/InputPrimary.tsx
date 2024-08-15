
import { useSelector } from 'react-redux';
import './InputPrimary.css'
import { useColors } from '../../../services/utils/colors';
import { PropsInputPrimary } from '../../../interface/models/interface';

/**
 * @function InputPrimary
 * @description Componente para renderizar un input primario
 * @param value Valor del input
 * @param setValue Evento set para el valor del input
 * @param placeholder Placeholder convecional
 * @param disable Estado del input (true | false)
 * @param type Tipo del input - convencional
 * @param style Estilos generales
 * @returns 
 */
export default function InputPrimary(data: PropsInputPrimary) {
    const isDarker = useSelector((state: any) => state.colorSystemSlice.useColorScheme) === "dark";
    const colorsCustom = useColors();

    const stylesInputCustom = {
        borderColor: isDarker ? '#41484D' : '#71787E',
    }

    return (
        <div className='contentInput'>
            <input
                value={data.value}
                className="inputPrimary"
                style={{ ...stylesInputCustom, ...colorsCustom.colorText, ...data.style }}
                disabled={data.disable}
                type={data.type ? data.type : "text"}
                onChange={(event) => data.setValue(event.target.value)}
                placeholder={data.placeholder} />
        </div>

    )
}
