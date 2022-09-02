import './App.css';
import { ReactComponent as Cart } from './images/icon-cart.svg'
import { Background, Card, Description, PriceContainer, CartButton } from './Styles/Container'
import { Title, Subtitle, Category, Price, PriceOff, ButtonTitle } from './Styles/Titles & Subtitles';
function App() {
  return (
    <Background>
      <Card>
        <img className='Mobile' src={require('./images/image-product-mobile.jpg')}/>
        <img className='Desktop' src={require('./images/image-product-desktop.jpg')}/>
        <Description>

          <Category>Perfume</Category>
          
          <Title> Gabrielle Essence Eau De Parfum</Title>
          
          <Subtitle>
            A floral, solar and voluptuous interpretation
            composed by Olivier Polge, Perfumer-
            Creator for the House of CHANEL.
          </Subtitle>
          
          <PriceContainer>
            <Price>$149,00</Price>
            <PriceOff>$169,99</PriceOff>
          </PriceContainer>
          
          <CartButton>
            <Cart src={require('./images/icon-cart.svg')}></Cart>
            <ButtonTitle>Add to Cart</ButtonTitle>
          </CartButton> 
        
        </Description>

      </Card>
    </Background>
  );
}

export default App;
