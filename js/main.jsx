import React from 'react';
import Header from './Header.jsx';
import FirstSection from './Firstsection.jsx';
import SecondSection from './Secondsection.jsx';
import AboutSection from './Aboutsection.jsx';
import AboutNextSection from './Aboutnextsection.jsx';
import Footer from './Footer.jsx';

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