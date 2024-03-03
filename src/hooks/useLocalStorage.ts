import {useEffect, useState} from "react";

const useLocalStorage = (key, defData) => {
 const[state, setState] = useState(() => {
  const localData = localStorage.getItem(key);
  return localData || defData;
 });

 useEffect(() => {
  localStorage.setItem(key, state)
 }, [key, state]);
 return [state, setState]
};

export {useLocalStorage};