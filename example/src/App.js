import React, {useState} from 'react'

import {compose} from "redux";
import {BrowserRouter, NavLink, Route, Switch, withRouter} from "react-router-dom";
import styled from 'styled-components/macro'
import Select from "./components/select";
import BreadcrumbContainer from "./components/breadcrumb";
import TabsContainer from "./components/tabs";


const App = (props) => {
  const {history} = props
  const [searchBlockValue, setSearchBlockValue] = useState('')
  const [displayValue, setDisplayValue] = useState('Панели')
  const [inputValue, setInputValue] = useState('Панели')
  const [onFocusInput, setOnFocus] = useState(false)

  const handleClickLink = (link) => {
    history.push(link)
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
          <Item to={'tabs'}>
            Tabs
          </Item>
        </Sidebar>
        <Switch>
          <Offer>
            <Route exact path={'/action_button'} render={()=> <div>123</div>}/>
            <Route exact path={'/select'} render={()=> <Select/>}/>
            <Route exact path={'/bread_crumb'} render={()=> <BreadcrumbContainer/>}/>
            <Route exact path={'/tabs'} render={()=> <TabsContainer/>}/>


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
