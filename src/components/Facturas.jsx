import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Facturas() {


    const [valor, setValor] = useState()
    const [valor2, setValor2] = useState()
    const [arrayValor, setArrayvalor] = useState([])

    const handlePagar=()=>{
        //console.log("gola");
        //setArrayvalor(arrayValor.push(valor2))
        setValor(valor2)
    }

    const handleValor=(e)=>{
        console.log(e.target.value);
        setValor2(e.target.value)
    }

    console.log(arrayValor);

    return (
        <>
        <h1 className="titulo-principal">FACTURAS</h1>
        <div className="Information">
        
            
            
      <div className="Information-content">
        <div className="Information-head">
          
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Valor Factura" name="valor" onChange={handleValor}/>
            <input type="text" placeholder="Descripcion" name="description" />
            <input type="text" placeholder="Fecha Factura" name="date" />
            
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/"><button  className="btn btn primary" type="button">Regresar</button></Link>
          </div>
          <div className="Information-next" onClick={()=>handlePagar()}>
          <button  className="btn btn primary" type="button" onClick={()=>handlePagar()}>Enviar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3></h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Resumen</h4>
            <span>{valor}</span>
            
          </div>
        </div>
      </div>
      <div>
          <p>imagen de la base de datos creada con mysql</p>
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/6Pfkf9s/basedatos.png" alt="basedatos" border="0"></img></a>
      </div>
    </div>
    </>
    )
}
