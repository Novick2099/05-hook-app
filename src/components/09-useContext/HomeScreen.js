import React, {useContext} from 'react'
import {UserContext} from "./UserContext";



export const HomeScreen = () => {

//todo renombrar en desestructuracion
// todo Buscar la instancia dentro del arbol de componentes que sea de tipo UserContext
  const { user: usuario } = useContext( UserContext );

  console.log(usuario);

  return (
        <div>
            <h1>Home Screen</h1>
            <hr/>
          <p>
            {JSON.stringify( usuario, null, 3 )}
          </p>
        </div>
    )
}
