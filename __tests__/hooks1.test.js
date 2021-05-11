import '@testing-library/jest-dom/extend-expect'
import {
  renderHook,
  act,
  cleanup,
} from '@testing-library/react-hooks';
import {
  useState,
} from '../Client/App/App.js';

afterEach(cleanup);
describe('testA Hook', () => {
  test('testA hook should have a value of true', () => {
    const {
      result
    } = renderHook(() => useState());

    act(() => {
      result.current.setTestA();
    });

    expect(result.current.true).toBe(true)
  })

});