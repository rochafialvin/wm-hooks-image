// untuk dapat mengakses data dari context, gunakan useContext
import React, {useContext} from 'react'

// context
import { FavContext } from '../config/context/FavContext'

const Favorites = () => {

   // favorites = []
   const {favorites} = useContext(FavContext)

   return (
      <div>
         <h1>We have {favorites.length} images</h1>
      </div>
   )
}

export default Favorites
