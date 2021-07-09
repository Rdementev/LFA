// @ts-ignore
import React from 'react'
import ModuleBreadCrumb from "./BreadCrumb";
import ModuleSelectSearch from "./SelectSearch";
import {ModuleInput} from "./Input";
import ModuleSearchBlock from "./searchBlock";
import ModuleActionButton from "./actionButton";
import DropdownModule from "./dropdown";
import * as Tabs from './Tabs'


export const BreadCrumb = (props) => {
  const {list = [{title: 'Main', link: '/'}], seporator = '/', onClick, styled} = props
  return <ModuleBreadCrumb list={list}
                           styled={styled}
                           seporator={seporator}
                           onClick={onClick}/>
}
export const Select = (props) => {
  const {list = [],
    type='simple',
    placeholder = 'Поиск',
    onSelect = () => {},
    styled = {},
    defaultValue = {},
    value = {id:1, text: 'text'}, name = 'test'} = props
  return <ModuleSelectSearch list={list}
                             styled={styled}
                             displayValue={value}
                             onSelect={onSelect}
                             defaultValue={defaultValue}
                             name={name}
                             type={type}
                             placeholder={placeholder} {...props}/>
}
export const Input = (props) => {
  const {styled} = props
  return <ModuleInput styled={styled}/>
}
export const SearchBlock = (props) => {
  const {
    value = '', onChange, placeholder = 'Поиск', onFocus, onClick, closeIcon = false,
    fill = '#000', icon = '', styled, onKeyPress, clear = true, enter = true
  } = props
  return <ModuleSearchBlock value={value}
                            onChange={onChange ? onChange : null}
                            closeIcon={closeIcon}
                            onKeyPress={onKeyPress ? onKeyPress : null}
                            styled={styled}
                            clear={clear}
                            enter={enter}
                            onClick={onClick ? onClick : null}
                            placeholder={placeholder}
                            onFocus={onFocus ? onFocus : null}
                            fill={fill}
                            icon={icon}/>
}
export const ActionButton = (props) => {
  const {onClick, title = 'Action', icon = false, styled = false, action = ''} = props
  return <ModuleActionButton onClick={onClick ? onClick : false}
                             icon={icon ? icon : false}
                             action={action}
                             styled={styled ? styled : false}
                             title={title}/>
}
export const Dropdown = (props) => {
  return <DropdownModule {...props}/>
}


export {
  Tabs
}
