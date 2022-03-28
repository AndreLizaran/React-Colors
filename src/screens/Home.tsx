// Modules
import React from 'react';
import ColorList from '../components/shared/ColorList';

// Components
import Container from '../components/shared/Container';
import LoadingContainer from '../components/shared/LoadingContainer';
import Toast from '../components/shared/Toast';

// Data
import useGetGeneralState from '../hooks/useGetGeneralState';

export default function Home() {

  const { state } = useGetGeneralState();
  const { loadings } = state;

  return (
    <Container pt={false}>
      { 
        loadings.loadingColors 
        ? <LoadingContainer/>
        : <ColorList data={state.colors}/>
      }
      <Toast/>
    </Container>
  )
}
