import React, {useRef} from 'react';
import {Button} from "@material-ui/core";

//todo hacer referencia a elementos HTML usando UseRef
const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input
                ref={inputRef}
                placeholder="placeHolder"/>
            <Button
            onClick={handleClick}>
                Focus
            </Button>
        </div>
    );
};

export default FocusScreen;
