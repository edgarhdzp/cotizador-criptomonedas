import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled';
import useMoneda from  '../hooks/useMoneda';
import useCryptomoneda from  '../hooks/useCryptomoneda';
import Error from './Error';
import Axios from 'axios';

const Boton = styled.input `
    margin-top:20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326ac0;
        cursor:pointer;
    }
`;

const Formulario = ({guardarMoneda, guardarCryptomoneda}) => {

    //* state del listado de cryptomonedas
    const [listadocrypto, guardarCrypto] = useState([]);
    const [error, guardarError] = useState(false);

    const Monedas = [
        {codigo: 'USD', nombre: 'Dolar Americano'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
        {codigo: 'CLF', nombre: 'Peso Chileno'},
        {codigo: 'COP', nombre: 'Peso Colombiano'},
        {codigo: 'ARS', nombre: 'Peso Argentino'},
        {codigo: 'PYG', nombre: 'Guarani'},
        {codigo: 'PEN', nombre: 'Nuevo Sol'},
        {codigo: 'UYU', nombre: 'Peso Uruguayo'}
    ]

    //* podemos cambiar el nombre o bien usar los mismos
    const [moneda, SelectMonedas] = useMoneda('Elige tu Moneda', '', Monedas);

    //* cryptomoneda
    const [criptomoneda, SelectCrypto] = useCryptomoneda('Elige tu Crypto', '', listadocrypto);

    //* ejecutar el llamado a la api 
    useEffect(() => {
       const consultarApi = async () => {
           const url = 'http://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

           const resultado = await Axios.get(url);
           
           guardarCrypto(resultado.data.Data);
       }
       consultarApi();
    }, []);

    const cotizarMoneda = e => {
        e.preventDefault();

        //*validar si ambos se ingresaron
        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }

        //*pasar los datos al componente principal
        guardarError(false);
        guardarCryptomoneda(criptomoneda);
        guardarMoneda(moneda);
    }

    return ( 
        <form
        onSubmit={cotizarMoneda}>

            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}

            <SelectMonedas />

            <SelectCrypto />

            <Boton
            type="submit"
            value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;