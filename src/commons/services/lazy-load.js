import { lazy } from 'react';

export const lazyLoad = (importFn, namedModule) => {
  const newImportFunction = async () => {
    const item = await importFn();
    return { default: item[namedModule] };
  };
  return lazy(() => newImportFunction());
};
