import styled from "styled-components";
import {transparentize} from '../utils/transparentize';

export const ModuleInput = styled.input`
  width: 100%;
  height:  36px;
  padding: 10px;
  margin: 0;
  background: #fff;
  border: 1px solid  rgba(17,17,17,0.3);
  font-size: 100%;
  line-height: 1.15;
  font-family: "Open Sans", sans-serif;
  border-radius: 4px;
  color: #111;
  text-overflow: ellipsis;
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  ${props => (props.error ? "border: 1px solid #DE4D4D" : null)};

  &:hover {
    border-color: #111;
    color: #111;
  }

  &:focus {
    border-color: #111;
    color: #111;
    outline: none;
    background: ${({backgroundOnFocus}) => backgroundOnFocus};
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color:   ${transparentize(0.5, '#111')};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color:  ${transparentize(0.5, '#111')};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color:  ${transparentize(0.5, '#111')};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color:  ${transparentize(0.5, '#111')};
  }

  ${({styled}) => styled};
`;


