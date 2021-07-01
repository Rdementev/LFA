import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components/macro'
import {ModuleInput} from "../Input";
import Done from "./SearchIcon";
import {Listing} from "./shared";
import CloseIcon from "./closeIcon";
import DropdownModule from "../dropdown";
import {useOnClickOutside} from "../utils/useClickOutside";

const ListSelect = (props) => {
  const {
    list,
    styled = {},
    displayValue,
    onSelect,
    name,
    placeholder,
  } = props

  const [showList, setShowList] = useState(false)
  const [result, setResult] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const ListRef = useRef(null)
  const SearchRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    setSearchKey(displayValue.text)
  },[])

  // useOnClickOutside(SearchRef, buttonRef, ()=> setShowList(false))

  useEffect(()=>{
    const res = list.filter(item => item && item.text.toLowerCase().includes(searchKey.toLowerCase()))
    setResult(res)
  },[searchKey, list])


  useEffect(()=>{
    if(displayValue) setSearchKey(displayValue.text)
  },[displayValue])


  const handleClickItem = (item) => {
    setShowList(false)
    onSelect(item, name)
  }

  const handleClickClear = (e, name) => {
    e.stopPropagation()
    onSelect(null, name)
    setSearchKey('')
  }


  return (
    <StyledContainer styled={styled} ref={SearchRef}>
      <ButtonSelect ref={buttonRef} styled={styled} onClick={(e) => { setShowList(!showList)}} >
        <ButtonSpan styled={styled}>
          {displayValue ? displayValue.text : ''}
        </ButtonSpan>
        <Icons>
          {displayValue && <BlockIconClose onClick={(e) => {
            handleClickClear(e, name)
          }}>
            <CloseIcon/>
          </BlockIconClose>}
          <BlockIcon  styled={styled}  >
            <IconArrow  />
          </BlockIcon>
        </Icons>
      </ButtonSelect>
      {showList &&
      <List styled={styled}>
        <BlockInput styled={styled}>
          <ModuleInput placeholder={placeholder}
                       styled={{padding: '10px 40px 10px 10px'}}
                       value={searchKey}
                       onChange={(e) => {setSearchKey(e.target.value)}}/>
          <BlockIconInput styled={styled}
                          showList={showList}
                          onClick={(e) => {setShowList(!showList)}}>
            <IconArrow />
          </BlockIconInput>
        </BlockInput>
        <DropdownModule refButton={buttonRef}>
          <Suggestion ref={ListRef} active={showList} styled={styled}>
            <Listing list={result}
                     styled={styled}
                     onSelect={handleClickItem}
                     displayValue={displayValue}/>
          </Suggestion>
        </DropdownModule>

      </List>}
    </StyledContainer>
  )
}
export default ListSelect
//
const IconArrow = styled(Done)`
  width: 10px;
  height: 10px;
`;
const BlockInput = styled.div`
  position: relative;
  height: 36px;
  ${({styled}) => styled && styled.blockInput ? styled.blockInput  : ''}
`;

const BlockIconClose = styled.div`
    border-radius: 50%;
    opacity: 0;
    display: flex;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 5px;
    &:hover {
        box-shadow: 0 0 1px 1px #111;
    }
    @media screen and (max-width: 700px){
       opacity: 1;
    }
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

  &:hover ${BlockIconClose}{
    opacity: 1;
  }

  ${({styled}) => styled && styled.buttonSelect ? styled.buttonSelect : ''}
`;
const ButtonSpan = styled.span`
  width: 100%;
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;

  ${({styled}) => styled && styled.buttonSpan ? styled.buttonSpan  : ''}
`;
const StyledContainer = styled.div`
  position: relative;
  width: 100%;

  ${({styled}) => styled && styled.styledContainer ? styled.styledContainer  : ''}
`;
const Icons = styled.div`
    display: flex;
    align-items: center;
`;
const BlockIcon = styled.div`
  display: flex;
  width: 20px;
  height: 100%;
  cursor: pointer;


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
  z-index: ${({active}) => active ? 10 : 1};
  background: #fff;
  ${({styled}) => styled && styled.suggestion ? styled.suggestion : ''}
`;


