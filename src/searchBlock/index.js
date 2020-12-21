import React from 'react'
import styled from 'styled-components/macro'
import {ModuleInput} from "../Input";
import IconDefault from './icon'
import EnterIcon from './enterIcon'
import CloseIcon from './closeIcon'

/**
 * value - string
 * onChange - func
 * bold - boolean (для определния стиля)
 * placeholder - string
 * onFocus - func
 * fill - string
 * icon - icon
 * **/


const ModuleSearchBlock = (props) => {
    const { value, onChange, onKeyPress, placeholder, onFocus, onClick, icon: Icon, styled, clear, enter, closeIcon} = props
    const handleChange = (e) => {
        if(onChange) return onChange(e.target.value)
    }
    const handleKeyPress = (e) => {
      if(e.which === 13) {
        if (onKeyPress) return onKeyPress()
      }
    }
    const handleClick = (value) => {
      onClick(value)
    }


    return (
        <Container styled={styled ? styled.container : ''}>
          <BlockIconSearch styled={styled ? styled.blockIconSearch : ''}>
            {Icon ? Icon : <IconDefault /> }
          </BlockIconSearch>
          <ModuleInput
            onChange={handleChange}
            styled={styled ? styled.input : ''}
            onKeyPress={handleKeyPress}
            onBlur={onFocus ? () => {onFocus(false)} : null}
            onFocus={onFocus ? () => {onFocus(true)} : null}
            placeholder={placeholder}
            value={value}/>
          {clear && enter && <BlockClear onClick={() => {handleClick('clear')}} styled={styled ? styled.blockClear : ''}>
            {closeIcon ? closeIcon : (<BlockIconClear styled={styled ? styled.blockIconClear : ''}>
              <CloseIcon/>
            </BlockIconClear>)}
          </BlockClear>}
          {enter && <BlockEnter onClick={()=> {handleClick('enter')} } styled={styled ? styled.blockEnter : ''}>
            <BlockEnterText styled={styled ? styled.blockEnterText : ''}>
              Enter
            </BlockEnterText>
            <BlockEnterIcon styled={styled ? styled.blockEnterIcon : ''}>
              <EnterIcon/>
            </BlockEnterIcon>
          </BlockEnter>}
        </Container>
    )
}
export default ModuleSearchBlock
//
const Container = styled.div`
position: relative;
height: 100%;
  ${({styled}) => styled}
`;
const BlockIconClear = styled.div`
    border-radius: 50%;
    display: flex;
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 1px 1px #111;
    }
  ${({styled}) => styled}

`;
const BlockClear = styled.div`
    position: absolute;
    top: 1px;
    right: 59px;
    width: 30px;
    bottom: 1px;
    padding: 9px;
      ${({styled}) => styled}
`;

const BlockEnter = styled.div`
  padding: 10px 8px 10px 12px;
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  height: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  ${({styled}) => styled}
`;
const BlockEnterText = styled.div`
    font-size: 12px;
    margin-right: 5px;
    color: #111;
    ${({styled}) => styled}
`;
const BlockEnterIcon = styled.div`
  width: 7px;
  height: 7px;
  & > svg {
    position: absolute;
  }
  ${({styled}) => styled}
`;



const BlockIconSearch = styled.div`
  cursor: pointer;
  color: rgba(255,255,255,0.7);
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0, -50%);
  ${({styled}) => styled}
`;
