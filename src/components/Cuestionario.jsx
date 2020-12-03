import React from 'react'

export default function Cuestionario() {
    return (
        <>
            <h1 className="titulo-principal">CUESTIONARIO</h1>
            <div class="card mb-4">
                <div className="card-header">
                    Que es HTTP
                </div>
                <div className="card-body">
    
                    <p className="card-text">Es un protocolo de comunicacion usado para la comunicacion entre los servidores web.</p>

                </div>
            </div>

            <div class="card mb-4">
                <div className="card-header">
                Que diferencia hay entre un proceso sincrono y uno asincrono
                </div>
                <div className="card-body">
    
                    <p className="card-text">La diferencia es que un codigo sincrono espera una instruccion anterior para que se ejecute, mientras que un codigo asincrono mientras espera una respuesta, este sigue con las demas instrucciones
                    por ejemplo cuando hacemos fetch a un servicio el codigo es el encargado de pedir los datos, pero el tiempo de llegada de los datos dependen del servidor. Debido a esto es que es preferible
                    que se ejecute otra parte del codigo mientras se obtiene una respuesta del servidor.</p>
                    
                </div>
            </div>
            <div>

            <div class="card mb-4">
                <div className="card-header">
                    Que es Ajax
                </div>
                <div className="card-body">
    
                    <p className="card-text">Ajax es: asincronous javascript and xml y es una forma de trabajar con javascript de forma asincrona</p>

                </div>
            </div>

            <div class="card mb-4">
                <div className="card-header">
                    Que son los servicios Rest y SOAP
                </div>
                <div className="card-body">
    
                    <p className="card-text">SOAP: es la forma en la que dos objetos se comunican poor el intercambio de datos xml y REST
                    es una tecnologia que permite transmitir cualquier tipo de datos.</p>

                </div>
            </div>

            
            <div class="card mb-4">
                <div className="card-header">
                Que malas practicas en  programacion pueden causar un memory leak
                </div>
                <div className="card-body">
    
                    <p className="card-text">Memory leack es garbaje colecction sin embargo no estoy muy familiarizado con la optimazion de la memoria</p>

                </div>
            </div>

            </div>
        </>
    )
}
