import { makeThunks } from '#commons/services/easy-peasy';

const services = {};

services.doSample = (actions, payload) => {
  // Do any asynchronous task and Call an action to change state
};

export const sampleServices = makeThunks(services);
