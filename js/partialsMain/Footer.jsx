import React from "react";
import decoration from '../../images/decoration.png'


export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className="footer">
                <div className='footerEmpty'></div>
                <div className='footerText'>
                    <div className='footerTextTitle'>Skontaktuj się z nami</div>
                    <img src={decoration}></img>
                    <div className='footerTextForm'>
                        <form className='form'>
                            <div className="formTitle">Formularz kontaktowy</div>
                            <div className="formFirstLine">
                                <input id="name" type="text" placeholder="Imię"/>
                                <input id="email" type="email" placeholder="@"/>
                            </div>
                            <input id="message" type="text" placeholder="Wiadomość"/>
                            <button>Wyślij</button>
                        
                        </form>    
                    
                    </div>
                
                </div>
            
            </footer>
        )
    }
}