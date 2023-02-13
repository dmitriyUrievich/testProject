import React from 'react';
import {useDispatch} from "react-redux";
import {setPerPage} from "../Store/repoSlice";
// import Select from 'react-select'
const SelectComponent = () => {
  const dispatch = useDispatch()
  const arr = [10,25,50]
 const handleChange = (event)=> {
   console.log(event.target.value)
   dispatch(setPerPage(event.target.value))
  }
  return (
    <span className='form'>
      <select className="form-select" onChange={handleChange}>
        {arr.map(i=>
          <option className='form-option' key={i} value={i}>{i}</option>
        )}
      </select>
    </span>

  );
};

export default SelectComponent;
