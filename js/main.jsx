import React from 'react';
import Header from './partialsMain/Header.jsx';
import FirstSection from './partialsMain/Firstsection.jsx';
import SecondSection from './partialsMain/Secondsection.jsx';
import AboutSection from './partialsMain/Aboutsection.jsx';
import AboutNextSection from './partialsMain/Aboutnextsection.jsx';
import Footer from './partialsMain/Footer.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <AboutSection/>
            <AboutNextSection/>
            <Footer/>
            </>
        )
    }
}