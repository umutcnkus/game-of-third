import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MoveHolder } from '../components/move-holder/MoveHolder';
import '@testing-library/jest-dom';

let documentBody: RenderResult;

describe('<MoveHolder />', () => {  
  it('should just render negative number container', () => {
    const props = { 
      previousValue: 1,
      playedMove: -1 ,
      remainder: 0,
      isSelf: true,
    }
    documentBody = render(<MoveHolder { ...props }  />);
    expect(documentBody.queryByText('Decreased')).toBeInTheDocument();
    expect(documentBody.queryByText('Increased')).toBeNull();
    expect(documentBody.queryByText('Passed')).toBeNull();
  });

  it('should just render positive number container', () => {
    const props = { 
      previousValue: 1,
      playedMove: 1 ,
      remainder: 0,
      isSelf: true,
    }
    documentBody = render(<MoveHolder { ...props }  />);
    expect(documentBody.queryByText('Decreased')).toBeNull();
    expect(documentBody.queryByText('Increased')).toBeInTheDocument();
    expect(documentBody.queryByText('Passed')).toBeNull();
  });

  it('should just render neutral number container', () => {
    const props = { 
      previousValue: 1,
      playedMove: 0 ,
      remainder: 0,
      isSelf: true,
    }
    documentBody = render(<MoveHolder { ...props }  />);
    expect(documentBody.queryByText('Decreased')).toBeNull();
    expect(documentBody.queryByText('Increased')).toBeNull();
    expect(documentBody.queryByText('Passed')).toBeInTheDocument();
  });
});