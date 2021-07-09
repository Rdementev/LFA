import React, {useState} from "react";
import {Select} from 'libar'
import styled from 'styled-components/macro'


const SelectContainer = (props) => {
  const [valueSimple, setValueSimple] = useState({id: 1, text: 'simple'})
  const [valueList, setValueList] = useState({id: 2, text: 'list'})
  const [valueButch, setValueButch] = useState({id: 3, text: 'butch'})


  const handleSelectSimple = (item, name) => {
    setValueSimple(item)
  }

  const handleSelectList = (item, name) => {
    setValueList(item)
  }
  const handleSelectButch = (item, name) => {
    setValueButch(item)
  }


  return (
    <Container>
      <Item>
        <Title>
          simple select
        </Title>
        <Select list={[{id:1, type: 'group', text: 'example', items: [{id:4, text: 'example'}, {id:2, text: 'example2'}, {id:3, text: 'example3'}]}]}
                onSelect={handleSelectSimple}
                value={valueSimple}
                type={'simple'}
                pos={'left'}
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
                pos={'left'}
                name={'list'}/>
      </Item>
      <Item>
        <Title>
          default select
        </Title>
        <Select list={[{id:1, text: 'example'}, {id:2, text: 'example2'}, {id:3, text: 'example3'}]}
                onSelect={handleSelectList}
                value={null}
                defaultValue={{id:1, text: 'default'}}
                type={'default'}
                pos={'left'}
                name={'default'}/>
      </Item>
      <Item>
        <Title>
          butch select
        </Title>
        <Select list={[{id:1, text: 'example'}, {id:2, text: 'example2'}, {id:3, text: 'example3'}]}
                onSelect={handleSelectButch}
                value={valueButch}
                type={'butch'}
                pos={'right'}
                name={'butch'}/>
      </Item>
    </Container>
  )
}

export default SelectContainer
//
const Container = styled.div`
  display: flex;
`;
const Title = styled.div`
  margin-bottom: 20px;
`;
const Item = styled.div`
  padding: 30px;
  width: 100%;
`;
