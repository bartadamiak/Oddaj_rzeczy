import React from "react";
import decoration from '../images/decoration.png';
import {Link} from 'react-router-dom';
 

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log: ['Zaloguj', 'Zarejestruj'],
            navi: ['Start', 'O co chodzi?', 'O nas', 'Fundacje i organizacje', 'Kontakt'],
        }
    }

    handleClick = (e) => {
        if (e.target.innerText === "O co chodzi?") {
            window.scrollBy(0, 750);
        }
        if (e.target.innerText === "O nas") {
            window.scrollBy(0, 1450)
        }
        if (e.target.innerText === "Fundacje i organizacje") {
            window.scrollBy(0, 1950)
        }
        if (e.target.innerText === "Kontakt") {
            window.scrollBy(0, 2700)
        }
    }

    render(){

        let logMap = this.state.log.map((e,i) => {
            return <li key={i}><Link to="/login">{e}</Link></li>
        })

        let naviMap = this.state.navi.map((e,i) => {
            return <li onClick={this.handleClick} key={i}>{e}</li>
        })
        
        return (
            <header className="header">
                <div className="headerMain container">
                    <ul className="headerLog">
                        {logMap}
                    </ul>
                    <ul className="headerNavi">
                        {naviMap}
                    </ul>
                    <div className="headerMainElement">
                        <div className="headerMainTitle"><p>Zacznij Pomagać!</p> <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <img src={decoration}></img></div>
                        <div className="headerMainBoxes">
                            <div className="headerMainBox1"><p>oddaj</p><p>rzeczy</p></div>
                            <div className="headerMainBox2"><p>zorganizuj</p> <p>zbiórkę</p></div>
                        
                        
                        </div>

                    
                    
                    </div>

                </div>
            
            
            </header>
        )
        
    }
}

