import App from '../Client/App/Index.js';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { build, fake } from 'test-data-bot';
import '@testing-library/jest-dom/extend-expect'


describe('', () => {
  it('Should render a p tag', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('appDiv')).toContainHTML('p');
  })
});