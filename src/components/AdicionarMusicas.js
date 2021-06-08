import React from 'react';
import axios from 'axios';
import styled from 'styled-components';



const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    gap: 10px;
`


export default class AdicionarMusicas extends React.Component {
    state = {
        tracklist: [],
        musicas: [],
        nomeMusica: "",
        nomeArtista: "",
        linkMusica: ""
    }


    onChangeNomeMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
    };

    onChangeNomeArtista = (event) => {
        this.setState({ nomeArtista: event.target.value })
    };

    onChangeLinkMusica = (event) => {
        this.setState({ linkMusica: event.target.value })
    };



    adicionarMusicaNaPlaylist = () => {
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.nomeArtista,
            url: this.state.linkMusica
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.tracklistId}/tracks`, body,
        {
            headers: {
                Authorization: 'leticia-felix-tang'
            }
        })
        .then((resposta) => {
            this.setState({ nomeMusica: ""  });
            this.setState({ nomeArtista: ""  });
            this.setState({ linkMusica: ""  });
            alert('Música adicionada com sucesso!')
        })
        .catch((erro) => {
            console.log(erro.message);
            alert('Não foi possível adicionar a música')
        })
    }

    render() { 
        
        return(
            
                <DivInputs>
                    <label><strong>Título</strong></label>
                    <input value={this.state.nomeMusica} onChange={this.onChangeNomeMusica}></input>
                    <label><strong>Artista</strong></label>
                    <input value={this.state.nomeArtista} onChange={this.onChangeNomeArtista}></input>
                    <label><strong>URL:</strong></label>
                    <input value={this.state.linkMusica} onChange={this.onChangeLinkMusica}></input>
                    <button onClick={this.adicionarMusicaNaPlaylist}>ADICIONAR MÚSICA</button>
                </DivInputs>
        
        )
    }
}