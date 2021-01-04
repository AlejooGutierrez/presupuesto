import React, { useState,useEffect } from 'react'
import { ControlPresupuesto } from './components/ControlPresupuesto'
import { Form } from './components/Form'
import { Listado } from './components/Listado'
import { Pregunta } from './components/Pregunta'

function App() {

  //definir el state


  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrarPregunta, setPregunta] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [crearGasto, guardarGasto] = useState(false)

  //actualoizar restante

  useEffect(() => {
    if (crearGasto){
      //agrega nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ])

      //resta
      const presupuestoRestante = restante - gasto.cantidad;

      setRestante(presupuestoRestante)

      guardarGasto(false)
    }
  }, [gasto, crearGasto,gastos,restante])

  



  return (
    <>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido-principal">
            {
              mostrarPregunta
                ? (
                  <Pregunta
                    setPresupuesto={setPresupuesto}
                    setRestante={setRestante}
                    setPregunta={setPregunta}
                  />
                )
                :
                (
                  <div className="row animate__animated animate__backInDown">
                    <div className="one-half column">
                      <Form
                        setGasto={setGasto}
                        guardarGasto={guardarGasto}
                       />
                    </div>
                    <div className="one-half column">
                      <Listado 
                        gastos={gastos}
                      />
                      <ControlPresupuesto 
                        presupuesto={presupuesto}
                        restante={restante}
                      />
            </div>
                  </div>
                )

            }


          </div>
        </header>
      </div>
    </>
  );
}

export default App;
