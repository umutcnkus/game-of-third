import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as HashRouter, Route } from "react-router-dom";
import { Socket } from 'socket.io-client';
import { OnboardingPage } from './components/onboarding-page/OnboardingPage';
import { GameBoard } from './components/game-board/GameBoard';
import { DefaultGameBuilder } from './DefaultGameBuilder';

export interface CustomSocket extends Socket {
  isHost: boolean;
  roomId: string;
}

function App() {
  const builder = new DefaultGameBuilder();
  const game = builder.build()

  return (
    <HashRouter basename='/game-of-third'>      
        <Route path="/" exact render={(props) => <OnboardingPage {...props} game={game} />} />
        <Route path="/play/:id" render={(props) => <GameBoard {...props} game={game} />} />
    </HashRouter>
  );
}

export default App;
