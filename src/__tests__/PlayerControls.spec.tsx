import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { PlayerControls } from '../components/game-board/player-controls/PlayerControls';
import { DefaultGameBuilder } from '../DefaultGameBuilder';
import { Game } from '../Game';

let game: Game;
beforeEach(() => {
    game = new DefaultGameBuilder().build();
  });

describe('<PlayerControls />', () => {
  it('should wait for user on start', () => {
    const props = {
        game: game,
        currentValue: 13
    }
    const documentBody = render(<PlayerControls { ...props }  />);
    expect(documentBody.queryByText('Waiting for Opponent')).toBeInTheDocument();  
    });

  it('should change the controller on start', () => {
    game.isStarted = true;
    const props = {
        game:  game,
        currentValue: 13
    }
    const documentBody = render(<PlayerControls { ...props }  />);
    expect(documentBody.queryByText('Current Value')).toBeInTheDocument();  
    });

    it('should render 3 buttons', () => {
        const props = {
            game:  game,
            currentValue: 13
        }
        game.isStarted = true;
        const documentBody = render(<PlayerControls { ...props }  />);
        const buttons = documentBody.queryAllByRole('button');
        expect(buttons).toHaveLength(3);  
    });

    it('should disable buttons correctly', () => {
        const props = {
            game:  game,
            currentValue: 13
        }
        game.isStarted = true;
        game.isSelf = true;
        game.currentValue = 13;
        const { rerender } = render(<PlayerControls { ...props }  />);
        let buttons = screen.queryAllByRole('button');
        expect(buttons).toHaveLength(3);
        expect(buttons[0]).toBeDisabled();
        expect(buttons[1]).toBeDisabled();
        expect(buttons[2]).not.toBeDisabled();

        game.currentValue = 123;
        rerender(<PlayerControls { ...props }  />)
        buttons = screen.queryAllByRole('button');
        expect(buttons[0]).toBeDisabled();
        expect(buttons[1]).not.toBeDisabled();
        expect(buttons[2]).toBeDisabled();

        game.currentValue = 14;
        rerender(<PlayerControls { ...props }  />)
        buttons = screen.queryAllByRole('button');
        expect(buttons[0]).not.toBeDisabled();
        expect(buttons[1]).toBeDisabled();
        expect(buttons[2]).toBeDisabled();

        game.isSelf = false;
        rerender(<PlayerControls { ...props }  />)
        buttons = screen.queryAllByRole('button');
        expect(buttons[0]).toBeDisabled();
        expect(buttons[1]).toBeDisabled();
        expect(buttons[2]).toBeDisabled();

    });


});
