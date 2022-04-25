const {useState} = require("react");

export const useForm = (initialState = {}) => {

    //todo Argumentos posicionales
    const [values, setValues] = useState(initialState);

    const reset = ()=> {
      setValues( initialState );
    }

    //todo creacion de objeto usando desestructuracion
    const handleInputChange = ({ target })=>{
        setValues({
           ...values,
           [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset];
}