import React from 'react'

function FormCategoria({value,setValue,manejarSubmit}) {
    return (
        <div>
            <form
                onSubmit={(e)=>{manejarSubmit(e)}}>
                <div className="mb-3">
                    <label>Nombre categoria</label>
                    <input type="text" 
                    className="form-control"
                    value={value}
                    setValue={setValue}
                    onChange={(e)=>{setValue(e.target.value)}}/>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">
                        Guardar
                    </button>

                </div>
            </form>
        </div>
    )
}

export default FormCategoria
