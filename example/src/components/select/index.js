import React, {useState} from "react";
import {Select} from 'libar'
import styled from 'styled-components/macro'


const SelectContainer = (props) => {
  const [valueSimple, setValueSimple] = useState({id: 1, text: 'simple'})
  const [valueList, setValueList] = useState({id: 1, text: 'list'})

  const handleSelectSimple = (item, name) => {
    setValueSimple(item)
  }

  const handleSelectList = (item, name) => {
    debugger
    setValueList(item)
  }


  return (
    <Container>
      <Item>
        <Title>
          simple select
        </Title>
        <Select list={[{id:1, type: 'group', text: 'example', items: [{id:1, text: 'example'}, {id:2, text: 'example2'}, {id:3, text: 'example3'}]}]}
                onSelect={handleSelectSimple}
                value={valueSimple}
                type={'simple'}
                name={'simple'}/>
      </Item>
      <Item>
        <Title>
          list select
        </Title>
        <Select list={[{id:1, text: 'example'}, {id:2, text: 'example2'}, {id:3, text: 'example3'}]}
                onSelect={handleSelectList}
                value={valueList}
                type={'list'}
                name={'list'}/>
      </Item>

    </Container>
  )
}

export default SelectContainer
//
const Container = styled.div`
  max-width: 300px;
`;
const Title = styled.div`
  margin-bottom: 20px;
`;
const Item = styled.div`
  padding: 30px;
`;
