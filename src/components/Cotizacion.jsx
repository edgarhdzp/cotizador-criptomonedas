import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div `
    color:#fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const Parrafo = styled.p `
    font-size:18px;

    span{
        font-weight: bold;
    }
`;

const Precio = styled.p `
    font-size: 30px;

    span{
        font-weight: bold;
    }
`;

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    
    return ( 
        <ResultDiv>
            <Precio>El precio actual: <span>{resultado.PRICE}</span></Precio>
            <Parrafo>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></Parrafo>
            <Parrafo>Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></Parrafo>
            <Parrafo>Variacion ultimas 24 hrs: <span>{resultado.CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>Actualizado: <span>{resultado.LASTUPDATE}</span></Parrafo>
        </ResultDiv>
     );
}
 
export default Cotizacion;