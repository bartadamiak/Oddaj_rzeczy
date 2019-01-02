import React from 'react';
import ReactDOM from 'react-dom';


export default class LogScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log: ['Zaloguj', 'Zarejestruj'],
            navi: ['Start', 'O co chodzi?', 'O nas', 'Fundacje i organizacje', 'Kontakt'],
        }
    }
    render() {
        return (
        <>
        <div>Ekran logowania</div>
        </>
        )
    }
}

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