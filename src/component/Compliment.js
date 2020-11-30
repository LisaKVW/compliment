import React, { useEffect, useState } from 'react';
import Axios from 'axios'

const Compliment = (props) => {
  const [compliment, setCompliment] = useState([])

    const getCompliment = async () => {
      try{
        const data = await Axios.get('https://complimentr.com/api')
        setCompliment(data.data.compliment)
        console.log(data.data.compliment)
      }catch (error){
        throw error
      }
    }

    useEffect (() => {
      getCompliment()
    },[setCompliment])

   return (
       <div className="wrapper">
          <button onClick={() => getCompliment()}> Compliment me! </button>
          <h3>
            {compliment}
       </h3>
       </div>
   )
}

export default Compliment