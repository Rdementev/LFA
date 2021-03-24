import * as React from 'react';
import styled  from 'styled-components';
import {forwardRef} from "react";
let Div = document.createElement('div')
Div.className = 'dropdown'
const Dropdown = forwardRef((props, ref) => {
  document.body.append(Div)
  const {
    width = 'select-width',
    maxHeight = 'auto',
    children,
  } = props;

  const coordinat = ref.current.getBoundingClientRect()
  console.log(coordinat)

  return (
    <Div>
      <Container
        tabIndex={0}
        widthMod={width}
        maxHeight={maxHeight}>
        {children}
      </Container>
    </Div>


  );
});

export default Dropdown;

const getWidth = ({ widthMod }) => {
  switch(widthMod){
    case 'select-width':
      return { width: 'auto' };
    case 'max-content':
      return { width: 'max-content' };
  }
};

const maxHeight = ({ maxHeight }) => ({ maxHeight });


const Container = styled.div`
    position: relative;
    transition: all .33s ease-in-out;
    border-radius: 3px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
    background-color: #fff;
    color: initial;
    z-index: 500;
    overflow: auto;
    top: 5px;
    ${getWidth}
    ${maxHeight};

    &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
        padding: 1px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 40px 0 0 40px;
    }
`;
