import React, { useEffect, useState } from 'react';
import Axios from 'axios'

const Compliment = (props) => {
  const [compliment, setCompliment] = useState([])

  const getCompliment = async () => {
    try {
      const data = await Axios.get('https://complimentr.com/api')
      setCompliment(data.data.compliment)
      console.log(data.data.compliment)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getCompliment()
  }, [setCompliment])

  return (
    <div className="wrapper">
      <h2> We miss you Shawn! <br />
          Click the button for a daily compliment from us !
      </h2>
      <button onClick={() => getCompliment()}> Compliment me! </button>
      <h2>
        {compliment}
      </h2>
    </div>
  )
}

export default Compliment