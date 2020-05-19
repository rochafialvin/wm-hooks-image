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
         <Card key={image.id} >
            <CardImg top width="100%" src={image.largeImageURL} alt={image.user} />
            <CardBody>
               <CardTitle><h3>{image.user ? image.user : "Anonim"}</h3></CardTitle>
               <CardText>Views : {image.views}</CardText>
               <CardText>Likes : {image.likes}</CardText>
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