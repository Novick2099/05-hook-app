import React, {useContext} from 'react'
import {UserContext} from "./UserContext";
import {Button} from "@mui/material";


export const LoginScreen = () => {

  // 1 obtener la referencia al context
  // 2 set User
  // crear un boton para llamar la funcion set User

  const testUser = {
    id: 123,
    name: 'Carlos',
    email: 'carlos@gmail.com'
  }

  const {user: userInContext, setUser: setUserInContext} = useContext(UserContext);



  const handleSetUser = ()=> {
    setUserInContext(testUser)
  }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
          <Button id={"set_user"} onClick={handleSetUser} variant="outlined" color="primary">
            Set User
          </Button>
        </div>
    )
}
