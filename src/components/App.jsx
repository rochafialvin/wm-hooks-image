import React, { useState } from 'react'
import axios from '../config/axios'

// Components
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import BasicUseState from '../theory/BasicUseState'

function App() {

   // membuat state menggunakan salah satu hook function
   // useState akan me-return array, kita akan langsung distcrut untuk menentukan nama
   // nama yang pertama akan digunakan untuk menyimpan state itu sendiri
   // nama yang kedua digunakan untuk sebuah function yang berguna untuk mengubah data state
   const [images, setImages] = useState([])

   const onSearchImage = (keyword, amount) =>{

      const config = {
         params: {
            query: keyword,
            per_page : amount
         }
      }

      // mengambil foto ke unsplash sesuai dengan keyword
      // dapat menentukan jumlah gambar yang di dapat, dengan jumlah maksimal 30
      axios.get('/search/photos', config)
         //  Kalau berhasil mendapat data, disimpan ke state images
         .then(res => setImages(res.data.results))
         // Kalau gagal, munculkan object err di console
         .catch(err => console.log({err}))
   }

   return(
      // agar konten berada di tengah
      <div className="container" >
         <BasicUseState/>
         {/* <h1 className="text-center">HOOKS</h1> */}
         {/* Search Bar memiliki property onSearchImage, akan ada di variable 'props' */}
         {/* <SearchBar onSearchImage={onSearchImage} />  */}
         {/* Image List memiliki property images, akan ada di variable 'props' */}
         {/* <ImageList images={images} /> */}
      </div>
   )
}

export default App;