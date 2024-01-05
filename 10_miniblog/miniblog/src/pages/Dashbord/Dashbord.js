import React from 'react'
import styles from './Dashbord.module.css'

//hooks 
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link } from "react-router-dom"
import Loader from '../../components/Loader'

const Dashbord = () => {
  const {user} = useAuthValue()
  const uid = user.uid 
  const {documents:posts, loading } = useFetchDocuments("posts",null,uid)
  return (
    <div>
      <h2>Dashbord</h2>
      <div>
      {loading ? (
        <Loader/>
      ):(
      <div>
        {posts && posts.length === 0 ? (
        <div>
            <p>Não forma encontrados posts</p>
            <Link to="/post/create" className="btn">Criar primeiro post</Link>
        </div>
      ) : (
        <div>
          {posts && posts.map(()=> <h3>{posts.title}</h3>)}
        </div>
      )}
      </div>)}
      <p>Gerencie seus posts</p>
      </div>
    </div>
  )
}

export default Dashbord