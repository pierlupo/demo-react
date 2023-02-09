import { Component } from "react";
import "./component.css";

//la bonne pratique est de nommer les fonctions en PascalCase:
export function FirstComponent(){
    return (
        <header>
            <h3>Mon premier component React</h3>
        </header>
    )
} 

export const SecondComponent = () => {
    return (
    <div>
    <h4> Mon second component React</h4>
    </div>
    )
}

class ThirdComponent extends Component {
    constructor(props){
        super(props)
        this.state = {message : props.monprops}
    }

    render(){
        return (
            <div>
            <h5> Mon troisième component React</h5>
            <h5> Message: {this.state.message}</h5>
            </div>
        )
    }
}

export default ThirdComponent

export function FourthComponent (props) {
   
        return (
            <div>
            <h5>{props.message}</h5>
            </div>
        )
    
}

export function FifthComponent({message}){
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}


export function SixthComponent(props){
    console.log(props)
    return (
        <div>
            <h1>{props.children}</h1>
        </div>
    )
}

export class SeventhComponent extends Component {
    constructor(props){
        super(props)
        this.state = {message : ["Bonjour","merci","au revoir"]}
    }

    render(){
        return (
            <div>
            <h2> le septième component React avec une copie du state via le .map() </h2>
            {this.state.message.map((m,i) => (<EighthComponent key={i} message={m}></EighthComponent>))}
            </div>
        )
    }
}

function EighthComponent(props) {

    return ( <h2 className = "component"> {props.message} </h2> )
}