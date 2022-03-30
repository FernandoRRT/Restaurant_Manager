import { useState, useEffect } from "react";
//it consists in a useState storaged in borwser cookie
const usePersistedState = (key, initialState) => {
    const [state, setState] = useState(() => {
      //here is the function wich get the cookie  info
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });
//with a useEffect we monitorate the changes in the persistedState value held in setState
    useEffect(() => {
      localStorage.setItem(key,JSON.stringify(state))
    }, [key, state]);
    return [state, setState];
};
export { usePersistedState };
