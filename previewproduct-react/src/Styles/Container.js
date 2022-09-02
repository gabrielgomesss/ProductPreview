import styled from 'styled-components';

export const Background = styled.body`
width: 100%;
height: 100%;
background-color: hsl(30, 38%, 92%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Card = styled.div`
width: 90%;
height: 80%;
background-color: #fff;
display: flex;
flex-direction: column;
margin-top: 5%;
border-radius: 20px 20px 20px 20px ;
margin-bottom: 5%;

@media(min-width: 1440px){
    flex-direction: row;
    width: 50%;
}

`

export const Description = styled.div`
width: 100%;
height: 100%;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 0 0 20px 20px ;
`
export const PriceContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
`
export const CartButton = styled.button`
width: 80%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #3c8067;
border-radius: 10px 10px 10px 10px;
margin-bottom: 5%;
border: 0;
&:hover{
    cursor: pointer;
    background-color:  #306451;
}
`