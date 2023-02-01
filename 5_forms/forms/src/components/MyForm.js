import React,{useState} from 'react'
import './MyForm.css'

function MyForm({user}) {
    // Gerenciamento de dados
    const[name,setName]= useState(user ? user.name:"");
    const[email,setEmail]= useState(user ? user.email: "");
    const[bio,setBio]=useState();
    const[role,setRole] = useState();

    const handleName= (e) => {
        setName(e.target.value)
    };
    console.log(name);
    console.log(email);
    const handleSubmit= (e) => {
        e.preventDefault();
        setEmail("");
        setName("");
        setBio("");
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                {/* label sem envolver o input */}
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
            </div>
            <div>
                {/* Label envolvendo o input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="Digite o seu E-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>
            </div>
            <div>
                <label> 
                    <span>Bio:</span>
                <textarea name="Bio" placeholder='Descrição do usuário' onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
                </label>
            </div>
            <div>
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e)=>setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm