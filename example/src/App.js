import React, {useState} from 'react'

import {BreadCrumb, SelectSearch, SearchBlock, ActionButton, HorizontMenu, Menu} from 'libar'
import {compose} from "redux";
import {BrowserRouter, NavLink, Route, Switch, withRouter} from "react-router-dom";
import styled from 'styled-components/macro'
import Select from "./components/select";


const App = (props) => {
  const {history} = props
  const [searchBlockValue, setSearchBlockValue] = useState('')
  const [displayValue, setDisplayValue] = useState('Панели')
  const [inputValue, setInputValue] = useState('Панели')
  const [onFocusInput, setOnFocus] = useState(false)

  const handleClickLink = (link) => {
    history.push(link)
  }

  const a = 'test'
  const breadcrumb = [
    {
      title: 'запросы',
      link: '/serves',
    },
    {
      title: 'запрос запросов',
      link: '/serves/create-document',
    },
    {
      title: `${a}`,
      link: '/123213213',
    },

  ]
  const styleList = {
    list: {

    },
    suggestion : {
      background : '#4361B8',
      borderRadius: '0',
      padding: '5px',
      border: '1px solid #6786DA',
      margin: '0',
      top: '89%',
      borderBottomRightRadius: '4px',
      borderBottomLeftRadius: '4px',
      color: 'rgba(255,255,255,0.7)',
      maxHeight: '120px',
      overflow: 'scroll',
    },
    group : {

    },
    itemGroup : {

    },
    blockInput : {},


    input: {
      borderRadius: '4px',
      height: '32px',
      backgroundColor: '#4361B8',
      borderColor: '#6786DA',
      color: '#fff',
      "::placeholder" : {
        color: 'rgba(255,255,255,0.7)'
      },

      '&:hover': {
        borderColor: '#6786DA',
        color: '#fff'
      },
      '&:focus': {
        borderColor: '#6786DA',
        color: '#fff'
      }
    },
    buttonSelect: {
      padding: '10px 0 10px 10px',
    },
    styledContainer: {

    },

    blockIcon: {
      height: '32px'
    },
    blockIconInput: {

    },
    itemName : {
      fontSize: '10px',
      padding: '6px',
      borderRadius: '4px',
      transition: 'ease 0.3s',
      '&:hover':{
        color: '#fff',
        background: 'rgba(255,255,255,0.1)'
      }
    },
  }
  const styleActionButton = {
    button : {
      background: '#2e4c9f',
      cursor: 'pointer',
      borderRadius: '4px',
      border: '1px solid #3857ae',
      color: '#ffffff'
    },
    blockIcon : {
      backgroundColor: '#516DBE',
    },
  }
  const styleSearchBlock = {
    input : {
      height: '32px',
      borderRadius: '4px',
      backgroundColor: '#2E4C9F',
      borderColor: '#3857AD',
      color: '#fff',

      '::placeholder': {
        color: 'rgba(255,255,255,0.7)'
      },

      '&:hover' : {
        borderColor: '#3857AD',
        color: '#fff',
      },
      '&:focus': {
        borderColor: '#3857AD',
        color: '#fff'
      }
    }
  }

  const handleClickItem = (selected, multi) => {
    if(!multi){
      setDisplayValue(
        <DisplayValue>
          <div>{selected[0].icon}</div>
          <div>{selected[0].name}</div>
          <div>{selected[0].value}</div>
        </DisplayValue>
      )
      setInputValue(selected[0].name)
    }
  }
  const handleClickClear = () => {
      setDisplayValue('Панели')
      setInputValue('Панели')
  }
  const handleClickDelete = () => {
        alert('и еще другое  действие')
  }
  const handleFocus = (value) => {
    setOnFocus(value)
  }


  return (
    <BrowserRouter>
      <Container>
        <Sidebar>
          <Item to={'action_button'}>
            Action Button
          </Item>
          <Item to={'bread_crumb'}>
            Bread crumb
          </Item>
          <Item to={'search_block'}>
            Search block
          </Item>
          <Item to={'select'}>
            Select search block
          </Item>
        </Sidebar>
        <Switch>
          <Offer>
            <Route exact path={'/action_button'} render={()=> <div>123</div>}/>
            <Route exact path={'/select'} render={()=> <Select/>}/>


          </Offer>

        </Switch>
      </Container>

      {/*<HeaderClient>*/}
      {/*  <BlockActionButton>*/}
      {/*    <ActionButton styled={styleActionButton}*/}
      {/*                  title={'Настройка'}*/}
      {/*                  icon={Settings}*/}
      {/*                  onClick={handleClickDelete}/>*/}
      {/*  </BlockActionButton>*/}
      {/*  <BlockSelectSearch>*/}
      {/*    <SelectSearch displayValue={displayValue}*/}
      {/*                  value={inputValue}*/}
      {/*                  onClickClear={handleClickClear}*/}
      {/*                  onClick={handleClickItem}*/}
      {/*                  list={[{id:1, name: '123'}]}*/}
      {/*                  styled={styleList}/>*/}
      {/*  </BlockSelectSearch>*/}

      {/*  <BlockSearchBlock>*/}
      {/*    <SearchBlock clear={true}*/}
      {/*                 enter={true}*/}
      {/*                 styled={styleSearchBlock}*/}
      {/*                 value={searchBlockValue}*/}
      {/*                 onFocus={handleFocus}*/}
      {/*                 closeIcon={<div>123</div>}*/}
      {/*                 onChange={setSearchBlockValue}*/}
      {/*                 fill={'rgba(255,255,255,0.7)'}/>*/}
      {/*  </BlockSearchBlock>*/}


      {/*</HeaderClient>*/}
      {/*<BreadCrumb seporator={'/'}*/}
      {/*            list={bredcrumb}*/}
      {/*            onClick={handleClickLink}*/}
      {/*/>*/}
      {/*<Body>*/}
      {/*  */}
      {/*  */}
      {/*</Body>*/}


    </BrowserRouter>
  )
}

export default compose(withRouter)(App)
//
const Offer = styled.div`
    padding: 20px;
    width: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
`;
const Sidebar = styled.div`
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  height: 100%;
  padding: 20px;
  width: 100%;
`;
const Item = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;
  color: #111;
  font-weight: 500;
  border-radius: 4px;
  &:hover {
    background: #cccccc4d;
  }
`;
const BlockSearchBlock = styled.div`
  width: 185px;
`;
const HeaderClient = styled.div`
    padding: 10px 20px;
    background: #284493;
    display: flex;

`;
const BlockActionButton = styled.div`

`;
const DisplayValue = styled.div`
    align-items: center;
    display: flex;
`;
