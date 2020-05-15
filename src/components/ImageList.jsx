import React from 'react'
import {
   Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button
 } from 'reactstrap';

function ImageList(props) {

   // props.images = [{image}, {image}, {image}]
   // image : { id, desription, alt_description, urls, likes, user }
   const images = props.images.map(image => {
      return (
         <Card>
            <CardImg top width="100%" src={image.urls.regular} alt={image.alt_description} />
            <CardBody>
               <CardTitle><h3>{image.description ? image.description : "No Title"}</h3></CardTitle>
               <CardText>{image.alt_description}</CardText>
               <Button color="primary" block >Favorite</Button>
            </CardBody>
         </Card>
      )
   })

   return(
      <div className="card-columns" >
         {images}
      </div>
   )
}

export default ImageList;