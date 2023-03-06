import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from'./Home.module.css'

const Home = () => {
  const [query,setQuery] =useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const [posts] = useState([])
  return (
    <div className={styles.home}>
      <h1>Veja nossos Posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)}/>
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {posts && posts.length === 0 &&(
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to='/Post/Create' className='btn'>Criar o primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home