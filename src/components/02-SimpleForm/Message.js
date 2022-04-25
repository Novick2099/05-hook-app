import React, {useEffect, useState} from 'react';

const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});
    const {x,y} = coords;


    useEffect(()=>{
        console.log('Component has beed mounted');
        //Trabajar con listeners dentro de un use Effect para prevenir que se creen muchos listeners
        //cada que se monta o desmonta el componente
        const mouseMove = (e) =>{
            const coords = {x: e.x, y: e.y};
            setCoords(coords);
            console.log(coords);
        }

        window.addEventListener('mousemove', mouseMove);


        return ()=>{
            console.log('Component has been unmounted');
            window.removeEventListener('mousemove', mouseMove)
        },[]
    });

    return (
        <div>
            <h3>Coordenadas</h3>
            <p>
                x: { x } y: { y }
            </p>

        </div>
    );
};

export default Message;
