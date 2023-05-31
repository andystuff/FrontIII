// eslint-disable-next-line no-unused-vars
import React from "react"

function Saludo ({nombre, children}) {
    return(
        <>
        <p>Hola {nombre}</p>
        <p>{children}</p>
        </>
        
    )
    
}
export default Saludo