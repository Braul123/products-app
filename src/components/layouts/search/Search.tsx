
import React, { useEffect, useState } from 'react'
import './Search.css';
import InputPrimary from '../../UI/InputPrimary/InputPrimary';
import { PropsSearch } from '../../../interface/models/interface';

export default function SeacrhLayout(props: PropsSearch) {

  const [filter, setFilter] = useState('');
  const [typingTimeout, setTypingTimeout] = useState<any>(null);

  useEffect(() => {
    handleChange();
  }, [filter]);

  // Si se deja de escribir en 500msg ejecuta el get de productos
  const handleChange = () => {
    if (filter) {
      // Limpiar el timeout previo
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
  
      // Iniciar un nuevo timeout de 2 segundos
      setTypingTimeout(
        setTimeout(() => {
          props.onReturn('Devuelve data');
        }, 500)
      );
    }
  };


  // Detecta cambios en el campo de búsqueda
  useEffect(() => {
    console.log('CAMBIA EL FILTRO PRINCIPAL');
  }, [filter]);
  
  return (
    <div>
      <InputPrimary
        setValue={setFilter}
        value={filter}
        placeholder="Que estas pensando?"
      />
    </div>
  )
}
