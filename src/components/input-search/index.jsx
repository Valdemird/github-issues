import React, { useState, useEffect } from 'react';

const InputSearch = ({typing,autoComplete}) => {
    const [text, setText] = useState("");

    useEffect(() => {
        typing(text)
    }, [text,typing])

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)}></input>
            <h1>{autoComplete}</h1>
        </div>
        
    )
}
export default InputSearch;