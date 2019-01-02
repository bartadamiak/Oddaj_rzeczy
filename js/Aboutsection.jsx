import React from 'react';
import decoration from '../images/decoration.png';
import about from '../images/about.jpg';

export default class AboutSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <section className='aboutSection'>
                <div className='aboutSectionText'><p>O nas</p><img src={decoration}></img><p>Lorem lorem lorem lorem lorem lorem lorem lorem loremLorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p></div>
                <div className="aboutSectionPicture"><img src={about}></img></div>
            
            
            
            </section>
        )
    }
}