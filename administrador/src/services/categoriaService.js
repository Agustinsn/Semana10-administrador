import axios from "axios"

const url=`${process.env.REACT_APP_URL_API}/categoria`

const crearCategoria= async (nuevaCategoria)=>{
    try {
        let headers={
            "Content-Type":"application/json"
        }
        let {data} = await axios.post(url,nuevaCategoria,{headers})
        return data
    } catch (error) {
        throw error
    }
}

const obtenerCategoria= async ()=>{
    try {
        let {data}= await axios.get(url)
        return data
    } catch (error) {
        throw error
    }
}

export{
    crearCategoria,
    obtenerCategoria
}