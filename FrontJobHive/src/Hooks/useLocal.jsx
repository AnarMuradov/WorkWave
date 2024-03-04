import { useEffect, useState } from "react";

function useLocal(key, initialvalue = "") {
  const [local, setLocal] = useState(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialvalue
  );
  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(local))
    
  }, [local,key]);

  return [local,setLocal];
}

export default useLocal;
