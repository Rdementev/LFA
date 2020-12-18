import React, {useState} from "react";
import {Select} from 'libar'
import styled from 'styled-components/macro'


const SelectContainer = (props) => {
  const [value, setValue] = useState({id: 1, text: '123'})

  const handleSelect = (item, name) => {
    setValue(item)
  }
  return (
    <Container>
      <Item>
        <Title>
          simple select
        </Title>
        <Select list={[{id:1, type: 'group', text: 'example', items: [{id: 1, text : 'example',  }]}]}
                onSelect={handleSelect}
                value={value}
                type={'simple'}
                name={'test'}/>
      </Item>
      <Item>
        <Title>
          list select
        </Title>
        <Select list={[{id:1, text: 'example'}]}
                onSelect={handleSelect}
                value={value}
                type={'list'}
                name={'test'}/>
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
