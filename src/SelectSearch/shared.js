import React, {forwardRef} from "react";
import styled from "styled-components/macro";


export const Listing = (props) => {
  const {
    list,
    styled,
    onSelect,
    displayValue,
  } = props

  const getSuggestionsSoloList = (list, styled)=> {
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
                             key={item.id}
                             onClick={() => {onSelect(elem)}}
                             isActive={displayValue?.id === elem.id}>
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
                   isActive={displayValue?.id === item.id}
                   onClick={() => {onSelect(item)}}>
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

  return getSuggestionsSoloList(list, styled)
}

//
const BlockIconItem = styled.div`
  min-width: 20px ;
  max-width: 20px;
  height: 20px;
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
    background: #f1f1f1;
    border-radius: 4px;
  }
  ${({styled}) => styled && styled.itemBlock ? styled.itemBlock : ''};
  background-color: ${({isActive}) => isActive ? 'rgba(255,255,255,0.1)' : ''};

`;
