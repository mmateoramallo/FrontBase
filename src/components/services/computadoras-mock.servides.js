//En el servicio creamos los metodos del CRUD
import arrayComputadoras from '../datos-mock/computadoras-mock.js';

async function getComputadoras() {
    return arrayComputadoras;
}


async function getComputadoraById(id) {
    return arrayComputadoras.find(computadora => computadora.id === id);
}

async function Agregar(computadora) {
    computadora.id = arrayComputadoras.length + 1;  // simula autoincremental
    arrayComputadoras.push(computadora);
}


async function Modificar(computadora) {
    let computadoraEncontrada = arrayComputadoras.find((computadorafind) => computadorafind.id === computadora.id);
    if (computadoraEncontrada) {
        computadoraEncontrada.modelo = computadora.Nombre;
    }
}


async function Eliminar(computadoraId){
    let computadoraEncontrada = arrayComputadoras.find((computadorafind) => computadorafind.id === computadoraId);
    if (computadoraEncontrada) {
        arrayComputadoras.splice(arrayComputadoras.indexOf(computadoraEncontrada), 1);
    }
}
export const computadorasMockService = {
    getComputadoras, getComputadoraById, Agregar, Modificar, Eliminar
};
