import React from 'react';
import decoration from '../images/decoration.png';
import {Link} from 'react-router-dom';

export default class LogScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log: ['Zaloguj', 'Zarejestruj'],
            navi: ['Start', 'O co chodzi?', 'O nas', 'Fundacje i organizacje', 'Kontakt'],
            action: "Zaloguj się"
        }
    }

    

    render(){

        let logMap = this.state.log.map((e,i) => {
            return <li key={i}>{e}</li>
        })

        let naviMap = this.state.navi.map((e,i) => {
            return <li onClick={this.handleClick} key={i}>{e}</li>
        })
        
        return (
            <header className="headerLogin">
                <div className="headerLoginMain container">
                    <ul className="headerLoginLog">
                        {logMap}
                    </ul>
                    <ul className="headerLoginNavi">
                        {naviMap}
                    </ul>
                    <div className='headerLoginTitle'>
                        <div className='headerLoginTitleText'>{this.state.action}</div>
                        <img src={decoration}></img>
                        <form className="headerLoginForm">
                            <input type="email" id="email" placeholder="@"></input>
                            <input type="password" id="password" placeholder="Hasło"></input>
                            <div className="remind">Przypomnij hasło</div>
                            <div className="buttons">
                                <button id="register"><Link onClick={this.handleClick} to="/oddaj">Załóż konto</Link></button>
                                <button id="log" className="loginBorder"><Link onClick={this.handleClick} to="/oddaj">Zaloguj się</Link></button>
                            </div>
                        </form>
                    </div>

                </div>
            
            
            </header>
        )
        
    }
}