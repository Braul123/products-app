
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
    // Limpiar el timeout previo
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Iniciar un nuevo timeout de 2 segundos
    setTypingTimeout(
      setTimeout(() => {
        props.onReturn(filter);
      }, 500)
    );
  };


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
