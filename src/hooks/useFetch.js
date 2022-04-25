import {useEffect, useRef, useState} from "react";

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(()=>{
        return () => {
            isMounted.current = false;
        }
    },[])

    useEffect(()=>{

        setState({
            data: null,
            loading: true,
            error: null});

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(()=>{
                    //todo va con realExampleRef evita actual sobre el state de un componente que no esta montado
                    if(isMounted.current){
                        setState({
                            loading: false,
                            error: null,
                            //todo forma corta de eCmascript 6
                            data
                        })
                    }else{
                        console.log('Set state no se llamo');
                    }
                }, 2000);
            }).catch((error)=>{
            setState({
                    data: null,
                    loading: false,
                    error: 'Can´t connect with API'
                });
        });
    },[url]);
    return state;
}