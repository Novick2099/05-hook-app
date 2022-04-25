

export const todoReducer = (state = [], action) => {
    switch ( action.type ) {
        case 'add':
            return [...state, action.payload]
            //todo no hace falta el break cuando se hace un return
        case 'delete':
            return state.filter( todo => todo.id !== action.payload );
        case 'toggle-old':
            return state.map( todo =>{
                if(todo.id === action.payload)
                return{
                    ...todo,
                      done: !todo.done,
                }
                return todo;
            })
        case 'toggle':
            //todo cuando en una funcion de flecha no se apunta a {} es un return implicito
            return state.map((todo)=>
              //todo se hizo mas corto usando un operador ternario
              (todo.id === action.payload) ?
                {...todo,
                    done: !todo.done
                }
                :todo);
        default:
            return state;
    }
}

