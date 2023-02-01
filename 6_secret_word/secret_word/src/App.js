import React, { useCallback,useEffect,useState } from 'react';
import './App.css';
import Game from './components/Game';
import GameOver from './components/GameOver';
import StartScreen from './components/StartScreen';

import { wordsList } from './data/words';

const stages = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"}
]

function App() {
    const [gameStage,setgameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);
    console.log(words);

    return (
      <div className="App">
        {gameStage === "start" && <StartScreen />}
        {gameStage === "game" && <Game />}
        {gameStage === "end" && <GameOver />}
      </div>
    );
  }

export default App;