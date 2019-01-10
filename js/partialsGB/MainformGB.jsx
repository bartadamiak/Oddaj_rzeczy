import React from 'react';
import decoration from '../../images/decoration.png';


class MainFormGB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmButton: "Dalej",
            steps: 1,
            cities: ["Poznań", "Warszawa", "Białystok", "Wrocław", "Rzeszów", "Kraków", "Gdańsk", "Szczecin", "Lublin", "Zielona Góra"],
            who: ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym"],
            forChildren: ["Fundacja dla dzieci", "Związek harcerstwa", "Stowarzyszenie wspierające rozwój rodzin wielodzietnych", "Zbiórka odzieży dziecięcej"],
            forHomeless: 'Fundacja Bez domu',
            forInvalids: 'Towarzystwo Ponad Podziałami',
            forOldPeople: ["Fundacja dbam o zdrowie", 'Zbiórka na rzecz osób samotnych'],
            yellowInfo: "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu je przekazać",
            street: "",
            city: "",
            code: "",
            phone: "",
            date: "",
            time: "",
            message: "",
            bags: "",
            fundationName: "",

            
          };
        
    }



    

    handleClick = (e) => {
        e.preventDefault();
        e.target.parentElement.classList.add('hidden');
        e.target.parentElement.nextSibling.classList.remove('hidden');
        
        this.setState({
            steps: this.state.steps + 1
        })
        if (this.state.steps == 1) {
            this.setState({
                yellowInfo: "Wszystkie rzeczy do oddania zapakuj w 60 l worki. Dokładną instrukcję jak spakować worki znajdziesz tutaj"
            })
        };
        if (this.state.steps == 2) {
            this.setState({
                yellowInfo: "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy"
            })
        };
        if (this.state.steps == 3) {
            this.setState({
                yellowInfo: "Podaj adres oraz termin odbioru rzeczy",
                
                
            })
        };
        if (this.state.steps == 4) {
            document.querySelector('.mainFormGBSteps').classList.add('hidden');
            this.setState({
                yellowInfo: "Podaj adres oraz termin odbioru rzeczy",
                street: document.querySelector('#street').value,
                city: document.querySelector('#city').value,
                code: document.querySelector('#code').value,
                phone: document.querySelector('#phone').value,
                date: document.querySelector('#date').value,
                time: document.querySelector('#time').value,
                message: document.querySelector('#message').value,
                
                
            })
        }
        
        
    }

    handlePrevClick = (e) => {
        e.preventDefault();
        e.target.parentElement.classList.add('hidden');
        e.target.parentElement.previousSibling.classList.remove('hidden');
        this.setState({
            steps: this.state.steps - 1
        });
        if (this.state.steps == 1) {
            this.setState({
                yellowInfo: "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu je przekazać"
            })
        };
        if (this.state.steps == 2) {
            this.setState({
                yellowInfo: "Wszystkie rzeczy do oddania zapakuj w 60 l worki. Dokładną instrukcję jak spakować worki znajdziesz tutaj"
            })
        };
        if (this.state.steps == 3) {
            this.setState({
                yellowInfo: "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy"
            });
            document.querySelector('.mainFormGBSteps').classList.remove('hidden')
        };
        if (this.state.steps == 4) {
            this.setState({
                yellowInfo: "Podaj adres oraz termin odbioru rzeczy"
            });
            
        };
    }

    boxesClick = (e) => {
        e.target.classList.toggle('yellowBox');
        e.target.classList.add('clicked');
        
    }

    handlePrevClick3b =(e) => {
        e.preventDefault();
        e.target.parentElement.classList.add('hidden');
        e.target.parentElement.previousSibling.classList.remove('hidden');
        this.setState({
            yellowInfo: "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy"
        })
        
    }

    handleSearchClick = (e) => {
        e.preventDefault();
        if (document.querySelector('.clicked').innerText === "dzieciom") {
            document.querySelector('.children').parentElement.classList.remove('hidden');
            };
        if (document.querySelector('.clicked').innerText === "bezdomnym") {
            document.querySelector('.homeless').parentElement.classList.remove('hidden');
            }
        if (document.querySelector('.clicked').innerText === "samotnym matkom") {
            document.querySelector('.children').parentElement.classList.remove('hidden');
        }
        if (document.querySelector('.clicked').innerText === "niepełnosprawnym") {
            document.querySelector('.invalids').parentElement.classList.remove('hidden');
        }
        if (document.querySelector('.clicked').innerText === "samotnym matkom") {
            document.querySelector('.children').parentElement.classList.remove('hidden');
        }
        if (document.querySelector('.clicked').innerText === "osobom starszym") {
            document.querySelector('.old').parentElement.classList.remove('hidden');
        }
        this.setState({
            yellowInfo: "Na podstawie Twoich kryteriów oraz rzeczy, które masz do oddania wybraliśmy organizacje, którym możesz pomóc. Wybierz jedną, do której trafi Twoja przesyłka"
        })

        e.target.parentElement.classList.add('hidden');
        e.target.parentElement.nextSibling.classList.remove('hidden');
    }

    

    render() { 
        
        let citiesMap = this.state.cities.map((e,i) => {
            return <option key={i}>{e}</option>
        });

        let whoMap = this.state.who.map((e,i) => {
            return <div onClick={this.boxesClick} className="whoBoxes" key={i}>{e}</div>
        });

        let childrenMap = this.state.forChildren.map((e,i) => {
            return <div className='children' key={i}><input type="checkbox" name="children" id="children"/>{e}</div>
        });
        let oldMap = this.state.forOldPeople.map((e,i) => {
            return <div className="old" key={i}><input type="checkbox" name="old" id="old"/>{e}</div>
        });

        

        
        
        return ( 
            <>
            <section className="firstSectionGB">
                    <div className="firstSectionGBText">
                        <div className="important">ważne!</div>
                        <div className="about">{this.state.yellowInfo}</div>
                    
                    
                    </div>
            </section>


            <div className="mainFormGB">
                
                <div className="mainFormGBSteps">Krok {this.state.steps}/4</div>
                <form action="" className="mainFormGBForm">
                    <div className="mainFormGBForm1">
                    <div className="mainFormGBTitle">Zaznacz co chcesz oddać:</div>
                        <div><input type="checkbox" name="clothes" id="clothes"/><label htmlFor="clothes">Ubrania, które nadają się do ponownego użycia</label></div>
                        <div><input type="checkbox" name="clothesToRemove" id="clothesToRemove"/><label htmlFor="clothesToRemove">Ubrania do wyrzucenia</label></div>
                        <div><input type="checkbox" name="toys" id="toys"/><label htmlFor="toys">Zabawki</label></div>
                        <div><input type="checkbox" name="books" id="books"/><label htmlFor="books">Książki</label></div>
                        <div><input type="checkbox" name="others" id="others"/><label htmlFor="others">Inne</label></div>
                        <button onClick={this.handleClick} className="mainFormGBBtn">{this.state.confirmButton}</button>
                    </div>
                    <div className='mainFormGBForm2 hidden'>
                    <div className="mainFormGBTitle">Podaj liczbę 60 l worków, w które spakowałeś/aś rzeczy:</div>
                        <label htmlFor="number">Liczba 60 l worków: </label>
                        <select name="number" id="number">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                        <option value="">więcej</option>
                    
                        </select>

                    
                        <button onClick={this.handlePrevClick} className="mainFormGBPrev">Wstecz</button>
                        <button onClick={this.handleClick} className="mainFormGBBtn">{this.state.confirmButton}</button>

                    </div>
                    <div className="mainFormGBForm3 hidden">
                        <div className="mainFormGBTitle">Lokalizacja:</div>
                        <select name="location" id="location">
                            {citiesMap}
                        </select>
                        <div className="mainFormGBTitle2">Komu chcesz pomóc?</div>
                        <div className="mainFormGBForm3Who">
                            {whoMap}
                        </div>
                        <div className="mainFormGBTitle2">Wpisz nazwę organizacji (opcjonalnie)</div>
                        <input type="text" id="nameOfOrganization"/>


                    <button onClick={this.handlePrevClick} className="mainFormGBPrev">Wstecz</button>
                    <button onClick={this.handleSearchClick} className="mainFormGBBtn">Szukaj</button>
                
                
                </div>
                <div className="mainFormGBForm3b hidden">
                    <div className="mainFormGBTitle">Wybierz organizację, której chcesz pomóc:</div>
                    <div className="mainFormGBForm3list">
                        <div className="hidden">
                            {childrenMap}
                        </div>
                        <div className="hidden">
                            <div className="homeless"><input type="checkbox" name="homeless" id="homeless"/>{this.state.forHomeless}</div>
                        </div>
                        <div className="hidden">
                            <div className="invalids"><input type="checkbox" name="invalids" id="invalids"/>{this.state.forInvalids}</div>
                        </div>
                        <div className="hidden">
                            {oldMap}
                        </div>
                    </div>
                        <button onClick={this.handlePrevClick3b} className="mainFormGBPrev">Wstecz</button>
                        <button onClick={this.handleClick} className="mainFormGBBtn">{this.state.confirmButton}</button>
                
                </div>

                <div className="formGBForm4 hidden">
                    <div className="mainFormGBTitle">Podaj adres oraz termin odbioru rzeczy przez kuriera</div>
                    <div className="mainFormGBForm4Box">
                        <div className="formBox1">
                            <div className="formBoxTitle">Adres odbioru</div>
                            <div><label htmlFor="street">Ulica</label><input type="text" id="street"/></div>
                            <div><label htmlFor="city">Miasto</label><input type="text" id="city"/></div>
                            <div><label htmlFor="code">Kod pocztowy</label><input type="text" id="code"/></div>
                            <div><label htmlFor="phone">Numer telefonu</label><input type="text" id="phone"/></div>

                        
                        </div>
                        <div className="formBox2">
                            <div className="formBoxTitle">Termin odbioru</div>
                            <div><label htmlFor="date">Data</label><input type="text" id="date"/></div>
                            <div><label htmlFor="time">Godzina</label><input type="text" id="time"/></div>
                            <div><label htmlFor="message">Uwagi dla kuriera</label><input type="text" id="message"/></div>
                        
                        </div>
                    
                    
                    
                    </div>
                    
                    <button onClick={this.handlePrevClick} className="mainFormGBPrev">Wstecz</button>
                    <button onClick={this.handleClick} className="mainFormGBBtn">{this.state.confirmButton}</button>

                
                </div>
                <div className="formGBFormSummary hidden">
                    <div className="mainFormGBTitle">Podsumowanie Twojej darowizny</div>
                    <div className="formBoxTitle">Oddajesz:</div>
                    <div><i class="fas fa-hand-holding-heart fa-2x"></i><div></div></div>
                    <div className="mainFormGBForm4Box">
                        <div className="formBox1">
                            <div className="formBoxTitle">Adres odbioru</div>
                            <div><label htmlFor="street">Ulica</label><div id="streetSum">{this.state.street}</div></div>
                            <div><label htmlFor="city">Miasto</label><div id="citySum">{this.state.city}</div></div>
                            <div><label htmlFor="code">Kod pocztowy</label><div id="codeSum">{this.state.code}</div></div>
                            <div><label htmlFor="phone">Numer telefonu</label><div id="phoneSum">{this.state.phone}</div></div>

                        
                        </div>
                        <div className="formBox2">
                            <div className="formBoxTitle">Termin odbioru</div>
                            <div><label htmlFor="date">Data</label><div id="dateSum">{this.state.date}</div></div>
                            <div><label htmlFor="time">Godzina</label><div id="timeSum">{this.state.time}</div></div>
                            <div><label htmlFor="message">Uwagi dla kuriera</label><div id="messageSum">{this.state.message}</div></div>
                        
                        </div>
                    
                    
                    
                    </div>
                    
                    <button onClick={this.handlePrevClick} className="mainFormGBPrev">Wstecz</button>
                    <button onClick={this.handleClick} className="mainFormGBBtn">Potwierdź</button>

                
                </div>

                <div className="thanks hidden">
                    <div className="thanksMain">
                        <div className="thanksText">Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze</div>
                        <img src={decoration} alt=""/>
                    </div>
                </div>
                
                </form>
                
               


            </div>
            </>
         );
    }
}
 
export default MainFormGB;