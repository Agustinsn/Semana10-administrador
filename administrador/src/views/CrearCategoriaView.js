import React,{useState} from 'react'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'
import FromCategoria from '../components/FormCategoria'
import {crearCategoria} from "../services/categoriaService"

function CrearCategoriaView() {
    const [value,setValue] =useState("")
    const history = useHistory()

    const manejarSubmit = async(e)=>{
        e.preventDefault()
        
        let nuevaCategoria ={
            nombre:value
        }
        try {
            await crearCategoria({...nuevaCategoria})
            await Swal.fire({
                icon:"success",
                title:"Categoria Creada",
                showConfirmButton:false,
                timer:2000
            })
            history.push('/')
        } catch (error) {
            throw error
        }
    }

    return (
        <div>
            <h1>Crear categoria</h1>
            <FromCategoria 
            value={value}
            setValue={setValue}
            manejarSubmit={manejarSubmit}/>
        </div>
    )
}

export default CrearCategoriaView
