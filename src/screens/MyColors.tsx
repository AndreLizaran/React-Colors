// Modules
import React from 'react';

// Components
import Alert from '../components/shared/Alert';
import Toast from '../components/shared/Toast';
import ColorList from '../components/shared/ColorList';
import Container from '../components/shared/Container';
import LoadingContainer from '../components/shared/LoadingContainer';

// Hooks
import useGetGeneralState from '../hooks/useGetGeneralState';

export default function MyColors() {

  const { state } = useGetGeneralState();
  const { myColors, loadings } = state;
  const filteredColors = state.colors.filter((color) => myColors.includes(color.id));

  return (
    <Container pt={state.myColors.length === 0 ? true : false}>
      { 
        (myColors.length === 0 && !loadings.loadingMyColors)
        ? <Alert text='There are no saved colors' type='danger'/>
        : <ColorList data={filteredColors}/>   
      }
      {
        loadings.loadingMyColors
        ? <LoadingContainer/>
        : <></>
      }
      <Toast/>
    </Container>
  )
}
