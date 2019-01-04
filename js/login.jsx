import React from 'react';
import ReactDOM from 'react-dom';
import decoration from '../images/decoration.png';
import LogScreen from './Logscreen.jsx'




export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
            <LogScreen/>
            </>
        )
    }
}