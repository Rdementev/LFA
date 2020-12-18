import React  from 'react'
import Simple from "./simple";
import List from "./list";



const Select = (props)  => {
  switch (props.type) {
    case 'simple' : {
      return <Simple {...props}/>
    }
    case 'list' : {
      return <List {...props}/>
    }
  }
}
export default Select
