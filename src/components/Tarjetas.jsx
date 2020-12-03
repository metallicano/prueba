import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Tarjetas() {

    const [pokemon, setPokemon] = useState([]);
    useEffect(async () => {
        getPokemon();
    }, [])


    const getPokemon = async () => {
        const response = await axios('https://rickandmortyapi.com/api/character/');
        console.log(response.data.results);
        setPokemon(response.data.results);
    }
    return (
        <div className="galeria">
            <h1 className="titulo-principal">Diagramacion</h1>

            
            <div className="contenedor-imagenes">
                <div className="imagen">
                    <a data-toggle="modal" data-target='#exampleModal' target="_blank" href="">
                        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
                    </a>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog " role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>


                <div className="imagen">
                    <a data-toggle="modal" data-target='#exampleModal2' target="_blank" href="">
                        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
                    </a>
                    <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>



                <div className="imagen">
                    <a data-toggle="modal" data-target='#exampleModal3' target="_blank" href="">
                        <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" alt="" />
                    </a>
                    <div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" alt="" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="imagen">
                    <a data-toggle="modal" data-target='#exampleModal4' target="_blank" href="">
                        <img src="https://rickandmortyapi.com/api/character/avatar/4.jpeg" alt="" />
                    </a>
                    <div className="modal fade" id="exampleModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src="https://rickandmortyapi.com/api/character/avatar/4.jpeg" alt="" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>


                <div className="imagen">
                    <a data-toggle="modal" data-target='#exampleModal5' target="_blank" href="">
                        <img src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" alt="" />
                    </a>
                    <div className="modal fade" id="exampleModal5" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" alt="" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="imagen">
                    <a data-toggle="modal" data-target='#exampleModal6' target="_blank" href="">
                        <img src="https://rickandmortyapi.com/api/character/avatar/6.jpeg" alt="" />
                    </a>
                    <div className="modal fade" id="exampleModal6" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src="https://rickandmortyapi.com/api/character/avatar/6.jpeg" alt="" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

                

        </div>
    )
}
