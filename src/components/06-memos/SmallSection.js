import React, {useEffect} from 'react';

//todo diferencia entre use memo y React.memo sobre componente
const SmallComponent = React.memo(({value}) => {

    console.log('Me volvi a llamar :(');

    return (
        <small>{value}</small>
    );
}
);

export default SmallComponent;
