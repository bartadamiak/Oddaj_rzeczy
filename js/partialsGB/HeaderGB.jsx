import React from 'react';
import decoration from '../../images/decoration.png';

class HeaderGB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Bartek',
            navi: ['Start', 'O co chodzi?', 'O nas', 'Fundacje i organizacje', 'Kontakt'],

          }
    }

    

    mouseEnter = (e) => {
        document.querySelector('.personalMenu').classList.remove('hidden');
        
    }

    mouseLeave = (e) => {
        document.querySelector('.personalMenu').classList.add('hidden');
    }

    render() { 

        let naviGBMap = this.state.navi.map((e,i) => {
            return <li key={i}>{e}</li>
        })

        return (
            <>
                <header className="headerGB">
                    <div className="headerGBMain container">
                        <div  className="headerGBLog">Witaj {this.props.name}<i onMouseOver={this.mouseEnter} class="fas fa-cog fa-2x"></i></div>
                        <ul className="headerGBNavi">{naviGBMap}</ul>
                        <div className="headerGBMainElement">
                            <div className="headerGBMainTitle"><p>Oddaj rzeczy, których już nie chcesz</p> <p>potrzebującym</p>
                            <img src={decoration}></img>
                        </div>
                        <div className="headerGBMainBoxesTitle">Wystarczą 4 proste kroki</div>
                        <div className="headerGBMainBoxes">
                            <div className="headerGBMainBox1"><p>1</p><p>Wybierz rzeczy</p></div>
                            <div className="headerGBMainBox2"><p>2</p> <p>Spakuj je w worki</p></div>
                            <div className="headerGBMainBox3"><p>3</p> <p>Wybierz fundację</p></div>
                            <div className="headerGBMainBox4"><p>4</p> <p>Zamów kuriera</p></div>
                        
                        
                        </div>

                    
                    
                    </div>
                    
                    
                    </div>

                    <div onMouseLeave={this.mouseLeave} className="hidden personalMenu">
                        <ul>
                            <li>Profil</li>
                            <li>Ustawienia</li>
                            <li>Moje zbiórki</li>
                            <li>Wyloguj</li>
                        </ul>
                    </div>
                
                
                </header>

            
            
            </>
          );
    }
}
 
export default HeaderGB;