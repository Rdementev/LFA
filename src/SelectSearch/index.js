import React  from 'react'
import Simple from "./simple";
import List from "./list";
import SelectButch from "./butch";
import DefaultSelect from "./default";



const Select = (props)  => {
  switch (props.type) {
    case 'simple' : {
      return <Simple {...props}/>
    }
    case 'list' : {
      return <List {...props}/>
    }
    case 'butch' : {
      return <SelectButch {...props}/>
    }
    case 'default' : {
      return <DefaultSelect {...props}/>
    }
  }
}
export default Select
