import React, {forwardRef, Fragment, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components/macro'


const dropdownRoot = document.getElementById('dropdown')

const DropdownModule = ({children, refButton, styled = {}, pos = 'left'}) => {
  const [position, setPosition] = useState({})

  useEffect(() => {
    const item = refButton.current
    if(!item) return
    setPosition(item.getBoundingClientRect())
    dropdownRoot.style.position = 'initial'
    return function () {
      dropdownRoot.style.position = 'absolute'
    }
  }, [])

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <StyledModal styled={styled} window={window} position={position} pos={pos}>
          {children}
        </StyledModal>,
        dropdownRoot
      )}
    </Fragment>
  )
}

export default DropdownModule
//
const StyledModal = styled.div`
    position: absolute;
    top: ${({position, window}) => position ? position.y + position.height + 15 + window.pageYOffset : ''}px ;
    left: ${({position, pos}) => position && pos === 'left' ? position.x : ''}px;
    right: ${({position, pos, window}) => position && pos === 'right' ? window.innerWidth  - position.x - position.width: ''}px;
    width: ${({position}) => position ? position.width : ''}px;
    z-index: 999;
    box-shadow: 0 10px 15px -5px rgba(21,19,99,0.1);
    border-radius: 4px;

    ${({styled}) => styled}
`;



