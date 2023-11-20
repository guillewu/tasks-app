import React, { createContext, useEffect, useReducer } from "react";
import reducer, { initializer } from "../reducer/reducer";

export const Context = createContext<any>([]);

export const Provider = ({ children }: { children: any }) => {
  const [store, dispatch] = useReducer(
    reducer,
    { tasks: [], editingTask: {} },
    initializer
  );

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(store));
  }, [store]);

  return (
    <Context.Provider
      value={{
        store,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
