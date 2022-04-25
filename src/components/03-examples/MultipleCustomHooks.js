import {useFetch} from "../../hooks/useFetch";
import {useCounter} from "../../hooks/useCounter";
import {Button} from "@material-ui/core";

const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    //todo !niega el null  a true y si se vuelve a negar regresara false
    const {author, quote} = !!data && data[0];
    

    return (
        <>
            <div>
                <h1>Breaking bdas Quotes</h1>
                <p>Counter{counter}</p>
            </div>
            { loading
                ?
                (<div data-id={"alert"}>
                    Loading..
                </div>) :
                (<div>
                        <p data-id={"author"}>{author}</p>
                        <p data-id={"quote"}>{quote}</p>
                </div>
                )
            }
            <Button onClick={increment}>
                Siguiente
            </Button>
        </>

    );
};

export default MultipleCustomHooks;
