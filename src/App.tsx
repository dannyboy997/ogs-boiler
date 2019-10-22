import React from 'react';
import './App.css';
import { Game, Level, WorldObject } from 'ogs-gameengine'

const App: React.FC = () => {
  var game = new Game(800, 800);

  var level = new Level();

  var worldObject = new WorldObject();

  level.addWorldObject(worldObject);

  game.startLevel(level);

  return (
    <div
      style={{ width: "95%", height: "95%" }}
      ref={(mount) => { game.MountElement = mount||new HTMLDivElement() }}
    />
  );
}

export default App;
