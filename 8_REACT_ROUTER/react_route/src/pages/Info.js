import React from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {
    const { id } = useParams()
  return (
    <>
        <h1>Mais informações do produto: {id}</h1>
    </>
  )
}

export default Info