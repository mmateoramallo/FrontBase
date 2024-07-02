import arrayComputadoras from './datos-mock/computadoras-mock.js';
import React, { useState, useEffect } from 'react';
import { computadorasMockService } from './services/computadoras-mock.servides.js';


function Computadoras(){

    /* const computadoras = arrayComputadoras; */
    const tituloPagina = "Computadoras Personales";
    const [computadoras, setComputadoras] = useState(null);

    useEffect(() => {
        BuscarComputadoras();
    }, []);

    async function BuscarComputadoras(){
        let data = await computadorasMockService.getComputadoras();
        setComputadoras(data);
    };

    return (
        <>
        <div className="tituloPagina">Computadoras Personales</div>
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
            <thead>
            <tr>
              <th style={{ width: "33%" }}>NroMaquina</th>
              <th style={{ width: "33%" }}>Modelo</th>
              <th style={{ width: "33%" }}>Marca</th>
            </tr>
          </thead>
          <tbody>
            {
                computadoras && computadoras.map((computadora) => (
                    <tr key={computadora.id}>
                        <td>{computadora.id}</td>
                        <td>{computadora.modelo}</td>
                        <td>{computadora.marca}</td>
                    </tr>
                ))
            }
          </tbody>
            </table>
        </div>
        </>
    );
}


export { Computadoras };