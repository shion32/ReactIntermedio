import React, { useState } from 'react'

function ToggleEstado() {
    const [isvisible, setIsVisible ]=useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isvisible)}>
        {isvisible ? 'ocultar' : 'mostrar'}
      </button>
      {isvisible && (
        <div>
            este contenido se puede mostar ocultar
        </div>
      )}
    </div>
  );
}
export default ToggleEstado;