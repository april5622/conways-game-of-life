import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay, started) => {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      let id = null;
      if (delay !== null && started) {
        id = setInterval(tick, delay);
        return () => {
          clearInterval(id);
        };
      } else {
        if (id) {
          clearInterval(id);
        }
      }
    }, [callback, delay, started]);
  };