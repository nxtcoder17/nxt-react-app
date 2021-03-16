import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const { useState } = require('react');

export const useQueryParams = () => {
  const location = useLocation();
  const [query, setQuery] = useState({});

  useEffect(() => {
    if (location) {
      const qParams = new URLSearchParams(location.search);
      setQuery(Object.fromEntries(qParams));
    }
  }, [location]);

  return query;
};
