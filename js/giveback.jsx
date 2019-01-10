import React from 'react';
import HeaderGB from './partialsGB/HeaderGB.jsx';
import Footer from './partialsMain/Footer.jsx';
import MainFormGB from './partialsGB/MainformGB.jsx';



export default class GiveBack extends React.Component {
    constructor(props) {
      
        super(props)
    }
    render(){
        return (
            <>
                <HeaderGB name="Czesław"/>
                <MainFormGB/>
                <Footer/>
            
            </>
            
        )
    }
}