import React from "react";
import decoration from '../images/decoration.png';

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
                        
                        
                        </form>    
                    
                    </div>
                
                </div>
            
            </footer>
        )
    }
}