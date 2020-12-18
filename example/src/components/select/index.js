import React, {useState} from "react";
import {Select} from 'libar'


const SelectContainer = (props) => {
  const [value, setValue] = useState('')

  const handleSelect = (item, name) => {
    setValue(item)
  }
  return (
    <div>
      select
      <Select list={[{id: 1, text: '123'}, {id: 2, text: '223'}]}
              onSelect={handleSelect}
              value={value}
              name={'test'}/>
    </div>
  )
}

export default SelectContainer
