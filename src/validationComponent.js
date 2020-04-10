import React, { Component } from "react";
import { CharComponent } from './charComponent';
import classes from './App.module.css';


export class Validation extends Component {
    jsxList = null;
    list = null;

    removeChar = (char) => {        
        console.log("Hey! Someone clicked" + char);
        const foundIndex = this.list.findIndex(c => c === char);
        console.log(foundIndex);
        this.list.splice(foundIndex, 1);
        this.props.updateChar(this.list.join(""));
    }

    render() {
            this.list = this.props.character.split("");
            this.jsxList = this.list.map((currChar, index) => {
                return (<div className={classes.inlineBox}><CharComponent key={index} character={currChar}  removeChar={this.removeChar}></CharComponent></div>);
            });
        
        return (<div>
            User typed charecter Length: {this.props.charlength} is {this.props.charlength < 5 ? 'Too Short' : 'Long Enough'}
            {this.jsxList}
        </div>);
    }
}