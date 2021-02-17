import { action } from 'easy-peasy';
import { MediaQuery } from '~/commons/media-query';
import { rootStore } from '~/store';

const initState = {
  isOpen: false,
  isMobileView: false,
  alwaysShowIfMedia: MediaQuery.lg,
};

const sideBarModel = {
  ...initState,

  setValue: action((state, payload) => {
    console.assert(
      [true, false].some((x) => x === payload.isOpen),
      'payload should contain only either of [true, false]'
    );

    return { ...state, ...payload };
  }),

  reset: action((state) => {
    Object.entries(initState).forEach(([key, value]) => {
      state[key] = value;
    });
  }),
};

rootStore.addModel('side-bar', sideBarModel);
