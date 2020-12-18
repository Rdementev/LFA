import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components/macro'
import {ModuleInput} from "../Input";
import shortId from 'shortid'
import Done from "./SearchIcon";

const SelectSearch = (props) => {
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
    onSelect({id:id, text: value}, name)
  }


  const getSuggestionsSoloList = (list)=> {
   if (list.length < 1) return <ItemName styled={styled} style={{textAlign: 'center'}}>Данных нет</ItemName>
    return list.map(item => {
      if (item.type === 'group') {
        return (
          <Group styled={styled}>
              <ItemGroup styled={styled}>
                {item.text}
              </ItemGroup>
            {item.items.map(elem => {
              return (
                <ItemBlock styled={styled}
                           onClick={() => {handleClickItem(elem)}}
                           isActive={displayValue.id === elem.id}>
                  {item.icon && <BlockIconItem styled={styled}>
                    {item.icon}
                  </BlockIconItem>}
                <ItemName styled={styled}>
                  {elem.text}
                </ItemName>
                </ItemBlock>
              )
            })}
          </Group>
        )
      }
      return (
        <ItemBlock styled={styled}
                   isActive={displayValue.id === item.id}
                   onClick={() => {handleClickItem(item)}}>
          {item.icon && <BlockIconItem styled={styled}>
            {item.icon}
          </BlockIconItem>}
          <ItemName styled={styled}>
            {item.text}
          </ItemName>
        </ItemBlock>
      )
    })
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
      {showList &&
      <List styled={styled}>
        <BlockInput styled={styled}>
          <ModuleInput placeholder={placeholder}
                       styled={styled.input}
                       value={value}
                       onBlur={(e)=>{handleBlurInput()}}
                       onChange={(e) => {setValue(e.target.value)}}/>
          <BlockIconInput styled={styled}
                          showList={showList}
                          onClick={(e) => { setShowList(!showList)}}>
            <IconArrow />
          </BlockIconInput>
        </BlockInput>
        <Suggestion ref={ListRef} styled={styled}>
          {getSuggestionsSoloList(list)}
        </Suggestion>
      </List>
      }
    </StyledContainer>
  )
}
export default SelectSearch
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
  line-height: 1.15;
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
const BlockIconInput = styled(BlockIcon)`
  position: absolute;
  top: 0;
  right: 10px;
  transition: ease 0.3s;

  ${({styled}) => styled && styled.blockIconInput ? styled.blockIconInput  : ''}
`;
const BlockIconItem = styled.div`
  width: 15px ;
  height: 15px;
  display: flex;
  padding: 0;
  overflow: hidden;
  margin-right: 10px;
  & > * {
    width: 100%;
    height: 100%;
    margin: auto;
  }
  ${({styled}) => styled && styled.blockIconItem ? styled.blockIconItem  : ''}
`;
const List = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  ${({styled}) => styled && styled.list ? styled.list  : ''}
`;
const Suggestion = styled.div`
  width: 100%;
  top: 130%;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  line-height: 13px;
  ${({styled}) => styled && styled.suggestion ? styled.suggestion : ''}
`;
const Group = styled.div`
  ${({styled}) => styled && styled.group ? styled.group : ''}
`;
const ItemGroup = styled.div`
  padding: 10px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  ${({styled}) => styled && styled.itemGroup ? styled.itemGroup : ''}

`;
const ItemName = styled.li`
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
    ${({styled}) => styled && styled.itemName ? styled.itemName : ''};
`;
const ItemBlock = styled.div`
  font-size: 12px;
  cursor: pointer;
  text-overflow: ellipsis;
  padding: 10px 20px 10px 10px;
  line-height: 13px;
  display: flex;
  align-items: center;

  &:hover{

  }
  ${({styled}) => styled && styled.itemBlock ? styled.itemBlock : ''};
  background-color: ${({isActive}) => isActive ? 'rgba(255,255,255,0.1)' : ''};

`;


