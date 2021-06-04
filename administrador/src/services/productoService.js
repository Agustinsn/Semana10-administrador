import axios from "axios";
import fire,{storage} from "../config/Firebase"

const url = `${process.env.REACT_APP_URL_API}/productos`

const obtenerProductos = async () => {
  try {
    let { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
}

const crearProducto = async(nuevoProducto)=>{
    try {
        let headers={
            "Content-Type":"application/json"
        }
        //AWAIT AXIOS.POST (URL, NUEVORECURSO,HEADERS)
        let {data} = await axios.post(url,nuevoProducto,{headers})
        return data
        
    } catch (error) {
        throw error
        
    }
}
const editarProducto = async(productoEditado,id)=>{
  try {
    let headers={
      "Content-Type":"application/json"
   }
   let{data} =await axios.put(`${url}/${id}`,productoEditado,{headers})
    return data
    
  } catch (error) {
    console.log(error)
  }
}

const obtenerProductoPorId=async (id)=>{
  try {
    let {data} = await axios.get(`${url}/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const subirArchivo=(imagen)=>{
  return new Promise((resolve,reject)=>{
    let refStorage=storage.ref(`Fotos/${imagen.name}`)
    let tareaSubida=refStorage.put(imagen)
    tareaSubida.on("state_change",
    ()=>{},
    (error)=>{reject(error)},
    ()=>{
      tareaSubida.snapshot.ref.getDownloadURL()
      .then((urlImagen)=>{
        resolve(urlImagen)
      })
    }
    )
  })

}

export { 
    obtenerProductos,
    crearProducto,
    editarProducto,
    obtenerProductoPorId,
    subirArchivo
};
