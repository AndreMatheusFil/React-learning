import React from 'react'

import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Product = () => {
    const { id } = useParams();
    const url = 'http://localhost:3000/products/'+id
    const {data:product,loading,error} = useFetch(url)
    console.log(product)
  return (
    <>
     <p>ID do produto : { id } </p>
     {error && <p>Ocorreu um erro ao carregar os dados</p>}
     {loading && <p>Carregando...</p>}
     {product && (
     <div>
        <h1>{product.name}</h1>
        <p>R$ {product.price}</p>
        <Link to={`/product/${product.id}/info`}>Mais informações</Link>
     </div>)}
    </>
  )
}

export default Product