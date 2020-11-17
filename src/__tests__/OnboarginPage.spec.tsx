import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { createLocation, createMemoryHistory } from 'history';
import * as React from 'react';
import { GameBoard } from '../components/game-board/GameBoard';
import { OnboardingPage } from '../components/onboarding-page/OnboardingPage';
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
      <OnboardingPage
        history={history}
        location={location}
        match={vMatch}
        game={game}
      />
    );
  });
  
describe('<PlayerControls />', () => {
    it('should render 3 buttons', () => {
        const buttons = documentBody.queryAllByRole('button');
        expect(buttons).toHaveLength(3);  
    });
});
