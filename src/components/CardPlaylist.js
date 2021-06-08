import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    display: flex;
    width: 25vw;
    margin: 10px 0 10px 40px;
    justify-content: space-between;
    align-items: center;    
`
const BackgroundCard = styled.div`
    background-color: #ccdbfd;
    display: flex;
    width: 50vw;
    height: 8vh;
    margin: 10px 0 10px 40px;
    justify-content: center;
    align-items: center;    
`

const Botao = styled.button`
    background-color: #abc4ff;
    border-radius: 8px;
`


const CardPlaylist = (props) => {
        return(
                <BackgroundCard key={props.playlistId}>
                    <CardDiv >
                            <h3>{props.name}</h3>
                            <Botao onClick={() => {props.mudarPagina("tracklistDaPlaylist", props.playlistId)}}>Ver</Botao>
                            <Botao onClick={() => {props.deletarPlaylist(props.playlistId)}}>Deletar playlist</Botao>                                         
                    
                    </CardDiv>
                </BackgroundCard>
        )
    }
export default CardPlaylist