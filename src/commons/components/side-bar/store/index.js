import { action } from 'easy-peasy';
import { addNewStoreModel } from '#root-store/factory';
import { sideBarStoreKey } from './key';
import { MediaQuery } from '#commons/media-query';

const sideBarModel = {
  isOpen: false,
  isMobileView: false,
  alwaysShowIfMedia: MediaQuery.lg,

  setValue: action((state, payload) => {
    console.assert(
      [true, false].some((x) => x === payload.isOpen),
      'payload should contain only either of [true, false]'
    );

    return { ...state, ...payload };
  }),
};

addNewStoreModel({ key: sideBarStoreKey, model: sideBarModel });
