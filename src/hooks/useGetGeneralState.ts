// Modules
import { useContext } from 'react';

// Contexts
import { GeneralContext } from '../contexts/GeneralReducer';

export default function useGetGeneralState() {
  return useContext(GeneralContext);
}
