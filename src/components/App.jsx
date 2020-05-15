import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import Home from './Home'
import Favorites from './Favorites'
import Header from './Header'
import BasicUseEffect from '../theory/BasicUseEffect'

function App() {

   return(
      <BrowserRouter>
         <Header/>
         <div className="container" >
            <Route path='/' exact component={Home}  />
            <Route path='/favorites' component={Favorites}  />
            <Route path='/theory' component={BasicUseEffect}  />
         </div>
      </BrowserRouter>
   )
}

export default App;

