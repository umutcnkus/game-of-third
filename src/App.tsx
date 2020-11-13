import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { io } from 'socket.io-client';
import { Socket } from 'socket.io-client';
import { OnboardingPage } from './onboarding-page/OnboardingPage';
import { GameBoard } from './game-board/GameBoard';
import { DefaultGameBuilder } from './WinningStrategies/DefaultGameBuilder';

export interface CustomSocket extends Socket {
  isHost: boolean;
  roomId: string;
}

function App() {
  const builder = new DefaultGameBuilder();
  const game = builder.build()

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(props) => <OnboardingPage {...props} game={game} />} />
        <Route path="/play/:id" render={(props) => <GameBoard {...props} game={game} />} />
      </Switch>
    </Router>
  );
}

export default App;
