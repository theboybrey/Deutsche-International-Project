import React, { createContext, useContext, useContextReducer, useReducer } from 'react'

export const StateContext = createContext(null);

export const StateProvider = ({
    reducer, initialState, children
}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => {
    useContext(StateContext);
}