import React, {useState} from 'react'
import useCapitalize from '../hooks/useCapitalize'

function PokeCard(props) {
  const [myState, setMyState] = useState(false)
  const name = useCapitalize(props.name)
  return (
    <div className='poke-card' onClick={() => setMyState(!myState)}>
      <h2>{name}</h2>
      {myState ? <h4>It's a cool pokemon!</h4> : null}
    </div>
  )
}

export default PokeCard