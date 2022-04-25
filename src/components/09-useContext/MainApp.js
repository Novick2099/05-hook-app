import React, {useState} from 'react'
import { AppRouter } from './AppRouter'
import {Typography} from "@mui/material";
import {UserContext} from "./UserContext";

export const MainApp = () => {

  const [user, setUser] = useState({});

  const userInitialState = {
    id: 1234,
    name: 'Carlos',
    email: 'carlos@gmail.com',
  }
    return (
      /*Se guarda en el contexto usando esta notacion,
      lo que este siendo envuelto por el userContext compartira estado*/
      /*
      {user, setUser} es la forma corta de {user:user, setUser: setUser}
      * */
      <UserContext.Provider value={{
        user,
        setUser,
      } }>
        <Typography variant={"h1"}>Main App No debe cambiar</Typography>
        <AppRouter/>
      </UserContext.Provider>
    )
}
