import React from 'react';
import styled from 'styled-components';
import CriarPlaylist from './CriarPlaylist';

const TituloLabefy = styled.h1`
    font-size: 50px;
    display: flex;
    width: 400px;
`
const BoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 800px;
`

export default class Header extends React.Component {
    render() {
        return(
            <BoxHeader>
                <TituloLabefy>Labefy</TituloLabefy>
                <CriarPlaylist />
            </BoxHeader>
        )
    }
};