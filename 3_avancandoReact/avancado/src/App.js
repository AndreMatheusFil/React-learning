import React, { useState } from 'react'
import Lobo from './Assets/img2.jpg';
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import ConditionalRender from './Components/ConditionalRender';
import ShowUserName from './Components/ShowUserName';
import CarDetails from './Components/CarDetails';

import './App.css';
import Fragmented from './Components/Fragmented';
import ExecuteFunction from './Components/ExecuteFunction';
import Mensage from './Components/Mensage';
import ChageMensage from './Components/ChageMensage';
import UserDetails from './Components/UserDetails';



function App()  {
  const cars = [
    {id:1, brand:"Kia",km: 0,Color:"Azul"},
    {id:2, brand:"Ford",km: 25147,Color:"Vermelho" },
    {id:3, brand: "Ferrari",km: 0,Color:"Amarelo" },
  ];

  const pessoas = [
    {id:1, nome:"André", idade:25, profissao:"Programador"},
    {id:2, nome:"Rafael", idade:15, profissao:"Motorista"},
    {id:3, nome:"Gabriel", idade:35, profissao:"Chefe"}]

  const [mensagem,setMensagem] = useState()

  const handleMensagemState = (msg) => {
    setMensagem(msg);
  };
  
  function ShowMessage() {
    console.log("Evento vindo do componente pai!");    
  }
    return (
      <div className="App">
        {/* Imagem direto do public*/}
        <div>
          <img id='Fundo' src="/img1.jpg" alt="Fundo" />
        </div>
        {/* Imagem do Assets */}
        <div>
          <img id='lobo'src={Lobo} alt="" />
        </div>
        <div>
          <ManageData />
        </div>
        <div>
          <ListRender />
        </div>
        <div>
          <ConditionalRender />
        </div>
        <div>
          <ShowUserName name='André'/>
        </div>
        <div>
          <CarDetails  brand='Ford' color='Azul' km={10500.500}/>
        </div>
        {cars.map((car)=>(
          <CarDetails key={car.id} brand={car.brand} color={car.Color} km={car.km}/>
        ))}
        <div>
          <Fragmented />
        </div>
        <ExecuteFunction myFunction={ShowMessage}/>
        <Mensage msg={mensagem} />
        <ChageMensage handleMensagemState={handleMensagemState} />
        {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} idade={pessoa.idade} nome={pessoa.nome} profissao={pessoa.profissao}/>
        ))}
      </div>
    );
  }

export default App;
