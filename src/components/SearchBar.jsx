import React, { useState } from 'react'

function SearchBar() {

   const [text, setText] = useState('Kamis')

   return(
      <div>
         {/* Memunculkan alert text */}
         <button onClick={() => { alert(text) }} >Munculkan text</button>

         {/* Mengubah isi dari text */}
         <button onClick={() => { setText('Sudah diubah')  }} >Mungubah text</button>
      </div>
   )
}

export default SearchBar;