import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components/macro'
import shortId from 'shortid'
import Done from "./SearchIcon";
import {Listing} from "./shared";

const Simple = (props) => {
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

  useEffect(() => {
    setValue(displayValue.text)
    document.addEventListener('click', handleClickOutSide, false)
    return function () {
      document.removeEventListener('click', handleClickOutSide, false)
    }
  },[])


  useEffect(()=>{
    if(displayValue) setValue(displayValue.text)
  },[displayValue])

  const handleClickOutSide = (e) => {
    const item = SearchRef.current
    if (e.path) {
      if (!e.path.includes(item)) {
        setShowList(false)
      }
    }
  }

  const handleClickItem = (item) => {
    setShowList(false)
    onSelect(item, name)
  }
  const handleBlurInput = () => {
    const id = shortId.generate()
    const data = value ? {id:id, text: value} : list[0]
    onSelect(data, name)
  }



  return (
    <StyledContainer styled={styled} ref={SearchRef}>
        <ButtonSelect styled={styled} onClick={(e) => { setShowList(!showList)}} >
          <ButtonSpan styled={styled}>
            {displayValue.text}
          </ButtonSpan>
          <BlockIcon  styled={styled}  >
            <IconArrow  />
          </BlockIcon>
        </ButtonSelect>
      {showList && <Listing value={value}
                            ListRef={ListRef}
                            onSelect={handleClickItem}
                            handleBlurInput={handleBlurInput}
                            styled={styled}
                            list={list}
                            showList={showList}
                            setShowList={setShowList}
                            displayValue={displayValue}
                            setValue={setValue}/>}
    </StyledContainer>
  )
}
export default Simple
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

  ${({styled}) => styled && styled.buttonSpan ? styled.buttonSpan  : ''}
`;
const StyledContainer = styled.div`
  position: relative;
  width: 100%;

  ${({styled}) => styled && styled.styledContainer ? styled.styledContainer  : ''}
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


