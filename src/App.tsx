import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { io } from 'socket.io-client';
import { Socket } from 'socket.io-client';
import { OnboardingPage } from './onboarding-page/OnboardingPage';
import { GameBoard } from './game-board/GameBoard';

export interface CustomSocket extends Socket {
  isHost: boolean;
  roomId: string;
}

function App() {
  const socket = io('http://localhost:1234') as CustomSocket;
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(props) => <OnboardingPage {...props} socket={socket} />} />
        <Route path="/play/:id" render={(props) => <GameBoard {...props} socket={socket} />} />
      </Switch>
    </Router>
  );
}

export default App;
