import React, {useContext} from 'react'
import {
   Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button
 } from 'reactstrap';


// context
import { FavContext } from '../config/context/FavContext'

function ImageList(props) {

   const {dispatch} = useContext(FavContext)

   const onClick = (image) => {
      // dispatch akan mengirim object {type, payload} ke FavReducer
      dispatch(
         {
            type: 'ADD_FAV',
            payload: image
         }
      )
   }

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
               <Button color="primary" block onClick={ () => onClick(image) } >Favorite</Button>
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