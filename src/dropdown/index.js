import React, {forwardRef, Fragment, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components/macro'


const dropdownRoot = document.getElementById('dropdown')

const DropdownModule = ({children, refButton, styled = {}}) => {
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
        <StyledModal styled={styled} scroll={window.pageYOffset} position={position}>
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
    top: ${({position, scroll}) => position ? position.y + position.height + 15 + scroll : ''}px ;
    left: ${({position}) => position ? position.x : ''}px;
    width: ${({position}) => position ? position.width : ''}px;
    z-index: 999;
    box-shadow: 0 10px 15px -5px rgba(21,19,99,0.1);
    border-radius: 4px;

    ${({styled}) => styled}
`;



