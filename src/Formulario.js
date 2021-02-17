import React from 'react';

const Formulario = (props) => {
    const{
        handleLogout,
        nombre,
        setNombre,
        apellido,
        setApellido,
        telefono,
        setTelefono,
        codigoPostal,
        setCodigoPostal,
        direccion, 
        setDireccion,
        handleSubmit

    }=props;

    return (
        <>
        <section className="hero">
            <nav>
                <h2>Juan Manuel Ruiz Fránquiz - Login y Cuestionario</h2>
                <button onClick={handleLogout}>Cerrar Sesión</button>
            </nav>

            <h2 className="nombreFormulario">Cuestionario</h2>
            <p></p>
    
                <label className="textoFormulario">Nombre*</label>
                <p></p>
                <input 
                className="inputFormulario"
                type="text" 
                autoFocus 
                required 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)}
            />

            <p></p>
    
                <label className="textoFormulario">Apellido*</label>
                <p></p>
                <input 
                    className="inputFormulario"
                    type="text" 
                    autoFocus 
                    required 
                    value={apellido} 
                    onChange={(e) => setApellido(e.target.value)}
                />

            <p></p>
    
                <label className="textoFormulario">Teléfono*</label>
                <p></p>
                <input 
                    className="inputFormulario"
                    type="text" 
                    autoFocus 
                    required 
                    value={telefono} 
                    onChange={(e) => setTelefono(e.target.value)}
                />
            <p></p>
    
                <label className="textoFormulario1">Código Postal*</label>
                <p></p>
                <input 
                    className="inputFormulario"
                    type="text" 
                    autoFocus 
                    required 
                    value={codigoPostal} 
                    onChange={(e) => setCodigoPostal(e.target.value)}
                />

            <p></p>
    
                <label className="textoFormulario">Dirección*</label>
                <p></p>
                <input
                    className="inputFormulario"
                    type="text" 
                    autoFocus 
                    required 
                    value={direccion} 
                    onChange={(e) => setDireccion(e.target.value)}

                />
            
            <div className=""> 
                <button className="botonFormulario" onClick={handleSubmit}>Enviar</button>  
            </div>

        </section>   

        
        </>
    )
}

export default Formulario;