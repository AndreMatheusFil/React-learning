import React from 'react'

import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {
    const [searchParam] = useSearchParams()
    const url = "http://localhost:3000/products?"+searchParam
    const {data:itens,loading,error} = useFetch(url)
    console.log(searchParam)
  return (
    <div>
        <h1>Resultados disponivel</h1>
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

export default Search