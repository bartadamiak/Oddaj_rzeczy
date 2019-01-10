import React from 'react';
import decoration from '../../images/decoration.png'


export default class SecondSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <section className="secondSection">
                <div className="secondSectionMain">
                    <div className="secondSectionTitle">Wystarczą 4 proste kroki</div>
                    <img src={decoration}></img>
                    <div className="secondSectionSteps">
                        <div><i class="far fa-lightbulb fa-2x"></i><i class="fas fa-hands fa-2x"></i><p className="firstP">Wybierz rzeczy</p><p>Ubrania, zabawki, sprzęt i inne</p></div>
                        <div><i class="fas fa-arrow-down fa-4x"></i><p className='firstP'>Spakuj je</p><p>Skorzystaj z worków na śmieci</p></div>
                        <div><i class="fas fa-glasses fa-3x"></i><p className='firstP'>Zdecyduj komu chcesz pomagać</p><p>Wybierz zaufane miejsce</p></div>
                        <div><i class="fas fa-truck fa-4x"></i><p className='firstP'>Zamów kuriera</p><p>Kurier przybędzie w dogndnym terminie</p></div>
                        

                    
                    </div>
                    <button className="secondSectionButton">załóż konto</button>
                
                
                </div>
            


            
            </section>
        )
    }
}