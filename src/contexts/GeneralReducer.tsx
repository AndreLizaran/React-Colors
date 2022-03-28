// Modules
import React, { createContext, useReducer } from 'react';

// Reducers
import generalReducer, 
  {
    Loadings, 
    LoginUserPayload, 
    SetColorsPayload,
    SetModalOnScreenPayload,
    SetMyColorsPayload, 
    SetSelectedColorPayload, 
    SetToastMessagePayload, 
    State
  } 
from '../reducers/generalReducer';

const initialStateLoadings:Loadings = {
  loadingColors: true,
  loadingMyColors: true,
}

const initialStateContext:State = {
  uid:'',
  username:'',
  myColors:[],
  colors: [],
  loadings: initialStateLoadings,
  toastMessage:'',
}

type ContextType = {
  state:State;  
  loginUser: (payload:LoginUserPayload) => void;
  logoutUser: () => void;
  setColors: (payload:SetColorsPayload) => void;
  setMyColors: (payload:SetMyColorsPayload) => void;
  setToastMessage: (payload:SetToastMessagePayload) => void;
  addColorToMyColors: (payload:string) => void;
  setSelectedColor: (payload:SetSelectedColorPayload) => void;
  setModalOnScreen: (payload:SetModalOnScreenPayload ) => void
}

export const GeneralContext = createContext({} as ContextType);

export default function GeneralState ({ children }:any) {

  const [state, dispatch] = useReducer(generalReducer, initialStateContext);

  function loginUser (payload:LoginUserPayload) {
    dispatch({ type:'LOGIN_USER', payload });
  }

  function logoutUser () {
    dispatch({ type:'LOG_OUT_USER', payload:null });
  }

  function setColors (payload:SetColorsPayload) {
    dispatch({ type:'SET_COLORS', payload });
  }

  function setMyColors (payload:SetMyColorsPayload) {
    dispatch({ type:'SET_MY_COLORS', payload });
  }

  function addColorToMyColors (payload:string) {
    dispatch({ type:'ADD_COLOR_TO_MY_COLORS', payload });
  }

  function setToastMessage (payload:SetToastMessagePayload) {
    dispatch({ type:'SET_TOAST_MESSAGE', payload });
    setTimeout(() => {
      dispatch({ type:'SET_TOAST_MESSAGE', payload:'' });
    }, 1500)
  }

  function setSelectedColor (payload:SetSelectedColorPayload) {
    dispatch({ type:'SET_SELECTED_COLOR', payload });
  }

  function setModalOnScreen (payload:SetModalOnScreenPayload) {
    dispatch({ type:'SET_MODAL_ON_SCREEN', payload });
  }

  return (
    <GeneralContext.Provider 
      value={{ 
        state, 
        loginUser, 
        logoutUser, 
        setColors, 
        setMyColors, 
        setToastMessage, 
        addColorToMyColors,
        setSelectedColor,
        setModalOnScreen
      }}>
      {children}
    </GeneralContext.Provider>
  )
}
