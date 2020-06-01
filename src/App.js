import React from 'react';
import Board from './components/Board'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
          <h1 className="Header">DnD Todo Maker! <span>🖊️</span></h1>
          <main className="flexbox">

           <Board id="board-1" className="board">
             <Card id="card-1" className="card" draggable="true">
              <p>This is Card 1</p>
             </Card>
           </Board>

           <Board id="board-2" className="board">
             <Card id="card-2" className="card" draggable="true">
              <p>This is Card 2</p>
             </Card>
           </Board>

          </main> 
         
    </div>
  );
}

export default App;
