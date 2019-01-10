import React from "react";
import decoration from '../../images/decoration.png';


export default class AboutNextSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfFundation: ["Fundacja 'Dbam o zdrowie'", "Fundacja 'Dla dzieci'", "Fundacja'Bez domu'"],
            nameOfOrganization: ["'Stowarzyszenie wspierające rozwój rodzin wielodzietnych'", "'Towarzystwo Ponad Podziałami'", "'Związek harcerstwa'"],
            nameOfCollection: ["Zbiórka odzieży dziecięcej", "Zbiórka na rzecz zwierząt", "Zbiórka na rzecz osób samotnych"],
            descriptionFundation: ["Pomoc osobom znajdującym się w trudnej sytuacji życiowej", "Pomoc dzieciom z ubogich rodzin", "Pomoc dla osób nie posiadających miejsca zamieszkania"],
            descriptionOrganization: ["Pomoc rodzinom wielodzietnym", "Pomoc osobom niepełnosprawnym", "Organizacja obozów harcerskich"],
            descriptionCollection: ["Pomoc dzieciom z ubogich rodzin", "Pomoc zwierzętom przebywającym w schroniskach", "Pomoc osobom samotnym"],
            fundationAbout: ["ubrania, jedzenie, sprzęt, agd, zabawki", "ubrania, meble, zabwaki", "ubrania, jedzenie, ciepłe koce"],
            choice: ["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"],
            

        }
    }

    handleClick = (e) => {
        e.target.classList.add('borderOfChoice');
        
        

        if (e.target.innerText === "Fundacjom") {
            document.querySelector('.fundations').classList.remove('hidden');
            document.querySelector('.organizations').classList.add('hidden');
            document.querySelector('.collections').classList.add('hidden');
            document.querySelector('.fundationsAbout').classList.remove('hidden');
            
            
            
            }
        if (e.target.innerText === "Organizacjom pozarządowym") {
            document.querySelector('.organizations').classList.remove('hidden');
            document.querySelector('.fundations').classList.add('hidden');
            document.querySelector('.collections').classList.add('hidden');
            document.queryselector('.fundationAbout').classList.remove('hidden');
            
            
        }
        if (e.target.innerText === "Lokalnym zbiórkom") {
            document.querySelector('.collections').classList.remove('hidden');
            document.querySelector('.organizations').classList.add('hidden');
            document.querySelector('.fundations').classList.add('hidden');
            document.querySelector('.fundationsAbout').classList.remove('hidden');
           

        }    
        
    }

    render(){

        let fundationMap = this.state.nameOfFundation.map((e,i) => {
            let descriptionFundationMap = this.state.descriptionFundation.map((e,i) => {
                return <div className="fundationDescription" key={i}>Cel i misja: {e}</div>
            })
            return <div className="listOf" key={i}>
                        <div className="fundationList">{e}</div> {descriptionFundationMap[i]}
                    </div>
        } )

        let aboutMap = this.state.fundationAbout.map((e,i) => {
            return <div key={i}>{e}</div>
        });

        let choiceMap = this.state.choice.map((e,i) => {
            return <div onClick={this.handleClick} className="choicesList" key={i}>{e}</div>
        });

        let organizationMap = this.state.nameOfOrganization.map((e,i) => {
            let descriptionOrganizationMap = this.state.descriptionOrganization.map((e,i) => {
                return <div className="organizationDescription" key={i}>Cel i misja: {e}</div>
            })
            return <div className="listOf" key={i}>
                        <div className="organizationList">{e}</div> {descriptionOrganizationMap[i]}
                    </div>
        } )

        let collectionMap = this.state.nameOfCollection.map((e,i) => {
            let descriptionCollectionMap = this.state.descriptionCollection.map((e,i) => {
                return <div className="collectionDescription" key={i}>Cel i misja: {e}</div>
            })
            return <div className="listOf" key={i}>
                        <div className="collectionList">{e}</div> {descriptionCollectionMap[i]}
                    </div>
        } )

        


        return(
            <section className='aboutNextSection'>
                <div className='aboutNextSectionTitle'><p>Komu pomagamy?</p><img src={decoration}></img>
                    <div className='aboutNextSectionTitleChoice'>
                        {choiceMap}
                    </div>
                    <div className='aboutNextSectionTitleAbout'>
                        W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy.
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    
                    
                    </div>     
                </div>
                <div className='aboutNextSectionTitleFundations'>
                    <div className="fundations">{fundationMap}</div>
                    <div className='hidden organizations'>{organizationMap}</div>
                    <div className="hidden collections">{collectionMap}</div>
                    <div className="fundationsAbout">{aboutMap}</div>
                    
                    
                </div>
            
            </section>
        )
    }
}