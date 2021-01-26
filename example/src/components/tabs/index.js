import React from 'react'
import {Tabs} from 'libar'
import styled from 'styled-components/macro'

const TabsContainer = () => {
  return (
    <Tabs.Container>
        <Line>
          <Item isActive>Первая вкладка </Item>
          <Item>Вторая вкладка</Item>
        </Line>

      <Body>
        <Tabs.Content>
          Первый контент
        </Tabs.Content>
        <Tabs.Content>
          Второй контент
        </Tabs.Content>
      </Body>

    </Tabs.Container>
  )
}

export default TabsContainer

const Line = styled.div`
    display: flex;
    grid-gap: 0 24px;
    justify-content: center;
`;
const Body = styled.div`
    padding: 1em;
`;
const Item = styled(Tabs.Item)`
    padding: .4rem 8px;
    cursor: pointer;
    border-radius: 2px;
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    color: #222C35;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #F2F2F2;
    }

    &:active {
        background-color: #E4E4E4;
    }

    &.isActive {
        border-bottom: 2px solid #2E828B;
        cursor: default;
        pointer-events: none;
    }
`;
