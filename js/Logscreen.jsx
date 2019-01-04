import React from 'react';
import decoration from '../images/decoration.png';

export default class LogScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log: ['Zaloguj', 'Zarejestruj'],
            navi: ['Start', 'O co chodzi?', 'O nas', 'Fundacje i organizacje', 'Kontakt'],
            action: "Zaloguj się"
        }
    }

    handleClick = (e) => {
        e.preventDefault;
        if (e.target.innerText === "Załóż konto") {
            e.target.classList.add('loginBorder');
            document.querySelector('#log').classList.remove('loginBorder');
            this.setState({
                action: "Załóż konto"
            })
        }
        if (e.target.innerText === "Zaloguj się") {
            e.target.classList.add('loginBorder');
            document.querySelector('#register').classList.remove('loginBorder');
            this.setState({
                action: "Zaloguj się"
            })
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
                                <button onClick={this.handleClick} id="register">Załóż konto</button>
                                <button onClick={this.handleClick} id="log" className="loginBorder">Zaloguj się</button>
                            </div>
                        </form>
                    </div>

                </div>
            
            
            </header>
        )
        
    }
}