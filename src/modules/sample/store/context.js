import { createContext } from 'react';

const key = 'sample';
export default createContext({
  key,
  store: (state) => state[key],
});
