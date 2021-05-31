import React from 'react'
import {Route} from "react-router-dom"
import CrearProductoView from "./views/CrearProductoView"
import EditarProductoView from './views/EditarProductoView'
import ListasProductosviews from './views/ListasProductosviews'
import CrearCategoriaView from './views/CrearCategoriaView'
import ListaCategoriaView from './views/ListaCategoriaView'

function Routes() {
    return (
        <div>
            <Route exact path="/" component={ListasProductosviews}/>
            <Route exact path="/crearProducto" component={CrearProductoView}/>
            {/*al darle en el path :algo indico que agarrare ese parametro*/}
            <Route exact path="/editarproducto/:id" component={EditarProductoView}/>
            <Route exact path="/crearcategoria" component={CrearCategoriaView}/>
            <Route exact path="/ListaCategoria" component={ListaCategoriaView}/>
        </div>
    )
}

export default Routes
