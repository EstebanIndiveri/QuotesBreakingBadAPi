import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase=styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;
    margin-top:32%;
 
    
    h1{
        font-family:Arial, Helvetica, sans-serif;
        text-align:center;
        position:relative;
        padding-left:4rem;
        font-size:1.8rem;

        &::before{
            content:open-quote;
            font-size:8rem;
            color:black;
            position:absolute;
            left:-1rem;
            top:-2rem;
            
        }
    }
    p{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size:1.6rem;
        text-align:right;
        color:#665;
        margin-top:2rem;
    }
`;
const Frase = ({frase}) => {
    if(Object.keys(frase).length===0)return null;
    return ( 
    <ContenedorFrase>
    <h1>{frase.quote}</h1>
    <p>{frase.author}</p>
    </ContenedorFrase>
    );
}
 
export default Frase;