import React, { useState, useEffect } from 'react';


function ApiRest() {
  const [datos, setDatos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchDatos = async () => {
      try {
        const response = await fetch('https://devsapihub.com/api-fast-food');
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDatos(); 

  }, []);  

  return (
    <div>
      <h2>Datos de la API</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <pre>{JSON.stringify(datos, null, 2)}</pre>
      )}
    </div>
  );
}

export default ApiRest;
