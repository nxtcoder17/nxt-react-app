import React, { useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import { LoadingIndicator } from './loading-indicator';

export const StoreIsReady = ({ modelKey, ...props }) => {
  const isStoreReady = useStoreState((state) => modelKey in state);
  return (
    <>
      <LoadingIndicator when={!isStoreReady} />
      {isStoreReady && props.children}
    </>
  );
};
