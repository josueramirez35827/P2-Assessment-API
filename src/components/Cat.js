import { catApi } from './services/Constants';
import { useState, useEffect } from 'react';


function Cat(props) {
  const [cat, setCats] = useState('')

  async function handleClick() {
    const result = await catApi()
    setCats(result)
  }

  useEffect(() => {
   handleClick()
  }, [])


  return (
    <div>
      <h1>Random Cats</h1>
      <button onClick={() => handleClick()}>Click For A Pic Of A Cat At Random</button>
      {cat}
    </div>
  )
}

export default Cat;