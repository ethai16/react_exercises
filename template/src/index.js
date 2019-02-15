import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'



ReactDOM.render(

    <BrowserRouter>
        <BaseLayout>
            <Switch>
                
                <Route exact path="/" component={App}/>

            </Switch>
        </BaseLayout>
    </BrowserRouter>
    
    
    , document.getElementById('root'));


