import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

import './Home.css'

const Home = () => {
  const url = 'http://localhost:3000/products'
  const {data: itens,loading,error} = useFetch(url)

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className='products'>
        {itens && itens.map(item => (
          <li id={item.id}>
            <h2>{item.name}</h2>
            <p>R$ {item.price}</p>
            <Link to={`/product/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home