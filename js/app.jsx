import React from 'react';
import ReactDOM from 'react-dom';
import scss from '../css/style.scss';
import images from '../images/header_start_img.jpg';
import decoration from '../images/decoration.png';
import about from '../images/about.jpg';
import footer from '../images/footer.jpg';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    } from 'react-router-dom';

import Main from './main.jsx';
import Login from './login.jsx';










class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <HashRouter>
                    <div>
                    <Route exact path='/' component={Main} />
                    <Route path='/login' component={Login} />
                    
                    
                    </div>
            </HashRouter>                  

        )
    }
}







document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <>
        <App/>
    
        </>,
        document.getElementById('app')
    );
});

