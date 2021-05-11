import '@testing-library/jest-dom/extend-expect'
import {
  renderHook,
  act,
  cleanup,
} from '@testing-library/react-hooks';
import {
  usePlusOne,
} from '../Client/App/App.js';

afterEach(cleanup);
describe('usePlusOne test', () => {
  test('newValue should increment by 1', () => {
    const {
      result
    } = renderHook(() => usePlusOne());

    act(() => {
      result.current.setNewValue();
    });

    expect(result.current.newValue).toBe(4)
  })

});