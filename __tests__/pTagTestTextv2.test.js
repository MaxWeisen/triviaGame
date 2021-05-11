import App from '../Client/App/App.js';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { build, fake } from 'test-data-bot';
import '@testing-library/jest-dom/extend-expect'


describe('', () => {
  it('Content of <p> tag should be \'I am a p tag\'', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('p1')).toHaveTextContent('I am a p tag');
  })
});