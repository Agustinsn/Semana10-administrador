import React,{useRef} from 'react'
import {subirArchivo} from '../services/productoService'

//Esta variable va a permitir manejar archivo
let imagenes;

const asyncForEach = async(array, callback) => {
    for(let i = 0; i < array.length; i++){
      await callback(array[i]) //Se detiene la ejecución hasta que termine
    }
  }
function FormProductos({
    value,
    actualizarInput,
    setValue,
    manejarSubmit,
    categorias}) {

    //const [colores,setColores]=useState([])
    //const [fotos,setFotos]=useState([])

    const inputColor=useRef()
    const inputFotos = useRef()

    const anadirColor =(e)=>{
        e.preventDefault()
        let nuevoColor=inputColor.current.value
        setValue({...value,colores:[...value.colores,nuevoColor]})
    }

    const anadirFoto=(e)=>{
        e.preventDefault()

/*         let nuevaFoto=inputFotos.current.value
        setValue({...value,fotos:[...value.fotos,nuevaFoto]}) */
    }

    const ejecutarSubmit= async(e)=>{
        e.preventDefault()
        let urls=[]
        await asyncForEach(imagenes,async(imagen)=>{
            let urlImagenSubida= await subirArchivo(imagen)
            urls.push(urlImagenSubida)
        })
        manejarSubmit(e)
    }

    const manejarImagen=(e)=>{
        e.preventDefault()
        let misImagenes=e.target.files
        imagenes=misImagenes
    }

    return (
        <div>
            <form onSubmit={(e)=>{ejecutarSubmit(e)}}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" 
                    className="form-control" 
                    name="nombre" 
                    value={value.nombre}
                    onChange={(e)=>{actualizarInput(e)}}></input>
                </div>
                <div>
                    <label>Descripcion</label>
                    <input type="text" 
                    className="form-control" 
                    name="descripcion"
                    value={value.descripcion}
                    onChange={(e)=>{actualizarInput(e)}}></input>
                </div>
                <div>
                    <label>Precio</label>
                    <input type="number" 
                    className="form-control" 
                    name="precio"
                    value={value.precio}
                    onChange={(e)=>{actualizarInput(e)}}></input>
                </div>
                <div>
                    <label>Stock</label>
                    <input type="number" 
                    className="form-control" 
                    name="stock"
                    value={value.stock}
                    onChange={(e)=>{actualizarInput(e)}}></input>
                </div>
                <div>
                    <label>Colores</label>
                    <input type="color" 
                    className="form-control"
                    ref={inputColor}></input>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={(e)=>{anadirColor(e)}}>Agregar Color
                        </button>


                <div className="list-group">
                    {value.colores.map((color,i)=>(
                        <div className="list-group-item list-group-item-sm" key={i}>
                            Color:<span style={{width:"50px",height:"30px", backgroundColor:`${color}`}}>{color}</span>
                        </div>
                    ))}
                </div>
                </div>

                <div>
                    <label>Fotos</label>
                    <input type="file"
                    ref={inputFotos}
                    className="form-control"
                    onChange={(e)=>{manejarImagen(e)}}
                    multiple/>
                    <button className="btn btn-primary btn-sm" onClick={(e)=>{anadirFoto(e)}}>Añadir Foto</button>
                    <ul className="list-group">
                        {value.fotos.map((fotito,i)=>(
                            <li className="list-group-item" key={i}>{fotito} </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-3">
                    <labell className="form-label">
                        Categoria
                    </labell>
                    <select 
                    className="form-control"
                    name="id_categoria"
                    value={value.id_categoria}
                    onChange={(e)=>{actualizarInput(e)}}>
                        {categorias.map((cat,i)=>(
                            <option key={i} value={cat.id}>{cat.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                            Guardar
                    </button>

                </div>


            </form>
        </div>
    )
}

export default FormProductos
