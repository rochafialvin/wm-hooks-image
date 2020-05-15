import React, {useEffect, useState} from 'react'

const BasicUseEffect = () => {

   const [numberOne, setNumberOne] = useState(0)
   const [numberTwo, setNumberTwo] = useState(0)

   // useEffect akan running setiap kali component render
   useEffect(() => {
      console.log('useEffect saja')
   })

   // useEffect hanya akan running jika data yang berubah adalah numberOne
   useEffect(() => {
      console.log('useEffect [numberOne]')
   }, [numberOne])

   // berperilaku sama seperti componentDidMount
   useEffect(() => {
      console.log('useEffect [ ]')
   }, [])

   return (
      <div>
         {console.log('render')}
         <div className="w-50 mx-auto">
            <h1>Number One: {numberOne}</h1>
            <h1>Number Two: {numberTwo}</h1>
            <button  
               className="btn mr-3 btn-outline-danger mx-auto" 
               onClick={() => setNumberOne(numberOne + 1)}
            >Increment + 1</button>
            <button  
               className="btn btn-outline-danger mx-auto" 
               onClick={() => setNumberTwo(numberTwo + 5)}
            >Increment + 5</button>
         </div>   
      </div>
   )
}

export default BasicUseEffect
