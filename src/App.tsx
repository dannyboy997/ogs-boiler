import React from 'react';
import './App.css';
import { Game, Level } from 'ogs-gameengine'
import { MyBoxWorldObject } from './MyBoxWorldObject';
import { MyBoxWorldObjectWall } from './MyBoxWorldObjectWall';

const App: React.FC = () => {
  var game = new Game(800, 800);

  var level = new Level();

  var worldObject = new MyBoxWorldObject();
  var worldObjectWall = new MyBoxWorldObjectWall();

  level.addWorldObject(worldObjectWall);
  level.addWorldObject(worldObject);

  game.startLevel(level);
  
  return (
    <div/>
  );
}

export default App;