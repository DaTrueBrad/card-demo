import React, {useState} from 'react'

function PokeCard(props) {
  const [myState, setMyState] = useState(false)
  return (
    <div className='poke-card' onClick={() => setMyState(!myState)}>
      <h2>{props.name}</h2>
      {myState ? <h3>It's a cool pokemon!</h3> : null}
    </div>
  )
}

export default PokeCard