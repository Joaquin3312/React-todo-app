import { useEffect, useState } from "react";
function useLocalStorage(itemName, initialValue){

  const [item, setItem] = useState(initialValue);
  
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);  
      let parsedItem;
  
      if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }
      setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true)
        setLoading(false);
      }
    },2000)
  },[]);
  
  const saveItem = (newItem) =>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');
// const hardCodeTodos = [
//   { id:1, text: 'Estudiar más', completed: false },
//   { id:2, text: 'Levantarse más temprano', completed: true },
//   { id:3, text: 'Comer mejor', completed: true },
//   { id:4, text: 'Arreglar el asiento', completed: true },
//   { id:5, text: 'Juegar', completed: true },
//   { id:6, text: 'Arreglar el asiento', completed: false }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(hardCodeTodos));