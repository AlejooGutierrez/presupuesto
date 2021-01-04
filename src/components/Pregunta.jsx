import React, { useState } from 'react'
import { Error } from './Error'

export const Pregunta = ({setPresupuesto, setRestante, setPregunta}) => {

    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    //Funcion que lee el presupuesto

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value))
    }

    const agregarPresupuesto = e =>{
        e.preventDefault()

        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return;
        }

        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setPregunta(false)

    }

    return (
        <>
            <div className="u-full-width">
                <h2>¿Cuanto es tu presupuesto?</h2>
                {error && <Error mensaje="El Presupuesto Es Incorrecto"/> }
            </div>
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="text"
                    name="respuesta"
                    className="u-full-width"
                    placeholder="Coloca tu Presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir Presupuesto"
                />
            </form>
        </>
    )
}
