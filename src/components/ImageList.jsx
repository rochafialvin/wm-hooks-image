import React from 'react'

function ImageList(props) {

   // props.images = [{image}, {image}, {image}]
   // image : { id, desription, alt_description, urls, likes, user }
   const images = props.images.map(image => {
      return (
         <div className="card" key={image.id}>
            <img className="card-img-top" src={image.urls.regular} alt={image.description} /> {/* self closing tag */}
            <div className="card-body">
            <h5 className="card-title">{image.description}</h5>
               <p className="card-text">{image.alt_description}</p>
            </div>
            <button className="btn btn-block btn-outline-danger" >Add to favorite</button>
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