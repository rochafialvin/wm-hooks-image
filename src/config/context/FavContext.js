import React, { createContext, useReducer } from 'react'

// variable context
export const FavContext = createContext()

// reducer context
const FavReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_FAV':
         return [...state, action.payload]
         
      default:
         return state
         
   }
}

// component context
const FavContextProvider = (props) => {

   // useReducer( nama_reducer, nilai_init )
   // useReducer return sebuah array, array tersebut berisi dua hal :
   // 1. variable state tempat data disimpan
   // 2. function untuk mengirim object (dispatch)
   const [favorites, dispatch] = useReducer(FavReducer, [
      {id: 1, user: 'James', views : 2300, likes : 1345 },
      {id: 2, user: 'Erick', views : 250, likes : 1576 }
   ])

   return (
      <FavContext.Provider value={{dispatch, favorites}}>
         {props.children}
      </FavContext.Provider>
   )
}

// untuk mengapit komponen yang akan diberi akses
export default FavContextProvider

