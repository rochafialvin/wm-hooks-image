import React, {useState, useEffect} from 'react'
import axios from '../config/axios'

// components
import SearchBar from './SearchBar'
import ImageList from './ImageList'

const Home = () => {

   // membuat state menggunakan salah satu hook function
   // useState akan me-return array, kita akan langsung distcrut untuk menentukan nama
   // nama yang pertama akan digunakan untuk menyimpan state itu sendiri
   // nama yang kedua digunakan untuk sebuah function yang berguna untuk mengubah data state
   const [images, setImages] = useState([])

   // componentDidMount
   useEffect(()=> {
      onSearchImage()
   }, [])

   const onSearchImage = (keyword, amount) =>{
      // keyword : ''
      // amout : '24'
      const config = {
         params: {
            query: keyword ? keyword : "random",
            per_page : amount ? amount : 10
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


   return (
      <div className="mt-5" >
         {/* Search Bar memiliki property onSearchImage, akan ada di variable 'props' */}
         <SearchBar onSearchImage={onSearchImage} /> 
         {/* Image List memiliki property images, akan ada di variable 'props' */}
         <ImageList images={images} />
      </div>
   )
}

export default Home
