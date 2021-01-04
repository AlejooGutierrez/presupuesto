import React,{useState} from 'react'
import { Error } from './Error'
import shorid from 'shortid'

export const Form = ({setGasto, guardarGasto}) => {

    const [name, setName] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const addGasto = e => {
        e.preventDefault()

        //validar
        if(cantidad < 1 || isNaN(cantidad) || name.trim() === ''){
            setError(true)
            return;
        }
        setError(false)

        //construir gasto
        const gasto = {
            name,
            cantidad, 
            id: shorid.generate()
        }

        setGasto(gasto);
        guardarGasto(true)

        setName('');      
        setCantidad(0);


    }

    return (
        <form onSubmit={addGasto}>
            <h2>Agrega Tus Gastos</h2>
            {
                error &&
            <Error mensaje="Ambos campos son obligatorios o el Presupuesto es incorrecto" />
            
            }
            <div className="campo">
                <label>Nombre De Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"    
                    placeholder="Ej. Transporte"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad De Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"    
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
            </div>
            <input 
                type="submit"
                className="u-full-width button-primary"
                value="AGREGAR GASTO"
            />
        </form>
    )
}
