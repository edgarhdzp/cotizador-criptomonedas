import React from 'react'
import { useState } from 'react';
import styled from '@emotion/styled';
import { Fragment } from 'react';

const Label = styled.label `
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight:bold;
    font-size:2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select `
    width:100%;
    display:block;
    padding:1rem;
    -webkit-appearance:none;
    border-radius: 10px;
    border:none;
`;

const useCryptomoneda = (label, stateInicial, opciones) => {
    
    //* state de nuestro hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">--Selecciona--</option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    );

    //* Restornar state, interfaz y func que actualiza el state
    return [state, SelectCrypto, actualizarState];
}

export default useCryptomoneda;