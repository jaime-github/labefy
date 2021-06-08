import React from 'react';
import PlaylistTracklist from './PlaylistTracklist';
import PlaylistsList from './PlaylistsList';



export default class Playlists extends React.Component {
    state = {
        mostrarPag: "listaPlaylist",
        playlistId: ""

    }

    mudarPagina = (mostrarPag, playlistId) => {
        this.setState({ 
            mostrarPag: mostrarPag,
            playlistId: playlistId })
    }

    render() {

        const  mostrarPagina = () => {
            if (this.state.mostrarPag === "listaPlaylist"){
                return <PlaylistsList mudarPagina={this.mudarPagina}/>
            } else if (this.state.mostrarPag === "tracklistDaPlaylist") {
                return <PlaylistTracklist 
                mudarPagina={this.mudarPagina}
                playlistId={this.state.playlistId} />
            }
        }

        return(

            <div>
                {mostrarPagina()}
            </div>
        )
    }
};