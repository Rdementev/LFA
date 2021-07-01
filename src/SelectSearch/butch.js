import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components/macro'
import shortId from 'shortid'
import Done from "./SearchIcon";
import {Listing} from "./shared";
import {ModuleInput} from "../Input";
import DropdownModule from "../dropdown";
import {useOnClickOutside} from "../utils/useClickOutside";

const SelectButch = (props) => {
  const {
    list,
    styled = {},
    displayValue,
    onSelect,
    name,
    placeholder,
  } = props

  const [showList, setShowList] = useState(false)
  const [value, setValue] = useState('')
  const ListRef = useRef(null)
  const SearchRef = useRef(null)
  const buttonRef = useRef(null)


  useEffect(() => {
    setValue(displayValue?.text)
  }, [])

  useOnClickOutside(SearchRef, buttonRef, ()=> setShowList(false))

  useEffect(() => {
    if (displayValue) setValue(displayValue.text)
  }, [displayValue])

  const handleClickItem = (item) => {
    setShowList(false)
    onSelect(item, name)
  }
  const handleBlurInput = () => {
    const id = shortId.generate()
    const data = value ? {id: id, text: value} : list[0]
    onSelect(data, name)
  }


  return (
    <StyledContainer styled={styled} ref={SearchRef}>
      <ButtonSelect ref={buttonRef} styled={styled} onClick={(e) => {
        setShowList(!showList)
      }}>
        <ButtonSpan styled={styled}>
          {displayValue ? displayValue.text : ''}
        </ButtonSpan>
        <BlockIcon styled={styled}>
          <IconArrow/>
        </BlockIcon>
      </ButtonSelect>
      {showList && <List styled={styled}>
        <BlockInput styled={styled}>
          <ModuleInput placeholder={placeholder}
                       styled={{padding: '10px 40px 10px 10px'}}
                       value={value}
                       onBlur={(e)=>{handleBlurInput()}}
                       onChange={(e) => {setValue(e.target.value)}}/>
          <BlockIconInput styled={styled}
                          showList={showList}
                          onClick={(e) => { setShowList(!showList)}}>
            <IconArrow />
          </BlockIconInput>
        </BlockInput>
        <DropdownModule refButton={buttonRef}>
          <Suggestion ref={ListRef} styled={styled}>
            <Listing list={list}
                     styled={styled}
                     onSelect={handleClickItem}
                     displayValue={displayValue}/>
          </Suggestion>
        </DropdownModule>

      </List>}
    </StyledContainer>
  )
}
export default SelectButch
//
const IconArrow = styled(Done)`
  width: 10px;
  height: 10px;
`;
const ButtonSelect = styled.div`
  height: 36px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid rgba(17,17,17,0.3);
  align-items: center;
  display: flex;
  color: #111;
  cursor: pointer;
  &:hover {
    border-color: #111;
  }

  ${({styled}) => styled && styled.buttonSelect ? styled.buttonSelect : ''}
`;
const ButtonSpan = styled.span`
  width: 100%;
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;

  ${({styled}) => styled && styled.buttonSpan ? styled.buttonSpan : ''}
`;
const StyledContainer = styled.div`
  position: relative;
  width: 100%;

  ${({styled}) => styled && styled.styledContainer ? styled.styledContainer : ''}
`;
const BlockIcon = styled.div`
  display: flex;
  max-width: 30px;
  margin-left: auto;
  width: 100%;
  height: 100%;
  cursor: pointer;

  & > ${IconArrow} {
    width: 10px;
    height: 10px;
  }

  & > svg {
    margin: auto;
    transform: ${({showList}) => showList ? 'rotate(180deg)' : 'none'} ;


  }
  & > svg > path {
    fill: rgb(17 17 17 / 0.3);;
    z-index: 1;
  }
  ${({styled}) => styled && styled.blockIcon ? styled.blockIcon : ''}

`;



const BlockInput = styled.div`
  position: relative;
  height: 36px;
  ${({styled}) => styled && styled.blockInput ? styled.blockInput  : ''}
`;
const BlockIconInput = styled(BlockIcon)`
  position: absolute;
  top: 0;
  right: 10px;
  transition: ease 0.3s;

  ${({styled}) => styled && styled.blockIconInput ? styled.blockIconInput  : ''}
`;
const List = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  ${({styled}) => styled && styled.list ? styled.list  : ''}
`;
const Suggestion = styled.div`
  padding: 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  z-index: 1;
  background: #fff;
  ${({styled}) => styled && styled.suggestion ? styled.suggestion : ''}
`;
