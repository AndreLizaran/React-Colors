export type LoginUserPayload = { uid:string; username:string };
export type SetColorsPayload = ColorType[];
export type SetMyColorsPayload = string[];
export type SetToastMessagePayload = string;
export type AddColorToMyColorsPayload = ColorType;
export type SetSelectedColorPayload = { id:string; name:string; code:string };
export type SetModalOnScreenPayload = '' | 'colors' | 'palettes';

type LoginUser = { type: 'LOGIN_USER', payload:LoginUserPayload };
type LogOutUser = { type: 'LOG_OUT_USER', payload: null };
type SetColors = { type: 'SET_COLORS', payload:SetColorsPayload }
type SetMyColors = { type: 'SET_MY_COLORS', payload:SetMyColorsPayload }
type SetToastMessage = { type: 'SET_TOAST_MESSAGE', payload:SetToastMessagePayload }
type AddColorToMyColors = { type: 'ADD_COLOR_TO_MY_COLORS', payload:string }
type SetSelectedColor = { type:'SET_SELECTED_COLOR', payload:SetSelectedColorPayload };
type SetModalOnScreen = { type:'SET_MODAL_ON_SCREEN', payload:SetModalOnScreenPayload }

export type State = {
  uid:string;
  username:string;
  myColors: string[];
  colors: ColorType[];
  loadings: Loadings;
  toastMessage: string;
}

export type Loadings = {
  loadingColors:boolean;
  loadingMyColors:boolean;
}

export type ColorType = {
  name:string;
  code:string;
  id:string;
}

type Action = 
  LoginUser | 
  LogOutUser |
  SetColors | 
  SetMyColors | 
  SetToastMessage |
  AddColorToMyColors | 
  SetSelectedColor | 
  SetModalOnScreen

export default function generalReducer (state:State, action:Action):State {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        ...action.payload
      }
    case 'LOG_OUT_USER':
      return {
        ...state,
        uid: '',
        username: '',
        myColors:[],
        colors:[]
      }
    case 'SET_COLORS': 
      return {
        ...state,
        colors: action.payload,
        loadings: {
          ...state.loadings,
          loadingColors:false
        }
      }
    case 'SET_MY_COLORS': 
      return {
        ...state,
        myColors: action.payload,
        loadings: {
          ...state.loadings,
          loadingMyColors:false
        }
      }
    case 'SET_TOAST_MESSAGE': 
      return {
        ...state,
        toastMessage: action.payload
      }
    case 'ADD_COLOR_TO_MY_COLORS': 
      return {
        ...state,
        myColors: [...state.myColors, action.payload]
      }
    default: 
      return state;
  }
}