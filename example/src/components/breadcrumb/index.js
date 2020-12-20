import React, {useState} from "react";
import {BreadCrumb} from 'libar'
import styled from 'styled-components/macro'


const BreadcrumbContainer = (props) => {


  return (
    <Container>
      <Item>
        <Title>
         Bread crumb
        </Title>
        <BreadCrumb list={[{id: 1, title: 'Главная', link: '/'}, {id:2, title: 'Хлебные крошки'},]}/>
      </Item>
    </Container>
  )
}

export default BreadcrumbContainer
//
const Container = styled.div`
`;
const Title = styled.div`
  margin-bottom: 20px;
`;
const Item = styled.div`
  padding: 30px;
`;
