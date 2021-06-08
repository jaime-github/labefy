import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardPlaylist from './CardPlaylist';



export default class PlaylistsList extends React.Component{
    state = {
        playlists: [],
        tracklist: [],    
      }
    
    
      componentDidMount() {
        this.pegarPlaylists();
    };


    
    pegarPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', 
        {
            headers: {
                Authorization: 'leticia-felix-tang'
            }
        })
        .then((resposta) => {
            this.setState({ playlists: resposta.data.result.list });
        })
        .catch((erro) => {
            console.log(erro.message)
        
        })
    };


    deletarPlaylist = (playlistId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, 
        {
            headers: {
                Authorization: 'leticia-felix-tang'
            }
        })
        .then((resposta) => {
            this.pegarPlaylists();
            alert('Playlist deletada com sucesso!')
        })
        .catch((erro) =>{
            console.log(erro.message);
            alert('Não foi possível deletar a playlist')
        })
    };

    deletarMusica = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/${id}`,
        {
            headers: {
                Authorization: 'leticia-felix-tang'
            }
        })
        .then((resposta) => {
            this.mostrarTracklist()
            alert('Música deletada com sucesso')
        })
        .catch((erro) => {
            console.log(erro.message);

        })
    };



    render() {

        const mostrarListaDePlaylists = this.state.playlists.map((playlist) => {
            return (
                <CardPlaylist 
                key={playlist.id}
                mudarPagina={this.props.mudarPagina}
                name={playlist.name}
                playlistId={playlist.id}
                deletarPlaylist={this.deletarPlaylist}/>
            )
        });
 
        return (
            <div>
               
                <div>
                 
                    {mostrarListaDePlaylists}
                </div>

            </div>
        )};
};