import React, { Component } from "react";

export const CharComponent = (props) => {
    

    return (<div onClick={() => props.removeChar(props.character)}>{props.character}</div>);
}

