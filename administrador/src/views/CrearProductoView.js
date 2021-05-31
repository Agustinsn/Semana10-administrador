import React, {useState,useEffect} from 'react'
import FormProducto from "../components/FormProductos"
import {crearProducto} from "../services/productoService"
import Swal from "sweetalert2"
import {useHistory} from "react-router-dom"
import {obtenerCategoria} from "../services/categoriaService"

function CrearProductoView() {
    const [value,setValue]= useState({
        nombre:'',
        descripcion:'',
        precio:0,
        stock:0,
        fotos:[],
        colores:[],
        id_categoria:1
    })

    const [categorias,setCategorias]=useState([])

    const actualizarInput=(e)=>{
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const getCategorias= async()=>{
        try {
            let categoriasObtenidas= await obtenerCategoria()
            setCategorias([...categoriasObtenidas])
        } catch (error) {
            console.log(error)
            
        }
    }

    const manejarSubmit=async (e)=>{
    e.preventDefault()
    try {
        await crearProducto({...value})
        Swal.fire({
            icon:'success',
            title:'Producto Creado',
            showConfirmButton:false,
            timer:2000
        })
        history.push("/")
    } catch (error) {
        console.log(error)
    }
    }

    useEffect(()=>{
        getCategorias()
    },[])

    const history=useHistory()

    return (
        <div>
            <h1>Crear Producto</h1>

            <FormProducto 
            value={value} 
            actualizarInput={actualizarInput}
            setValue={setValue}
            manejarSubmit={manejarSubmit}
            categorias={categorias}/>
        </div>
    )
}

export default CrearProductoView
