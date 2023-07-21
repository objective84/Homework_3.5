import React from 'react'

const Counter = ({setCount}) => {
  
    // function add(e){

    //     setCount( previousCount =>{
    //         return previousCount + 1;
    //     })
    // }

    return (
    <>
    <button onClick={e =>{
        setCount( previousCount =>{
            return previousCount + 1
        })
    }}>Add to Count</button>
    </>
  )
}

export default Counter