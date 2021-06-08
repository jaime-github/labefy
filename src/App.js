import React from 'react';
import Playlists from './components/Playlists';
import styled from 'styled-components';
import AdicionarMusicas from './components/AdicionarMusicas';
import Header from './components/Header'



const Background = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #e2eafc;
  background-repeat: repeat-y;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center
`


export default class App extends React.Component {
  state = {
    mudarTela: "mostrarPlaylists",
  }


  mudaTela = () => {
     this.setState({ mudarTela: !this.state.mudarTela});
   
  }


  render() {

    const mudancaDeTela = () => {
      if (this.state.mudarTela === "mostrarPlaylists") {
        return <Playlists />
    } else if (this.state.mudarTela === "mostrarAddMusicas") {
        return <AdicionarMusicas />
    }
  }

    return(
      <Background>

        <Header />
        {mudancaDeTela()}

      </Background> 
    );
  }
      
};
