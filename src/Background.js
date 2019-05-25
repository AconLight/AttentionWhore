import React from 'react';
import styled from 'styled-components';
import CardGrid from './CardGrid';

const Parallax = styled.div`
  perspective: 1px;
  z-index: -2;
  max-height: 100vh;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Div = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -2px;
  width: 60px;
  height: 60px;
  margin-left: ${props => props.x}%;
  margin-top: ${props => props.y}vh;
  overflow-y: hidden;
  transform: translateZ(${props => props.w - 6}px) rotate(${props => props.deg}deg);
  background-color: #${props => 33 + Math.floor(props.y / 20)}${props => 33 + Math.floor(props.x / 20)}33;
`;

const squares = () => {
    const s = [];
    for(let i = -10; i < 30; i+=5) {
        for(let j = -10; j < 30; j+=2) {
            const w = Math.random()*60;
            s.push(
                {
                  x: (i*5 + (Math.random()-0.5)*4)*60/w,
                  y: (j*15 + (Math.random()-0.5)*4),
                  w: w/10,
                  deg: 45,
                }
            );
        }
    }
    return s;
};

class Background extends React.Component {
  render = () => {
    window.scrollTo(0, 500);
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { scroll: () => window.scrollTo(0, 0) })
    );
    return (    
      <Parallax>
        {squares().map((val) => (
          <Div
            x={val.x}
            y={val.y}
            w={val.w}
            h={val.h}
            deg={val.deg}
          />
        ))}
        {childrenWithProps}
      </Parallax>
    );
  }
}

export default Background;