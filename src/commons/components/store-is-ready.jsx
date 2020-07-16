import React from 'react';
import { useStoreState } from 'easy-peasy';

export const StoreIsReady = ({ storeKey, ...props }) => {
  const isStoreReady = useStoreState((state) => storeKey in state);
  return (
    <>
      {!isStoreReady && <>Loading Store ...</>}
      {isStoreReady && props.children}
    </>
  );
};
