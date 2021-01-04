import React from 'react'

export const Gasto = ({gasto}) =>(
        <li className="gastos animate__animated animate__heartBeat">
            <p>
                {gasto.name}
                <span className="gasto">$ {gasto.cantidad}</span>
            </p>
        </li>
    )
