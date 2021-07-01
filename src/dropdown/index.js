import React, {Fragment, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components/macro'


const modalRoot = document.getElementById('modal')

const DropdownModule = ({children, refButton, styled = {}}) => {
  const [position, setPosition] = useState({})

  useEffect(() => {
    const item = refButton.current
    if(!item) return
    setPosition(item.getBoundingClientRect())

  }, [])

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <StyledModal styled={styled} scroll={window.pageYOffset} position={position}>
          {children}
        </StyledModal>,
        modalRoot
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

    ${({styled}) => styled}
`;



