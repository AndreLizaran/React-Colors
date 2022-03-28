// Modules
import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

// Hooks
import useGetGeneralState from './useGetGeneralState';

// Types
import { ColorType } from '../reducers/generalReducer';

type PaletteInformation = {
  name:string;
  colors:string[];
}

export default function useGetPrivateInformation() {

  const { state, setColors, setMyColors } = useGetGeneralState();
  const { uid } = state;

  async function getSavedColors () {
    let colorsArray:ColorType[] = [];
    const response = await firestore().collection('colors').get();
    response.forEach((doc) => colorsArray.push({ ...doc.data() as { name:string, code: string }, id:doc.id }));
    setColors(colorsArray)
  }

  async function getMySavedColors () {
    let colorsArray:string[] = [];
    const response = await firestore().collection(uid).get();
    response.forEach((data) => {
      colorsArray.push((data.data().id));
    });
    setMyColors(colorsArray);
    getSavedColors();
  }

  async function getMyPalettes () {
    let palettesArray = [];

  }

  useEffect(() => {
    getMySavedColors();
  }, []);

}
