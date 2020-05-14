import React from 'react'

function ImageList(props) {
   return(
      <div>
         <h1>Terdapat {props.images.length} gambar</h1>
      </div>
   )
}

export default ImageList;