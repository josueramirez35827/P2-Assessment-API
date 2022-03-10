import { dogApi } from './services/Constants';
import { useState, useEffect } from 'react';


function Dog(props) {
  const [dog, setDoggies] = useState('')

  async function handleClick() {
    const result = await dogApi()
    setDoggies(result.message)
  }

  useEffect(() => {
    handleClick()
  }, [])


  return (
    <div>
      <h1>Random Dogs</h1>
      <button onClick={() => handleClick()}>Click For A Pic Of A Dog At Random</button>
      {dog}

    </div>
  )
}

export default Dog;