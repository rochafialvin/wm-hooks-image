import React from 'react'

function ImageList(props) {

   // props.images = [{image}, {image}, {image}]
   // image : { id, desription, alt_description, urls, likes, user }
   const images = props.images.map(image => {
      return (
         <div class="card">
            <img class="card-img-top" src={image.urls.regular} alt={image.description} /> {/* self closing tag */}
            <div class="card-body">
            <h5 class="card-title">{image.description}</h5>
               <p class="card-text">{image.alt_description}</p>
            </div>
         </div>
      )
   })

   return(
      <div className="card-columns" >
         {images}
      </div>
   )
}

export default ImageList;

/*
   image : {
      id, desription, alt_description, urls, likes, user
   }
*/