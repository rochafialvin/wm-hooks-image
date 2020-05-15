import React, {useState, useRef} from 'react'

const BasicUseState = () => {

   // membuat state menggunakan salah satu hook function
   // useState akan me-return array, array tersebut akan langsung distruct untuk menentukan dua variable
   // variable yang pertama akan digunakan untuk menyimpan state itu sendiri
   // variable yang kedua digunakan untuk sebuah function yang berguna untuk mengubah data di state
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')

   // state dapat berupa object
   // setName akan me replace object yang tersimpan
   // maka dari itu harus menggunakan metode distruct agar data lama tidak hilang (...name)
   const [name, setName] = useState({ firstName: '', lastName : ''})

   // state dapat berupa array
   // setSongs akan me replace array yang tersimpan
   // maka dari itu harus menggunakan metode distruct agar data lama tidak hilang (...songs)
   const [songs, setSongs] = useState([
      {title: 'Heal the world', artist: 'Michael Jackson'},
      {title: 'How do you sleep', artist: 'Sam Smith'},
      {title: 'Sail', artist: 'Awolnation'}
   ])

   // membuat references untuk masing - masing tag input
   const titleRef = useRef()
   const artistRef = useRef()

   // function yang akan dipangil jika mensubmit
   const addNewSong = (e) => {
      e.preventDefault()

      const newSong = {
         title: titleRef.current.value,
         artist : artistRef.current.value
      }

      // menambah satu object lagu baru
      setSongs([...songs, newSong])
   }

   return (
      <div>
         <p>Kita memiliki {songs.length} lagu</p>
         <form onSubmit={addNewSong} className="form-group mt-5" >
               <input 
                  placeholder="Songs" 
                  className="form-control my-4" 
                  type="text" 
                  ref={titleRef} // data yang di ketik akan dapat diakses di titleRef.current.value
               />

               <input 
                  placeholder="artist" 
                  className="form-control my-4" 
                  type="text" 
                  ref={artistRef} // data yang di ketik akan dapat diakses di artistRef.current.value
               />

               <input className="btn btn-primary btn-block" type="submit" value="Add New Song"/>
         </form>

         <form className="form-group mt-5" >
            <input 
               placeholder="first name" 
               className="form-control" 
               type="text" 
               onChange={ (e) => setName({ ...name, firstName : e.target.value }) }
            />
            <input 
               placeholder="last name" 
               className="form-control my-4" 
               type="text" 
               onChange={ (e) => setName({ ...name, lastName : e.target.value }) }
            />
         </form>

         <p>First Name : {name.firstName}</p>
         <p>Last Name : {name.lastName}</p>
      </div>
   )
}

export default BasicUseState

// menyimpan
// state : {
//    firstName : '',
//    lastName : ''
// }

// // mengganti
// this.setState({firstName : })