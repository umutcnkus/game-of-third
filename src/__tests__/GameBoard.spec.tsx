import '@testing-library/jest-dom';
import { render, RenderResult, screen } from '@testing-library/react';
import { createLocation, createMemoryHistory } from 'history';
import * as React from 'react';
import { GameBoard } from '../components/game-board/GameBoard';
import { DefaultGameBuilder } from '../DefaultGameBuilder';

let game;
let documentBody: RenderResult;
let history;
let path;
let vMatch;
let location;

beforeEach(() => {
  game = new DefaultGameBuilder().build();
  history = createMemoryHistory();
  path = `/route/:id`;
  vMatch = {
    isExact: false,
    path,
    url: path.replace(':id', 'example'),
    params: {id: 'example'},
  };
location = createLocation(vMatch.url);
  documentBody = render(
    <GameBoard
      history={history}
      location={location}
      match={vMatch}
      game={game}
    />
  );
});

describe('<GameBoard />', () => {
  it('should initialy start with manuel mode', () => {
    expect(documentBody.getByRole('switch')).toHaveAttribute("aria-checked", "false");
  });
});
