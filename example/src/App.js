import React, {useState} from 'react'

import {BreadCrumb, SelectSearch, SearchBlock, ActionButton, HorizontMenu} from 'libar'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import styled from 'styled-components/macro'
import Cloud from './upload_1'
import Start from './upload_2'
import Settings from './upload_3'

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
  const bredcrumb = [
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
  const options = [
    {name: 'test 1', value: 'sv', id:1, },
    {name: 'test 2', value: 'en', id:2, icon: ''},
    {name: 'test 3', value: 'en', id:3, icon: ''},
    {name: 'test 4', value: 'en', id:4, icon: 'default'},
  ];
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
  const handleClickCreate = () => {
      alert('открыть модалку')
  }
  const handleClickDone = () => {
        alert('другое действие')
  }
  const handleClickDelete = () => {
        alert('и еще другое  действие')
  }

  const handleFocus = (value) => {
    setOnFocus(value)
  }


  return (
    <>
      <HeaderClient>
        <BlockActionButton>
          <ActionButton styled={styleActionButton}
                        icon={Cloud}
                        title={'Сохранить'}
                        onClick={handleClickCreate}/>
        </BlockActionButton>
        <BlockActionButton>
          <ActionButton styled={styleActionButton}
                        title={'Выполнить'}
                        icon={Start}
                        onClick={handleClickDone}/>
        </BlockActionButton>
        <BlockActionButton>
          <ActionButton styled={styleActionButton}
                        title={'Настройка'}
                        icon={Settings}
                        onClick={handleClickDelete}/>
        </BlockActionButton>
        <BlockSelectSearch>
          <SelectSearch displayValue={displayValue}
                        value={inputValue}
                        onClickClear={handleClickClear}
                        onClick={handleClickItem}
                        styled={styleList}
                        fill={'#fff'}/>
        </BlockSelectSearch>

        <BlockSearchBlock>
          <SearchBlock clear={true}
                       enter={true}
                       styled={styleSearchBlock}
                       value={searchBlockValue}
                       onFocus={handleFocus}
                       closeIcon={<div>123</div>}
                       onChange={setSearchBlockValue}
                       fill={'rgba(255,255,255,0.7)'}/>
        </BlockSearchBlock>


      </HeaderClient>

      <Body>
        <BreadCrumb seporator={'/'}
                    list={bredcrumb}
                    onClick={handleClickLink}
        />

        <div>
          <HorizontMenu list={[{id:1, title: 'Common', icon:<Cloud/>  },{id:2, title: 'Super', con:<div>Icon1</div>}]}/>
        </div>
      </Body>


    </>
  )
}

export default compose(withRouter)(App)
//
const BlockSelectSearch = styled.div`
    width: 185px;
    margin-right: 10px;
    margin-left: auto;
`;
const Body = styled.div`
    flex-grow: 1;
    height: 100%;
`;
const Footer = styled.div`
    margin-top: auto;
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
