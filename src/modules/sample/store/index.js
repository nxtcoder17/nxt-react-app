import { action } from 'easy-peasy';
import { rootStore } from '~/store';

/*
 * Guidelines:
      whenver, you add a model, add a function named `reset` that resets that state to initial State
 */

const sampleState = {
  author: {
    name: 'nxtcoder17',
    email: 'nxtcoder17@gmail.com',
  },

  reset: action((state) => {
    state.author = {
      name: '',
      email: '',
    };
  }),
};

rootStore.addModel('sample', sampleState);
