import React from 'react'

// css
import styles from'./Home.module.css'

//hooks
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
//componentes
import PostDetail from '../../components/PostDetail'
import Loader from '../../components/Loader'

const Home = () => {
  const [query,setQuery] =useState('');
  const { documents:posts , loading} =useFetchDocuments("posts");
 
  const Navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();

    if (query){
      return Navigate(`/search?q=${query}`);
    }
  }

  return (
    <div className={styles.home}>
      <h1>Veja nossos Posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)}/>
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <Loader />}
        {posts && posts.map((post) =>(
          <PostDetail id={post.id} post ={post} />
        ))}
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