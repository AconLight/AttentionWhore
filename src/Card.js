import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: ${props => props.width}
  height: ${props => props.height}
  opacity: 0.94;
  transition: height 0.35s ease-out, width 0.35s ease-out, opacity 0.35s ease-out, margin-top 0.35s ease-out, border-radius 0.35s ease-out;
  border: solid 5px #222222;
  border-radius: 2px;
  margin:  ${props => props.margin || '50px'};
  margin-top: 5px;
  z-index: ${props => props.zIndex || 2};
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABTUlEQVQ4T32UCw7DIAxDoZ9Dtb3/rdoyOdpDbkaHNDEKOE7sUI/jaMVGa63UWotmBmvNDPZ9L+4KEJD7vgNMv/M8y7Is5bquMk1TzFpz1klwRt8egB5V4ALyb7qgywSF8SObbdsa0XOqHBSwAmit/16KnxIoZVINyt86ZWbay3XTWr95nmMOHK+hRyPlzBpgArsoAbjve6SsKK4iomTVs+I/tcY2bPgBLuubAqImtRxay3048hbsvYb//FmlsivnNXLP5WCwBrzX3BmOvOcOIBgECOJ26gxJ7a31vDOy0s7+kXJuKxgDIOXXdX30c049fEhLkYrUzYzzA5IZd1/Kh/kVcVO/vS6Q0IPhwoSxAcz9iu9GjwSA8idDJQlAehgAUhaQ97ar+dbrvYYj12eReJUQiX1vx85w5DFvMS+LznoZvHN6Dd8Yvl3MKrP+AE60kq7X82vbAAAAAElFTkSuQmCC');
  background-color: rgba(5, 10, 10, 0.2);

 ${props => props.position && 'position: ' + props.position};

  &:hover {
    ${props => props.onClick && 'cursor: pointer'};
    border-radius: 5px;
    margin-top: ${props => props.onClick ? '2px' : '5px'};
    opacity: 1;
    transition: height 0.35s ease-out, width 0.35s ease-out, opacity 0.35s ease-out, margin-top 0.35s ease-out, border-radius 0.35s ease-out;
 }
`;

class Card extends React.Component {
  render = () => {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { scroll: () => window.scrollTo(0, 0) })
    );
    return ( 
      <Div 
        {...this.props}
      >
        {childrenWithProps}
      </Div>
    );
  }
}

export default Card;