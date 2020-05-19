import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import Home from './Home'
import Favorites from './Favorites'
import Header from './Header'

// theory
import BasicUseEffect from '../theory/BasicUseEffect'
import BasicUseState from '../theory/BasicUseState'

// Context
import FavContextProvider from '../config/context/FavContext'

function App() {

   return(
      <BrowserRouter>
         <Header/>
         <div className="container" >
            {/* apit components yang ingin diberi akses ke context */}
            <FavContextProvider>
               <Route path='/' exact component={Home}  />
               <Route path='/favorites' component={Favorites}  />
            </FavContextProvider>
            <Route path='/theory' component={BasicUseState}  />
         </div>
      </BrowserRouter>
   )
}

export default App;

