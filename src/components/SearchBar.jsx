import React, { useRef } from 'react'


function SearchBar(props) {

   // untuk membuat referensi jsx
   const keywordRef = useRef()
   const amountRef = useRef()

   const onSubmitForm = (e) => {
      // agar halaman tidak refresh saat submit
      e.preventDefault()

      // memanggil function yang ada di App.jsx
      // membutuhkan dua argument ('keyword gambar", jumlah gambar yang diinginkan)
      props.onSearchImage(
         keywordRef.current.value,
         amountRef.current.value
      )
      
   }

   return(
      <div>
         {/* onSubmit akan di call jika menekan tombol atau Enter di textbox */}
         <form onSubmit={onSubmitForm} className="form-group" >
            <input ref={ keywordRef } className="form-control" type="text" placeholder="Pictures" /> 
            <input ref={ amountRef } className="form-control my-3 " type="text" placeholder="How many do you want ?" />
            <input className="btn btn-outline-primary btn-block" type="submit" value="Search" />
         </form>
      </div>
   )
}

export default SearchBar;
