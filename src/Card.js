import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 300px
  height: 400px;
  opacity: 0.94;
  transition: height 0.35s ease-out, width 0.35s ease-out, opacity 0.35s ease-out, margin-top 0.35s ease-out, border-radius 0.35s ease-out;
  border: solid 5px #222222;
  border-radius: 2px;
  margin: 50px;
  margin-top: 5px;
  z-index: 2;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABTUlEQVQ4T32UCw7DIAxDoZ9Dtb3/rdoyOdpDbkaHNDEKOE7sUI/jaMVGa63UWotmBmvNDPZ9L+4KEJD7vgNMv/M8y7Is5bquMk1TzFpz1klwRt8egB5V4ALyb7qgywSF8SObbdsa0XOqHBSwAmit/16KnxIoZVINyt86ZWbay3XTWr95nmMOHK+hRyPlzBpgArsoAbjve6SsKK4iomTVs+I/tcY2bPgBLuubAqImtRxay3048hbsvYb//FmlsivnNXLP5WCwBrzX3BmOvOcOIBgECOJ26gxJ7a31vDOy0s7+kXJuKxgDIOXXdX30c049fEhLkYrUzYzzA5IZd1/Kh/kVcVO/vS6Q0IPhwoSxAcz9iu9GjwSA8idDJQlAehgAUhaQ97ar+dbrvYYj12eReJUQiX1vx85w5DFvMS+LznoZvHN6Dd8Yvl3MKrP+AE60kq7X82vbAAAAAElFTkSuQmCC');
  background-color: rgba(5, 10, 10, 0.2);

  &:hover {
    cursor: pointer;
    border-radius: 5px;
    margin-top: 0px;
    opacity: 1;
    width: 310px
    height: 410px;
    transition: height 0.35s ease-out, width 0.35s ease-out, opacity 0.35s ease-out, margin-top 0.35s ease-out, border-radius 0.35s ease-out;
 }
`;

const Title = styled.div`
  margin: 20px 0;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #222222;
`;

const Description = styled.div`
  margin: 10px 0;
  padding: auto 0;
  text-align: center;
  vertical-align: center;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  color: #222222;
`;

const Img = styled.img`
  margin-left: 10px;
  width: calc(100% - 30px);
  background-color: #222222;
  border: solid 4px #222222;
  border-radius: 5px;
  max-height: 150px;
  src: ${props => props.src};
`;

class Card extends React.Component {
  render = () => (
    <Div onClick={this.props.onClick}>
      <Title>{this.props.title}</Title>
      <Img src={this.props.img} />
      <Description>{this.props.description}</Description>
    </Div>
  );
}

export default Card;